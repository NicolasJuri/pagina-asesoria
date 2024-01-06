import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

const socialLinks = [
    {
        icon: <AiFillYoutube />,
        link: "https://www.youtube.com",
    },
    {
        icon: <AiFillGithub />,
        link: "https://github.com/NicolasJuri",
    },
    {
        icon: <AiOutlineInstagram />,
        link: "https://www.instagram.com/ondalightDiet",
    },
    {
        icon: <RiLinkedinFill />,
        link: "https://www.linkedin.com/in/nicolas-juri",
    }
];

const navlinks01 = [
    {
        name: "Inicio",
        path: "/home"
    },
    {
        name: "Sobre nosotros",
        path: "/about"
    },
    {
        name: "Servicios",
        path: "/services"
    },
    {
        name: "Contacto",
        path: "/contact"
    }
];

const Footer = () => {
    return (
        <div className="container">
            <div className="flex flex-col md:flex-row flex-wrap justify-between gap-[30px]">
                <div>
                    <div className="flex items-center gap-3 mt-4">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-yellowColor hover:border-none"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <ul className="flex flex-wrap">
                        {navlinks01.map((link, index) => (
                            <li key={index} className="mb-3 mr-10">
                                <Link to={link.path} className="hover:text-yellowColor">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <img src={logo} alt="logo" />
                    <p className="text-[16px] leading-7 font-[400] text-textColor">
                        &copy; {new Date().getFullYear()} desarrollado por Nicolas Juri
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
