export interface Province {
  id: number;
  no: number;
  firstname?: string;
  lastname?: string;
  dateIn: Date | string;
  quantityStay?: number;
  priceRoom?: string;
  sumPrice?: number;
  fee?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
