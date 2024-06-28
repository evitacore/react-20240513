import { Outlet } from "react-router-dom";
import { Footer } from "../footer/component";
import { Header } from "../header/component";
import styles from "./styles.module.scss";
import { ThemeContextProvider } from "../../contexts/theme/provider";
import { UserContextProvider } from "../../contexts/user/provider";
import { FC } from "react";

export const Layout: FC = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <div id="modal" style={{ position: "relative", zIndex: 2 }}></div>
        <div className={styles.root} style={{ zIndex: 1 }}>
          <Header />
          <div className={styles.content}>
            <Outlet />
          </div>
          <Footer />
        </div>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
