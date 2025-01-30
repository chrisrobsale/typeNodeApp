export interface UserResponse {
  id: number;
  email: string;
  username: string;
}

export interface CommonResponse {
  message: string;
  data: any[];
}

export interface CategoryResponse {
  id: number;
  name: string;
}
