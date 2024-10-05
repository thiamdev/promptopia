import "@styles/globals.css";
import Provider from "@components/Provider";
import BottomNav from "@components/BottomNav";


export const metadata = {
  title: "Imo 2p ",
  description: "vVender vos bien avec 2pimo ",
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

                <div className="w-full z-10 sm:hidden block fixed bottom-0 border-t border-gray-200 bg-white">
                  <BottomNav />
                </div>
              </main>

            </div>
          </Provider>
       
         

      </body>
    </html>
  );
};

export default RootLayout;
