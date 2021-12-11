import { createContext, Dispatch, SetStateAction } from 'react';
import { CognitoUser } from '@aws-amplify/auth';

interface AuthContextType {
  user: CognitoUser | undefined;
  setUser: Dispatch<SetStateAction<CognitoUser>>;
}

const initialContext: AuthContextType = {
  user: undefined,
  setUser: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialContext);
