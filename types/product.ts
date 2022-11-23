export interface image {
  url: string;
  public_id: string;
}
export interface product {
  name: string;
  value: number;
  image: image;
  description:string
  _id: string;
}
