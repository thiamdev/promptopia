'use client'
import "@styles/globals.css";
import { CircleHelp, Dot, Globe, Headset, Home, LayoutDashboard, LogOut, Menu, Settings, UploadCloud, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";



const RootLayout = ({ children }) => {

  const pathName = usePathname();
  const isProfilePost = pathName.startsWith('/profile/post/');

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>

        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app relative">
          <header className="header">

          </header>
          <main>

            <div className="drawer z-10 w-[280px] md:hidden block">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content w-full flex items-center justify-end py-5 bg-white border-b border-gray-200 ">
                {/* Page content here */}

                <label htmlFor="my-drawer-4" className={`${isProfilePost && "hidden"} `}>
                  <div className="py-2 px-3  rounded-full bg-white">
                    <Menu className="w-6 h-6  text-black z-10" />

                  </div>
                </label>
              </div>
              <div className="drawer-side left-0">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-white text-base-content min-h-full w-80 p-4">
                  <div className="my-3 font-semibold text-[17px]">
                    Dima Groupe
                  </div>
                  <div className="flex-row gap-3 text-[15px] font-light md:gap-5 items-center">
                    <Link href="/" className="">
                      <div className={`flex gap-3 ${pathName === '/' ? ' bg-slate-900 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <Home className="w-5 h-5" />
                        Acceil
                      </div>

                    </Link>
                    <Link href="profile/create-prompt" className="">
                      <div className={`flex gap-3 ${pathName === '/profile/create-prompt' ? ' bg-slate-900 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <UploadCloud className="w-5 h-5" />
                        Creer une annoce
                      </div>

                    </Link>
                    <Link href="profile/dashboard">
                      <div className={`flex gap-3 ${pathName === '/profile/dashboard' ? ' bg-slate-900 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                      </div>

                    </Link>
                    <Link href="profile">
                      <div className={`flex gap-3 ${pathName === '/profile/post' ? ' bg-slate-900 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <User className="w-5 h-5" />
                        User Profile
                      </div>
                    </Link>
                    <Link href="profile/settings">
                      <div className={`flex gap-3 ${pathName === '/profile/settings' ? ' bg-slate-900 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <Settings className="w-5 h-5" />
                        Settings
                      </div>
                    </Link>
                    <h1 className="font-bold text-xl mx-2">Assistance</h1>
                    <Link href="profile/aide">
                      <div className={`flex gap-3 ${pathName === '/profile/aide' ? ' bg-slate-900 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <CircleHelp className="w-5 h-5" />
                        Consulter le centre d'aide
                      </div>
                    </Link>
                    <Link href="profile/signal">
                      <div className={`flex gap-3 ${pathName === '/profile/signal' ? ' bg-slate-900 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <Headset className="w-5 h-5" />
                        Signaler un problème
                      </div>
                    </Link>
                    <Link href="/">
                      <div className="flex gap-3 justify-center border border-gray-900 hover:text-white hover:bg-slate-900 hover:font-normal rounded-full  left-1  mb-2 px-3 py-2 items-center">
                        <LogOut className="w-5 h-5" />
                        Se déconnecter
                      </div>
                    </Link>

                    <div className="absolute bottom-2">
                      <div className="flex items-center justify-center gap-2 font-semibold">
                        <h1 className="flex items-center gap-2">
                          <Globe className="w-5 h-5" />
                          Francais (Fr)
                        </h1>
                        <h1> XOF </h1>
                      </div>
                      <div className="text-xs font-semibold flex gap-1 justify-center my-2 flex-wrap">
                        <p className="border-b border-gray-800 flex items-center"> Aide et assistance<Dot /></p>
                        <p className="border-b border-gray-800 flex items-center">Condition de service<Dot /></p>
                        <p className="border-b border-gray-800">Politique de confidentialité</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 flex justify-center">
                          © {new Date().getFullYear()} Immo, Inc. Tous droits réservés.
                        </p>
                      </div>
                    </div>

                  </div>

                </ul>
              </div>
            </div>
            <div className="flex w-full h-[100dvh]  bg-neutral-50 gap-5">
              <div  className={`${isProfilePost ? "hidden" : " z-20 md:block hidden "}`}>
                <ul className="menu bg-white text-base-content h-full  w-80 p-4">
                  <div className="my-3 font-semibold text-[17px]">
                    Dima Groupe
                  </div>
                  <div className="flex-row gap-3 text-[15px] font-light md:gap-5 items-center">
                    <Link href="/" className="">
                      <div className={`flex gap-3 ${pathName === '/' ? ' bg-orange-500 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <Home className="w-5 h-5" />
                        Acceil
                      </div>

                    </Link>
                    <Link href="profile/create-prompt" className="">
                      <div className={`flex gap-3 ${pathName === '/profile/create-prompt' ? ' bg-orange-500 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <UploadCloud className="w-5 h-5" />
                        Creer une annoce
                      </div>

                    </Link>
                    <Link href="profile/dashboard">
                      <div className={`flex gap-3 ${pathName === '/profile/dashboard' ? 'bg-orange-500 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                      </div>

                    </Link>
                    <Link href="profile/post">
                      <div className={`flex gap-3 ${pathName === '/profile/post' ? ' bg-orange-500 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <User className="w-5 h-5" />
                        User Profile
                      </div>
                    </Link>
                    <Link href="profile/settings">
                      <div className={`flex gap-3 ${pathName === '/profile/settings' ? ' bg-orange-500 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <Settings className="w-5 h-5" />
                        Settings
                      </div>
                    </Link>
                    <h1 className="font-bold text-xl mx-2">Assistance</h1>
                    <Link href="profile/aide">
                      <div className={`flex gap-3 ${pathName === '/profile/aide' ? ' bg-orange-500 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <CircleHelp className="w-5 h-5" />
                        Consulter le centre d'aide
                      </div>
                    </Link>
                    <Link href="profile/signal">
                      <div className={`flex gap-3 ${pathName === '/profile/signal' ? ' bg-orange-500 text-white ' : 'bg-transparent text-black '} mb-2 mt-1 rounded-md px-3 py-4 items-center`}>
                        <Headset className="w-5 h-5" />
                        Signaler un problème
                      </div>
                    </Link>
                    <Link href="/">
                      <div className="flex gap-3 justify-center border border-gray-900 hover:text-white hover:bg-orange-500 hover:border-orange-500 hover:font-normal rounded-full  left-1  mb-2 px-3 py-2 items-center">
                        <LogOut className="w-5 h-5" />
                        Se déconnecter
                      </div>
                    </Link>

                    <div className="absolute bottom-2 ">
                      <div className="flex items-center justify-center gap-2 font-semibold">
                        <h1 className="flex items-center gap-2">
                          <Globe className="w-5 h-5" />
                          Francais (Fr)
                        </h1>
                        <h1> XOF </h1>
                      </div>
                      <div className="text-xs font-semibold flex  gap-1 justify-center my-2 flex-wrap w-[280px] text-center">
                        <p className="border-b border-gray-800 flex items-center"> Aide et assistance<Dot /></p>
                        <p className="border-b border-gray-800 flex items-center">Condition de service<Dot /></p>
                        <p className="border-b border-gray-800">Politique de confidentialité</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 flex justify-center">
                          © {new Date().getFullYear()} Immo, Inc. Tous droits réservés.
                        </p>
                      </div>
                    </div>

                  </div>

                </ul>
              </div>
              <div className="w-full flex  justify-center overflow-y-auto">
                {children}
              </div>
            </div>


          </main>

        </div>

      </body>
    </html>
  );
};

export default RootLayout;
