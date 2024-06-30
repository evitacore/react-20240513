import { FC, PropsWithChildren, ReactNode, useMemo, useState } from "react";
import { UserContext, UserContextProps, UserSetterContext } from "./context";

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserContextProps>({ user: null });

  const setterContextValue = useMemo(
    () => ({
      login: (user: string) => setUser({ user }),
      logout: () => setUser({ user: null }),
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
