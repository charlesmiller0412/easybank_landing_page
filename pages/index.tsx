import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import closeBtn from "../assets/icon-close.svg";

const Home: NextPage = () => {
    const [showNavMenu, setShowNavMenu] = useState(false);

    const handleNavClick = () => {
        setShowNavMenu(!showNavMenu);
    };
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="author" content="Charles Miller" />
                <meta
                    name="description"
                    content="Digital Portfolio for Charles Miller - Web Developer, UX/UI Designer, Graphic Designer"
                />
                <meta property="og:image" content="/assets/favicon/logo.png" />
                <meta
                    property="og:description"
                    content="Digital Portfolio for Charles Miller - Web Developer, UX/UI Designer, Graphic Designer"
                />
                <meta
                    property="og:title"
                    content="Charles Miller | Web Developer, UX/UI Designer, &amp; Graphic Designer"
                />
                {/* favicon */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="%PUBLIC_URL%/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="%PUBLIC_URL%/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="%PUBLIC_URL%/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

                <title>charlesmiller.dev | Easybank Landing Page</title>
            </Head>

            <main className="w-screen h-screen bg-off-white">
                <nav className="mobileNav bg-off-white px-[2.2rem] py-[2.4rem] flex justify-between fixed top-0 w-screen z-10">
                    <Image src={logo} alt="logo" />
                    <div
                        className="flex align-middle md:hidden"
                        onClick={handleNavClick}
                    >
                        {showNavMenu ? (
                            <Image
                                src={hamburger}
                                alt="hamburger"
                                className="object-fill"
                            />
                        ) : (
                            <Image
                                src={closeBtn}
                                alt="close menu icon"
                                className="object-fill"
                            />
                        )}
                    </div>
                </nav>
                <div
                    className={
                        showNavMenu
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
                <section className="intro bg-off-white w-screen h-full">
                    a
                </section>
                <section className="whyChoose bg-gray-blue w-screen h-screen">
                    b
                </section>
                <section className="articles bg-off-white w-screen h-screen">
                    c
                </section>
                <footer className="bg-dark-blue h-[510px]">footer</footer>
            </main>
        </div>
    );
};

export default Home;
