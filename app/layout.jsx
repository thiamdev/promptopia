import "@styles/globals.css";


import Provider from "@components/Provider";
import Footer from "@components/Footer";
import { Suspense } from "react";
import BottomNav from "@components/BottomNav";


export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app relative">
            <header className="header">
            
            </header>
            <main>
              {children}

              <div className="w-full sm:hidden block fixed bottom-0 bg-white">
                <BottomNav/>
              </div>
            </main>
           
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
