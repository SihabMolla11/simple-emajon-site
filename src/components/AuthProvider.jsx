import React, { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const user = { name: "Sihab uddin Molla" };

  const AuthInfp = {
    user,
  };

  return (
    <div>
      <AuthContext.Provider value={AuthInfp}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
