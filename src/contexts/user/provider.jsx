import { useMemo, useState } from "react";
import { UserContext, UserSetterContext } from "./context";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const setterContextValue = useMemo(
    () => ({
      login: setUser,
      logout: () => setUser(null),
    }),
    []
  );

  return (
    <UserContext.Provider value={user}>
      <UserSetterContext.Provider value={setterContextValue}>
        {children}
      </UserSetterContext.Provider>
    </UserContext.Provider>
  );
};
