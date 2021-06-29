const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const uid = require('rand-token').uid;

const logger = require('../logger');
const User = require('../models/user');
const RefreshToken = require('../models/refreshToken');

const secret = process.env.tokenSecret;
const accessTokenExpiresIn = 3600;

router.post('/create', (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      login: req.body.login,
      password: hash,
    });
    user.save().then(
      result => {
        logger.info(req.originalUrl.concat(' response'));

        res.status(201).json({
          message: 'Użytkownik "' + result.login + '" został zarejestrowany.',
          result: result,
        });
      },
      error => {
        logger.error(req.originalUrl.concat(' error'));

        res.status(403).json({
          // m.in. Użytkownik o podanym login już istnieje
          message: 'Jakiś ogólny błąd bazy danych.',
          error: error,
        });
      }
    );
  });
});

router.post('/login', (req, res, next) => {
  let fetchedUser;
  User.findOne({ login: req.body.login })
    .then(
      user => {
        if (!user) {
          logger.info(req.originalUrl.concat(' response'));

          return res.status(401).json({
            message: 'Błędne dane logowania.',
          });
        }
        fetchedUser = user;

        return bcrypt.compare(req.body.password, user.password);
      },
      error => {
        logger.error(req.originalUrl.concat(' response'));

        return res.status(500).json({
          message: err,
        });
      }
    )
    .then(result => {
      if (!result) {
        logger.info(req.originalUrl.concat(' response'));

        return res.status(401).json({
          message: 'Błędne dane logowania.',
        });
      }
      const accessToken = jwt.sign({ userId: fetchedUser._id }, secret, {
        expiresIn: accessTokenExpiresIn,
      });
      const refreshToken = uid(256);
      // na razie refreshToken nie ma terminu ważności!
      RefreshToken.updateOne(
        { userId: fetchedUser._id },
        { refreshToken: refreshToken },
        { upsert: true }
      )
        .then(() => {
          logger.info(req.originalUrl.concat(' response'));

          res.status(200).json({
            message: 'Użytkownik zalogowany.',
            userId: fetchedUser._id,
            accessToken: accessToken,
            expiresIn: accessTokenExpiresIn,
            login: fetchedUser.login,
            refreshToken: refreshToken,
          });
        })
        .catch(err => {
          logger.error(req.originalUrl.concat(' response'));

          // dopieścić ten case
          res.status(500).json({
            message:
              'Kredentiale ok ale zapis tokena w bazie danych nieudany.' + err,
          });
        });
    })
    .catch(err => {
      logger.error(req.originalUrl.concat(' error'));

      res.status(401).json({
        message: err,
      });
    });
});

router.post('/accessToken', (req, res, next) => {
  const userId = req.body.userId;
  const refreshToken = req.body.refreshToken;

  RefreshToken.findOne({ refreshToken: refreshToken })
    .then(doc => {
      if (doc.userId === userId) {
        const accessToken = jwt.sign({ userId: doc.userId }, secret, {
          expiresIn: accessTokenExpiresIn,
        });
        logger.info(req.originalUrl.concat(' response'));

        res.status(200).json({
          message: 'Sesja użytkownika została przedłużona.',
          userId: doc.userId,
          accessToken: accessToken,
          expiresIn: accessTokenExpiresIn,
        });
      } else {
        logger.error(req.originalUrl.concat(' error'));

        res
          .status(401)
          .json({ message: 'Przedłuzenie sesji nie powiodło się.' });
      }
    })
    .catch(err => {
      logger.info(req.originalUrl.concat(' response'));

      res.status(401).json({
        message: 'Przedłuzenie sesji nie powiodło się.',
        error: err,
      });
    });
});

module.exports = router;
