class ConsignmentExcerpt {
  constructor(consignmentId, creationDateTime, shipmentDateTime) {
    this.consignmentId = consignmentId;
    this.creationDateTime = creationDateTime;
    this.shipmentDateTime = shipmentDateTime;
  }
  set setLogin(value) {
    this.login = value;
  }

  set setShipperName(value) {
    this.shipperName = value;
  }

  set setReceiverName(value) {
    this.receiverName = value;
  }

  // do wyjebania jeśli niepotrzebne
  // set setWidth(value) {
  //   this.width = value;
  // }

  // set setType(value) {
  //   this.type = value;
  // }

  // set setHeight(value) {
  //   this.height = value;
  // }

  // set setLength(value) {
  //   this.length = value;
  // }

  // set setWeight(value) {
  //   this.weight = value;
  // }

  set setTrackAndTraceInfo(value) {
    this.trackAndTraceInfo = value;
  }
}

module.exports = ConsignmentExcerpt;
