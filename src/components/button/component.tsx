import styles from "./styles.module.scss";
import { useTheme } from "../../contexts/theme/hooks";
import classNames from "classnames";
import { FC, PropsWithChildren, ReactNode } from "react";

type ButtonProps = PropsWithChildren<React.ComponentPropsWithoutRef<"button">>;

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  const theme = useTheme();

  return (
    <button
      className={classNames(styles.root, styles[theme], className)}
      {...props}
    >
      <span className={styles.children}>{children}</span>
    </button>
  );
};
