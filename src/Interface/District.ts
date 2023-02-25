export interface District {
  id: number;
  no: number;
  dateIn: Date | string;
  roomNo: string | null;
  firstname: string;
  lastname: string;
  nationality: string | null;
  idCard: string | null;
  address: string | null;
  occupation: string | null;
  comeFrom: string | null;
  goTo: string | null;
  checkOut: Date | string;
  note: string | null;
}
