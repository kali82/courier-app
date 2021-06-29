const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema(
  {
    name: { type: String },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    consignments: [
      {
        id: String,
        creationDateTime: { type: String },
        shipmentDateTime: { type: String },
      },
    ],
  },
  { collection: 'users' }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
