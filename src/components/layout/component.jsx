import { Footer } from "../footer/component";
import { Header } from "../header/component";
import { ScrollProgressBar } from "../scroll-progress-bar/component";
import { ThemeProvider } from '../contexts/ThemeProvider';
import { UserContext } from "../contexts/UserContext";
import { useState } from "react";

export const Layout = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return <div>
     <ThemeProvider>
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <ScrollProgressBar />
        <div id="modal" style={{position: "relative", zIndex: 2}}></div>
        <div style={{zIndex: 1}}>
          <Header />
          <div style={{margin: '10px 0'}}>{children}</div>
          <Footer />
        </div>
      </UserContext.Provider>
    </ThemeProvider>
  </div>;
};