import { ReactNode, useState } from 'react';

import AuthContext from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [username, setUsername] = useState<string>('');

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
