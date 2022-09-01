import type { NextPage } from "next";
import Image from "next/image";
import introImageM from "../assets/bg-intro-mobile.svg";
import introImageD from "../assets/bg-intro-desktop.svg";
import mockups from "../assets/image-mockups.png";

const Intro: NextPage = () => {
    return (
        <section className="intro bg-off-white w-screen h-[735px]">
            <div className="intro__images flex justify-center h-fit relative">
                <div className="intro__bgM relative md:hidden w-screen h-[397px]">
                    <Image
                        src={introImageM}
                        alt="intro image"
                        layout="fill"
                        objectFit="fill"
                    />
                </div>
                <div className="intro__bgD hidden md:flex">
                    <Image src={introImageD} alt="intro image" />
                </div>
                <div className="intro__mockups absolute mt-[-57px] w-[327px] h-[402px]">
                    <Image
                        src={mockups}
                        alt="design mockups"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="intro__text mt-[41px] mb-[88px] text-center">
                <h1 className="text-dark-blue text-xl font-light text-center leading-loose">
                    Next generation digital banking
                </h1>
                <p className="mt-[1.6rem] mb-[3.2rem] text-gray-blue leading-normal text-base font-normal mx-10">
                    Take your financial life online. Your Easybank account will
                    be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                </p>
                <button className="bg-gradient-to-br from-lime-green to-bright-cyan px-[3.4rem] py-[.8rem] rounded-full">
                    Request Invite
                </button>
            </div>
        </section>
    );
};

export default Intro;
