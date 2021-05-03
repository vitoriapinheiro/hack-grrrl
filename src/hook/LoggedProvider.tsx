import React, { createContext, useContext, useState } from 'react';

const LoginContext = React.createContext([] as any);

function LoginProvider({ children }: { children: React.ReactNode}) {
  const [userId, setUserId] = useState(false);

  return (
    <LoginContext.Provider value={[{setUserId, userId}]}>
      {children}
    </LoginContext.Provider>
  );
}

export const useInfo = () => useContext(LoginContext);

export default LoginProvider;