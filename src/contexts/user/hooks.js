import { useContext } from "react";
import { UserContext, UserSetterContext } from "./context";

export const useUser = () => useContext(UserContext);
export const useUserSetters = () => useContext(UserSetterContext);
