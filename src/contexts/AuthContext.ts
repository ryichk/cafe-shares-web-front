import { createContext, Dispatch, SetStateAction } from 'react';
import { ICognitoUser } from '../interfaces';

interface IAuthContext {
  user: ICognitoUser | undefined;
  setUser: Dispatch<SetStateAction<ICognitoUser>>;
}

const initialContext: IAuthContext = {
  user: undefined,
  setUser: () => {},
};

export const AuthContext = createContext<IAuthContext>(initialContext);
