export interface User {
    _id: number;
    login: string;
    consignments: [
        {
          id: String,
          creationDateTime: String,
          shipmentDateTime:  String,
          settled: Boolean
        },
    ]
    phone: string;
  }