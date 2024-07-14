import { jwtDecode } from 'jwt-decode';

type TokenPayload = {
  sub: string;
  firstName: string;
  lastName: string;
  iat: number;
  exp: number;
  role: string;
  tokenType: string;
};

export const getUserInfoFromToken = (token: string): TokenPayload | null => {
  try {
    const decoded = jwtDecode<TokenPayload>(token);
    return decoded;
  } catch (error) {
    console.error('Failed to decode token', error);
    return null;
  }
};
