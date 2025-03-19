import { createContext } from 'react';

interface AuthContextType {
  username: string;
  setUsername: (username: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
