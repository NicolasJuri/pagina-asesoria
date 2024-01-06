import React from "react";
import aboutImg from "./../../assets/images/about.png"
import aboutCardImg from "./../../assets/images/about-card.png"
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">  
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img src={aboutImg} alt="" />
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                            <img src={aboutCardImg} className="rounded-lg shadow-md" alt="" />
                        </div>
                    </div>
            {/* ------------ABOUT section-----------*/}

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className="heading">
                Construyamos tu futuro, juntos.
                </h2>
                <p className="text__para">Tu éxito empresarial es nuestro compromiso. Comencemos el camino hacia un futuro próspero para tu negocio. Haz click ahora para iniciar esta colaboración que transformará tu visión en realidad. </p>

                <p className="text__para mt-[30px]">Estamos listos para trabajar codo a codo, superando desafíos y construyendo un futuro brillante para tu empresa.</p>

                <Link to="/services">
                    <button className="btn">Conocer mas...</button>
                </Link>
            </div>   


                </div>
            </div>
        </section>
    )
}

export default About;