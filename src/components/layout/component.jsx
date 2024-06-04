import { Footer } from "../footer/component";
import { Header } from "../header/component";
import styles from './styles.module.scss'

export const Layout = ({ children }) => {
  return (
    <div>
      <div id="modal" style={{position: "relative", zIndex: 2}}></div>
      <div style={{zIndex: 1}}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};