import { createContext, Dispatch, SetStateAction } from 'react';

interface IAlertContext {
  isError: boolean;
  errorMessage: string;
  isSuccess: boolean;
  successMessage: string;
  setIsError: Dispatch<SetStateAction<boolean>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
}

const initialContext: IAlertContext = {
  isError: false,
  errorMessage: '',
  isSuccess: false,
  successMessage: '',
  setIsError: () => {},
  setErrorMessage: () => {},
  setIsSuccess: () => {},
  setSuccessMessage: () => {},
};

export const AlertContext = createContext<IAlertContext>(initialContext);
