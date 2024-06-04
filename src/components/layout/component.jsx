import { Footer } from "../footer/component";
import { Header } from "../header/component";

export const Layout = ({ children }) => {
  return (
    <div>
      <div id="modal" style={{position: "relative", zIndex: 2}}></div>
      <div style={{zIndex: 1}}>
        <Header />
        <div style={{margin: '10px 0'}}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};