import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router";
import { navMenu } from "../../data";
const NavMenu = ({toggle}) => {
    return (
      <ul className="flex-col flex fixed left-0 right-0 top-10 bg-neutral-900">
        {
            navMenu?.map((e,i)=>{
                return (
                  <Link key={e.value} onClick={toggle} to={`/${e.value}`}>
                    <li className="py-5 w-full flex items-center justify-center hover:border-gray-500">
                      <a className="text-gray-300 text-lg">{e.label}</a>
                    </li>
                  </Link>
                );
            })
        }
      </ul>
    );
}
export default function NavBarLayout () {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen((prev)=>!prev);
    useEffect(()=>{
       console.log(window.innerWidth)
    },[])
    return (
      <header className="fixed top-0 right-0 left-0 bg-neutral-900 z-10 min-h-10">
        <nav className="container max-w-8xl px-4 relative">
          <div className="flex justify-between items-center relative">
            <a
              href="/"
              className="text-sky-300 text-xl italic hover:text-white transition-colors"
            >
              111.111
              <span className="mx-3 text-neutral-400 font-bold text-sl hover:text-netural-100 transition-colors">
                Casino
              </span>
            </a>
            <div className="flex-row flex gap-2 items-center">
                <button className="items-center justify-center h-6 px-4 bg-amber-300 rounded-sm">
                    <p className="text-neutral-900 text-sm">Login</p>
                </button>
              <button className="md:hidden lg:hidden flex">
                <Hamburger
                  toggled={isOpen}
                  toggle={setIsOpen}
                  color="#fff"
                  size={20}
                />
              </button>
            </div>

            <ul className="flex-row items-center space-x-4 hidden md:flex lg:flex">
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

            {isOpen && <NavMenu toggle={toggleMenu} />}
          </div>
        </nav>
      </header>
    );
};