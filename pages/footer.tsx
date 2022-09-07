import type { NextPage } from "next";
import Image from "next/image";
import logo from "../assets/logoFooter.svg";
import facebook from "../assets/icon-facebook.svg";
import youtube from "../assets/icon-youtube.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";
import {
    Facebook,
    Youtube,
    Twitter,
    Pinterest,
    Instagram,
} from "../assets/icons";

const Footer: NextPage = () => {
    return (
        <footer className="footer bg-dark-blue h-auto lg:h-[19.1rem] py-[4rem] px-[7.7rem] flex flex-col items-center text-center lg:flex-row lg:justify-between">
            <div className="lg:flex lg:items-center">
                <div className="footer__social lg:flex lg:flex-col lg:h-[9.5rem] lg:justify-between lg:text-left">
                    <a href="#">
                        <Image src={logo} alt="logo" />
                    </a>
                    <div className="footer__social--icons my-[3.2rem] w-[18.5rem] flex justify-between lg:m-0">
                        <a
                            href="#"
                            className="w-[2.4rem] h-[2.4rem] lg:w-[2rem] lg:h-[2rem]"
                        >
                            <Facebook
                                fill=""
                                className="fill-off-white hover:fill-lime-green transition-all"
                            />
                        </a>
                        <a
                            href="#"
                            className="hover:fill-lime-green w-[2.4rem] h-[2.4rem] lg:w-[2rem] lg:h-[2rem]"
                        >
                            <Youtube
                                fill=""
                                className="fill-off-white hover:fill-lime-green transition-all"
                            />
                        </a>
                        <a
                            href="#"
                            className="hover:fill-lime-green w-[2.4rem] h-[2.4rem] lg:w-[2rem] lg:h-[2rem]"
                        >
                            <Twitter
                                fill=""
                                className="fill-off-white hover:fill-lime-green transition-all"
                            />
                        </a>
                        <a
                            href="#"
                            className="hover:fill-lime-green w-[2.4rem] h-[2.4rem] lg:w-[2rem] lg:h-[2rem]"
                        >
                            <Pinterest
                                fill=""
                                className="fill-off-white hover:fill-lime-green transition-all"
                            />
                        </a>
                        <a
                            href="#"
                            className="hover:fill-lime-green w-[2.4rem] h-[2.4rem] lg:w-[2rem] lg:h-[2rem]"
                        >
                            <Instagram
                                fill=""
                                className="fill-off-white hover:fill-lime-green transition-all"
                            />
                        </a>
                    </div>
                </div>
                <div className="footer__links lg:flex lg:ml-[13.1rem]">
                    <ul className="lg:w-[16rem] lg:mr-[3rem] lg:text-left">
                        <a href="#" className="hover:text-lime-green">
                            <li className="my-[.8rem] text-[1.5rem] font-normal leading-[2.6rem] tracking-tight">
                                About Us
                            </li>
                        </a>
                        <a href="#" className="hover:text-lime-green">
                            <li className="my-[.8rem] text-[1.5rem] font-normal leading-[2.6rem] tracking-tight">
                                Contact
                            </li>
                        </a>
                        <a href="#" className="hover:text-lime-green">
                            <li className="my-[.8rem] text-[1.5rem] font-normal leading-[2.6rem] tracking-tight">
                                Blog
                            </li>
                        </a>
                    </ul>
                    <ul className="lg:w-[16rem] lg:mr-[3rem] lg:text-left">
                        <a href="#" className="hover:text-lime-green">
                            <li className="my-[.8rem] text-[1.5rem] font-normal leading-[2.6rem] tracking-tight">
                                Careers
                            </li>
                        </a>
                        <a href="#" className="hover:text-lime-green">
                            <li className="my-[.8rem] text-[1.5rem] font-normal leading-[2.6rem] tracking-tight">
                                Support
                            </li>
                        </a>
                        <a href="#" className="hover:text-lime-green">
                            <li className="my-[.8rem] text-[1.5rem] font-normal leading-[2.6rem] tracking-tight">
                                Privacy Policy
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="footer__button mt-[3.2rem] lg:m-0 lg:h-[9.5rem] lg:flex lg:flex-col lg:justify-between lg:items-end ">
                <button className="flex justify-center bg-gradient-to-br from-lime-green to-bright-cyan px-[3.4rem] py-[.8rem] h-[4.4rem] rounded-full leading-normal whitespace-nowrap items-center m-auto mb-[2.4rem] hover:brightness-[1.2] transition-all lg:m-0 lg:w-[16.3rem]">
                    Request Invite
                </button>
                <span className="text-gray-blue text-[1.5rem] leading-[2.6rem] tracking-tight">
                    &copy; Easybank. All Rights Reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;
