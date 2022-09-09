import type { NextPage } from "next";
import Image from "next/image";
import onboarding from "../assets/icon-onboarding.svg";
import budgeting from "../assets/icon-budgeting.svg";
import apiIcon from "../assets/icon-api.svg";
import banking from "../assets/icon-online.svg";

const WhyChoose: NextPage = () => {
    return (
        <section
            id="whyChoose"
            className="whyChoose bg-light-gray-blue w-full py-[6.4rem] px-[2.4rem] lg:px-[8.5rem] xl:px-[16.5rem] lg:py-[9.6rem] text-center lg:text-left"
        >
            <div className="whychoose__heading w-[32.7rem] m-auto lg:w-full lg:m-0">
                <h2 className="text-dark-blue font-light text-[3.2rem] leading-[3.5rem] lg:text-[4rem] lg:leading-[6.4rem] lg:tracking-[-0.07rem]">
                    Why choose Easybank?
                </h2>
                <p className="text-gray-blue font-normal mt-[1.4rem] mb-[5.6rem] leading-[2.5rem] text-[1.5rem] tracking-tight lg:text-[1.8rem] lg:leading-[2.8rem] lg:w-[63.5rem]">
                    We leverage Open Banking to turn your bank account into your
                    financial hub. Control your finances like never before.
                </p>
            </div>
            <div className="whychoose__content m-auto lg:m-0 lg:flex w-[32.7rem] lg:w-full lg:justify-between">
                <div>
                    <Image src={banking} alt="online banking" />
                    <span className="whychoose__content--heading block text-dark-blue text-[2rem] font-light mt-[2.4rem] mb-[1.6rem] lg:text-[2.4rem] xl:text-[2.8rem] lg:leading-[2.8rem] lg:tracking-tighter">
                        Online Banking
                    </span>
                    <span className="whychoose__content--text block text-gray-blue font-normal text-[1.5rem] tracking-tight leading-[2.5rem] mb-[3.2rem] xl:text-base lg:leading-[2.6rem] lg:tracking-tight lg:w-[19rem] xl:w-[23rem] lg:mr-[5.5rem]">
                        Our modern web and mobile applications allow you to keep
                        track of your finances wherever you are in the world.
                    </span>
                </div>
                <div>
                    <Image src={budgeting} alt="simple budgeting" />
                    <span className="whychoose__content--heading block text-dark-blue text-[2rem] font-light mt-[2.4rem] mb-[1.6rem] lg:text-[2.4rem] xl:text-[2.8rem] lg:leading-[2.8rem] lg:tracking-tighter">
                        Simple Budgeting
                    </span>
                    <span className="whychoose__content--text block text-gray-blue font-normal text-[1.5rem] tracking-tight leading-[2.5rem] mb-[3.2rem] xl:text-base lg:leading-[2.6rem] lg:tracking-tight lg:w-[19rem] xl:w-[23rem] lg:mr-[5.5rem]">
                        See exactly where your money goes each month. Receive
                        notifications when you’re close to hitting your limits.
                    </span>
                </div>
                <div>
                    <Image src={onboarding} alt="fast onboarding" />
                    <span className="whychoose__content--heading block text-dark-blue text-[2rem] font-light mt-[2.4rem] mb-[1.6rem] lg:text-[2.4rem] xl:text-[2.8rem] lg:leading-[2.8rem] lg:tracking-tighter">
                        Fast Onboarding
                    </span>
                    <span className="whychoose__content--text block text-gray-blue font-normal text-[1.5rem] tracking-tight leading-[2.5rem] mb-[3.2rem] xl:text-base lg:leading-[2.6rem] lg:tracking-tight lg:w-[19rem] xl:w-[23rem] lg:mr-[5.5rem]">
                        We don’t do branches. Open your account in minutes
                        online and start taking control of your finances right
                        away.
                    </span>
                </div>
                <div>
                    <Image src={apiIcon} alt="open api" />
                    <span className="whychoose__content--heading block text-dark-blue text-[2rem] font-light mt-[2.4rem] mb-[1.6rem] lg:text-[2.4rem] xl:text-[2.8rem] lg:leading-[2.8rem] lg:tracking-tighter">
                        Open API
                    </span>
                    <span className="whychoose__content--text block text-gray-blue font-normal text-[1.5rem] tracking-tight leading-[2.5rem] mb-[3.2rem] xl:text-base lg:leading-[2.6rem] lg:tracking-tight lg:w-[19rem] xl:w-[23rem] lg:mr-[5.5rem]">
                        Manage your savings, investments, pension, and much more
                        from one account. Tracking your money has never been
                        easier.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
