export interface UserData {
  _id: string;
  userName: string;
  hash: string;
  salt: string;
}

export interface AuthResponse {
  message: string;
  userData: UserData;
  accessToken: string;
}
