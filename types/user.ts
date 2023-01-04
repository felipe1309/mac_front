export interface user {
  tipo: "admin" | "normal";
  _id: string;
  name: string;
  email: string;
  password?: string;
}
interface aditionalData {
  typeAuth: "normal" | "facebook" | "google";
}
export type userDataLog = Omit<user, "_id" | "tipo">;
export type userDataLogUp = userDataLog
export type userDataContext = Omit<user, "_id" | "password" | "email">;
