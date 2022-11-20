export type auth =
  | {
      token: string;
      auth: true;
    }
  | {
      token: null;
      auth: false;
    };
