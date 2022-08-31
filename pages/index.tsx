import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";

const Home: NextPage = () => {
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
                <nav className="navbar bg-off-white xs:px-[2.2rem] xs:py-[2.4rem] flex justify-between fixed top-0 w-screen">
                    <Image src={logo} alt="logo" />
                    <Image
                        src={hamburger}
                        alt="hamburger"
                        className="xs:hidden"
                    />
                </nav>
                <section className="hero bg-off-white w-screen h-full">
                    a
                </section>
                <section className="whyChoose bg-gray-blue w-screen h-screen">
                    b
                </section>
                <section className="articles bg-off-white w-screen h-screen">
                    c
                </section>
                <footer className="bg-dark-blue xs:h-[510px]">footer</footer>
            </main>
        </div>
    );
};

export default Home;
