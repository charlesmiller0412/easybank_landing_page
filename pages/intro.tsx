import type { NextPage } from "next";
import Image from "next/image";
import introImageM from "../assets/bg-intro-mobile.svg";
import introImageD from "../assets/bg-intro-desktop.svg";
import mockups from "../assets/image-mockups.png";

const Intro: NextPage = () => {
    return (
        <section
            id="home"
            className="intro bg-off-white w-screen h-screen lg:h-[65.6rem] lg:flex lg:items-center lg:px-[16.5rem]"
        >
            <div className="intro__images flex justify-center h-fit w-full">
                <div className="intro__bgM relative lg:hidden w-screen h-[30rem]">
                    <Image
                        src={introImageM}
                        alt="intro image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="intro__bgD hidden lg:flex lg:relative lg:h-[96rem] lg:w-[120rem] lg:top-[-8rem] lg:left-[45%]">
                    <Image
                        src={introImageD}
                        alt="intro image"
                        objectFit="cover"
                    />
                </div>
                <div className="intro__mockups absolute top-[-4.5rem] w-[35rem] lg:w-[70rem] lg:h-[88rem] lg:top-9 lg:right-[-11.5rem]">
                    <Image
                        src={mockups}
                        alt="design mockups"
                        layout="responsive"
                        objectFit="fill"
                    />
                </div>
            </div>
            <div className="intro__text h-3/6 text-center m-auto w-[32.7rem] xl:w-[42rem] lg:text-left lg:absolute lg:left-[16.5rem] lg:h-screen flex flex-col items-center justify-center lg:items-start">
                <h1 className="text-dark-blue text-xl font-light leading-loose lg:leading-desktop-loose xl:text-desktop-xl">
                    Next generation digital banking
                </h1>
                <p className="mt-[1.6rem] mb-[3.2rem] w-full text-gray-blue leading-normal text-base font-normal mx-10 lg:mx-0 lg:font-desktop-base md:mt-[2.4rem] md:mb-[3.6rem] md:leading-[2.8rem] tracking-tight">
                    Take your financial life online. Your Easybank account will
                    be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                </p>
                <a href="#">
                    <button className="bg-gradient-to-br from-lime-green to-bright-cyan px-[3.4rem] py-[.8rem] rounded-full hover:brightness-[1.2] transition-all">
                        Request Invite
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Intro;
