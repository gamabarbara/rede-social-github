export interface Message {
  uid?: string;
  message: string;
  closed?: number;
  name : string;
  date?: string;
  creatorPhoto?: string | null;
}
