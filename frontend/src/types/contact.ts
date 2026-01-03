export interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}