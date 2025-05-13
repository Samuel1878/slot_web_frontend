import { useCallback, useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router";
import { navMenu } from "../../const/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { useAuth } from "src/context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageChangeBtn from "src/components/buttons/languageBtn";

export default function NavBarLayout() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {setShowAuthModal} = useAuth();
  const { t, i18n } = useTranslation();
  const menuRef = useRef();
  const navRef = useRef([]);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  // useEffect(()=>{
 
  //   if (isOpen){
  //     if(navRef.current?.length)return
  //     navRef.current?.map((e)=>{
  //       gsap.to(e, {
  //         duration: 1,
  //          translateX: 5,
  //         delay: 0.5,
  //         ease: "power1.out",
  //         opacity: 1,
  //       });
  //     });
    
  //   }
  // },[isOpen])
  useEffect(() => {
    if (!menuRef.current) return
    if (isOpen) {
      gsap.to(menuRef.current, {
        duration: .7,
        translateY: 20,
        ease:"power2.out",
        opacity: 1,
        display: "flex",
      });
     
    } else {
      gsap.to(menuRef.current, {
        duration: .4,
        translateY: -2,
        opacity: 0,
        ease:"power2.in",
        onComplete: () => {
          if (menuRef.current){
            menuRef.current.style.display = "none"
          }
        }
      });
    }
  }, [isOpen]);
  const resizeHandler = () => {
    if (window.innerWidth > 1024) {
      setIsOpen(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  })
  return (
    <header className="top-0 right-0 left-0 bg-neutral-800 lg:bg-neutral-900 z-10 min-h-16 flex w-full">
      <nav className="flex w-full justify-between items-center relative px-2 md:px-4 lg:px-12">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-amber-300 font-mono text-2xl tracking-widest hover:text-white transition-colors ml-4"
        >
          XVIP.
          <span className=" text-neutral-400 font-sans text-sm hover:text-netural-100 transition-colors">
            VAULT
          </span>
        </Link>

        <ul className="flex-row items-center space-x-3 hidden lg:flex italic">
          {navMenu?.map((e, i) => {
            return (
              <Link key={i} to={`/${e.value}`}>
                <li className="p-5 hover:border-b-white">
                  <a className="text-gray-100">{e.label}</a>
                </li>
              </Link>
            );
          })}
        </ul>

        <div className="flex flex-row gap-2 items-center">
          <button
            onClick={() => setShowAuthModal(true)}
            className="items-center justify-center h-8 px-4 bg-amber-300 rounded-sm z-10"
          >
            <p className="text-neutral-900  text-sm font-sans z-10">
              {t("_auth.login")}
            </p>
          </button>
          <button className="hidden lg:flex pl-2">
            <FontAwesomeIcon
              icon="fa-solid fa-globe"
              size="20px"
              color="#f9f9f9"
            />
          </button>

          <div className="flex-row flex gap-2 items-center lg:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              color="#fff"
              size={22}
            />
          </div>
        </div>

        <ul
          id="toggleNav"
          ref={menuRef}
          className="z-10 pb-5 pt-2 hidden h-dvh flex-col absolute left-0 right-0 top-10 bg-neutral-800 opacity-0"
        >
          {navMenu?.map((e, i) => {
            return (
              <Link key={e.value} onClick={toggleMenu} to={`/${e.value}`}>
                <li
                  // ref={(el) => (navRef.current[i] = el)}
                  className="py-5 z-30 px-7 w-full flex items-center bg-neutral-800 transition-colors hover:bg-neutral-900"
                >
                  <div className="flex gap-4 items-center">
                    {e?.icon}
                    <a className="text-gray-300 text-md">{e.label}</a>
                  </div>
                </li>
              </Link>
            );
          })}
          <LanguageChangeBtn t={t} i18n={i18n} />
        </ul>
      </nav>
    </header>
  );
}
