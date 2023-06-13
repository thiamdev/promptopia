import "@styles/globals.css";


import Provider from "@components/Provider";
import Footer from "@components/Footer";
import { Suspense } from "react";


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
            </main>
           
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
