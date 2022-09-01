import type { NextPage } from "next";
import { useState } from "react";

import Image from "next/image";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import closeBtn from "../assets/icon-close.svg";

const Navbar: NextPage = () => {
    const [hideNavMenu, setHideNavMenu] = useState(true);

    const handleNavClick = () => {
        setHideNavMenu(!hideNavMenu);
    };
    return (
        <section className="navbar">
            <nav className="mobileNav bg-off-white px-[2.2rem] py-[1.8rem] flex justify-between fixed top-0 w-screen z-10">
                <Image src={logo} alt="logo" />
                {/* mobile nav button */}
                <div
                    className="md:hidden select-none relative"
                    onClick={handleNavClick}
                >
                    {hideNavMenu ? (
                        <Image
                            src={hamburger}
                            alt="hamburger"
                            height={11}
                            width={24}
                        />
                    ) : (
                        <Image
                            src={closeBtn}
                            alt="close menu icon"
                            height={19}
                            width={18}
                        />
                    )}
                </div>
            </nav>
            {/* mobile nav menu */}
            <div
                className={
                    hideNavMenu
                        ? "mobileNavMenu flex justify-center h-screen w-screen fixed top-0"
                        : "mobileNavMenu flex justify-center h-screen w-screen fixed top-0 showMobileNav"
                }
            >
                <ul className="bg-off-white w-11/12 h-fit mt-[8.8rem] rounded text-dark-blue text-center">
                    <li className="pt-[3.2rem] pb-[2.4rem] text-base">
                        <a href="#">Home</a>
                    </li>
                    <li className="pb-[2.4rem] text-base">
                        <a
                            href="#"
                            className="hover:border-b-2 border-lime-green"
                        >
                            About
                        </a>
                    </li>
                    <li className="pb-[2.4rem] text-base">
                        <a href="#">Contact</a>
                    </li>
                    <li className="pb-[2.4rem] text-base">
                        <a href="#">Blog</a>
                    </li>
                    <li className="pb-[3.2rem] text-base">
                        <a href="#">Careers</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Navbar;
