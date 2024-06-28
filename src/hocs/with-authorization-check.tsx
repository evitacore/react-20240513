import { ComponentType, FC } from "react";
import { AuthorizationButton } from "../components/authorization-button/component";
import { useUser } from "../contexts/user/hooks";
import { UserType } from "../types/user";

export function withAuthorizationCheck<P extends JSX.IntrinsicAttributes>(
  Component: ComponentType<P>
) {
  const ComponentWithAuthorizationCheck: FC<P> = (props) => {
    const user = useUser() as UserType | null;

    if (!user) {
      return (
        <div>
          LoginPlease <AuthorizationButton />
        </div>
      );
    }

    return <Component {...(props as P)} />;
  };

  return ComponentWithAuthorizationCheck;
}
