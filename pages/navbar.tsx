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
            <nav className="mobileNav bg-off-white px-[2.2rem] h-[8rem] flex justify-between items-center fixed top-0 w-screen z-10 lg:px-[10%] lg:justify-between">
                <div className="mobileNav__logo relative flex items-center">
                    <Image src={logo} alt="logo" height={20} width={139} />
                </div>
                {/* links */}
                <ul className="hidden mobileNav__links text-black lg:flex items-center">
                    <a href="#">
                        <li className="mr-[30px]">Home</li>
                    </a>
                    <a href="#">
                        <li className="mr-[30px]">About</li>
                    </a>
                    <a href="#">
                        <li className="mr-[30px]">Contact</li>
                    </a>
                    <a href="#">
                        <li className="mr-[30px]">Blog</li>
                    </a>
                    <a href="#">
                        <li>Careers</li>
                    </a>
                </ul>
                <button className="hidden lg:flex bg-gradient-to-br from-lime-green to-bright-cyan px-[3.4rem] py-[.8rem] h-[5rem] rounded-full leading-normal whitespace-nowrap items-center">
                    Request Invite
                </button>
                {/* mobile nav button */}
                <div
                    className="lg:hidden select-none relative"
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
