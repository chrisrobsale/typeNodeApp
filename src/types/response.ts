export interface User {
  id: number;
  email: string;
  username: string;
}

export interface UserList {
  message: string;
  data: Array<object>;
}
