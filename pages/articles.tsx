import type { NextPage } from "next";
import Image from "next/image";
import currency from "../assets/image-currency.jpg";
import restaurant from "../assets/image-restaurant.jpg";
import plane from "../assets/image-plane.jpg";
import confetti from "../assets/image-confetti.jpg";

const Articles: NextPage = () => {
    return (
        <section className="articles bg-off-white w-screen text-black py-[8.8rem] px-[2.4rem] lg:py-[8rem] lg:px-[16.5rem]">
            <div className="articles__heading w-[32.7rem] m-auto lg:w-screen lg:m-0 mb-[3.1rem] lg:mb-[4rem]">
                <h2 className="text-dark-blue font-light text-[3.2rem] leading-[3.5rem] lg:text-[4rem] lg:leading-[6.4rem] lg:tracking-[-0.07rem]">
                    Latest Articles
                </h2>
            </div>
            <div className="articles__content m-auto lg:w-full lg:m-0 lg:flex xl:justify-between">
                <div className="articles__card flex flex-col items-center mb-[4.8rem] lg:mr-[3rem]">
                    <div className="articles__card--image overflow-hidden">
                        <Image
                            src={currency}
                            alt="currency"
                            className="rounded-lg"
                            width={255}
                            height={200}
                        />
                    </div>
                    <div className="w-[26.5rem] lg:w-[20.7rem]">
                        <h5 className="articles__card--author block text-gray-blue font-normal text-[1rem] leading-[1.8rem] tracking-[-.0016rem] mt-[2.5rem]">
                            By Claire Robinson
                        </h5>
                        <a href="#">
                            <h4 className="articles__card--title hover:text-lime-green text-dark-blue font-light text-base leading-[2rem] tracking-[.0029rem] my-[.8rem]">
                                Receive money in any currency with no fees
                            </h4>
                        </a>
                        <p className="articles__card--text block text-gray-blue text-[1.3rem] tracking-tight leading-[1.8rem]">
                            The world is getting smaller and we’re becoming more
                            mobile. So why should you be forced to only receive
                            money in a single …
                        </p>
                    </div>
                </div>
                <div className="articles__card flex flex-col items-center mb-[4.8rem] lg:mr-[3rem]">
                    <div className="articles__card--image overflow-hidden">
                        <Image
                            src={restaurant}
                            alt="restaurant"
                            className="rounded-lg"
                            width={255}
                            height={200}
                        />
                    </div>
                    <div className="w-[26.5rem] lg:w-[20.7rem]">
                        <h5 className="articles__card--author block text-gray-blue font-normal text-[1rem] leading-[1.8rem] tracking-[-.0016rem] mt-[2.5rem]">
                            By Wilson Hutton
                        </h5>
                        <a href="#">
                            <h4 className="articles__card--title hover:text-lime-green text-dark-blue font-light text-base leading-[2rem] tracking-[.0029rem] my-[.8rem]">
                                Treat yourself without worrying about money
                            </h4>
                        </a>
                        <p className="articles__card--text block text-gray-blue text-[1.3rem] tracking-tight leading-[1.8rem]">
                            Our simple budgeting feature allows you to separate
                            out your spending and set realistic limits each
                            month. That means you …
                        </p>
                    </div>
                </div>
                <div className="articles__card flex flex-col items-center mb-[4.8rem] lg:mr-[3rem]">
                    <div className="articles__card--image overflow-hidden">
                        <Image
                            src={plane}
                            alt="plane"
                            className="rounded-lg"
                            width={255}
                            height={200}
                        />
                    </div>
                    <div className="w-[26.5rem] lg:w-[20.7rem]">
                        <h5 className="articles__card--author block text-gray-blue font-normal text-[1rem] leading-[1.8rem] tracking-[-.0016rem] mt-[2.5rem]">
                            By Wilson Hutton
                        </h5>
                        <a href="#">
                            <h4 className="articles__card--title hover:text-lime-green text-dark-blue font-light text-base leading-[2rem] tracking-[.0029rem] my-[.8rem]">
                                Take your Easybank card wherever you go
                            </h4>
                        </a>
                        <p className="articles__card--text block text-gray-blue text-[1.3rem] tracking-tight leading-[1.8rem]">
                            We want you to enjoy your travels. This is why we
                            don’t charge any fees on purchases while you’re
                            abroad. We’ll even show you …
                        </p>
                    </div>
                </div>
                <div className="articles__card flex flex-col items-center mb-[4.8rem]">
                    <div className="articles__card--image overflow-hidden">
                        <Image
                            src={confetti}
                            alt="confetti"
                            className="rounded-lg"
                            width={255}
                            height={200}
                        />
                    </div>
                    <div className="w-[26.5rem] lg:w-[20.7rem]">
                        <h5 className="articles__card--author block text-gray-blue font-normal text-[1rem] leading-[1.8rem] tracking-[-.0016rem] mt-[2.5rem]">
                            By Claire Robinson
                        </h5>
                        <a href="#">
                            <h4 className="articles__card--title hover:text-lime-green text-dark-blue font-light text-base leading-[2rem] tracking-[.0029rem] my-[.8rem]">
                                Our invite-only Beta accounts are now live!
                            </h4>
                        </a>
                        <p className="articles__card--text block text-gray-blue text-[1.3rem] tracking-tight leading-[1.8rem]">
                            After a lot of hard work by the whole team, we’re
                            excited to launch our closed beta. It’s easy to
                            request an invite through the site ...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Articles;
