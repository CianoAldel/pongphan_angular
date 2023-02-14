export interface Detail {
  DateIn: string;
  PriceStay: string;
  Charge: number;
  Firstname: string;
  Lastname: string;
  Nationality: string;
  IdCard: string;
  Address: string;
  Occupation: string;
  Comefrom: string;
  Goto: string;
  Checkout: string;
  Note: string;
  QuantityStay: string;
  PriceRoom: string;
  SumPrice: string;
  RoomNo: RoomNo;
  CreatedAt?: Date;
  UpdateAt?: Date;
}

interface RoomNo {
  options: Array<string>;
}
