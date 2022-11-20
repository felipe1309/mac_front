export interface user {
  tipo: "admin" | "normal";
  _id: string;
  name: string;
  email: string;
  password: string;
}
export type userDataLog = Omit<user, "_id" | "tipo">;
export type userDataContext = Omit<user, "_id" | "password" | "email">