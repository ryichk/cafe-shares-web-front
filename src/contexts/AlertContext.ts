import { createContext, Dispatch, SetStateAction } from 'react';

interface IAlertContext {
  isError: boolean;
  errorMessage: string;
  isInfo: boolean;
  infoMessage: string;
  isSuccess: boolean;
  successMessage: string;
  setIsError: Dispatch<SetStateAction<boolean>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setIsInfo: Dispatch<SetStateAction<boolean>>;
  setInfoMessage: Dispatch<SetStateAction<string>>;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
}

const initialContext: IAlertContext = {
  isError: false,
  errorMessage: '',
  isInfo: false,
  infoMessage: '',
  isSuccess: false,
  successMessage: '',
  setIsError: () => {},
  setErrorMessage: () => {},
  setIsInfo: () => {},
  setInfoMessage: () => {},
  setIsSuccess: () => {},
  setSuccessMessage: () => {},
};

export const AlertContext = createContext<IAlertContext>(initialContext);
