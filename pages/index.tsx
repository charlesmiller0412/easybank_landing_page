import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "./navbar";
import Intro from "./intro";
import WhyChoose from "./whyChoose";
import Articles from "./articles";
import Footer from "./footer";

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

            <main className="w-full bg-off-white lg:relative lg:overflow-x-hidden">
                <Navbar />
                <Intro />
                <WhyChoose />
                <Articles />
                <Footer />
            </main>
        </div>
    );
};

export default Home;
