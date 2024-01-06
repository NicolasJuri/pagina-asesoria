import React from "react";
import heroImg01 from "./../assets/images/hero-img01.png";
import heroImg02 from "./../assets/images/hero-img02.png";
import heroImg03 from "./../assets/images/hero-img03.png";
import icon01 from "./../assets/images/icon01.png";
import icon02 from "./../assets/images/icon02.png";
import icon03 from "./../assets/images/icon03.png";
import featureImg from "./../assets/images/feature-img.png";
import videoIcon from "./../assets/images/video-icon.png";
import avatarIcon from "./../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import DevList from "../components/Devs/DevList";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";


const Home = () => {
    return (
        <>

        {/* ------------HERO section-----------*/}

        <section className='hero__section pt-[60px] 2xl:h-[800px]'>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

                {/* ------------HERO content-----------*/}

                <div>
                    <div className="lg:w-[570px]">
                        <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[600] md:leading-[70px]">
                        <span className="bg-yellowColor rounded-full p-1 text-white">Despega</span> tu negocio. Haz click para llevar tu emprendimiento al siguiente <span className="bg-purpleColor rounded-full p-1 text-white">nivel</span>!
                        </h1>
                        <p className="text__para">
                        Potencia tu emprendimiento con nuestro equipo de expertos en asesoría empresarial. Encontrarás soluciones personalizadas para impulsar tu negocio hacia el éxito. Aprovecha nuestra experiencia y lleva tus ideas a nuevas alturas."
                        </p>
                        <button className="btn"><a href="/contact"
                        >
                            Solicita un asesor</a></button>
                    </div>

                    <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                10+
                            </h2>
                            <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                            <p className="text__para">Años de experiencia</p>
                        </div>

                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                1000+
                            </h2>
                            <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                            <p className="text__para">Clientes satisfechos</p>
                        </div>

                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                15+
                            </h2>
                            <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                            <p className="text__para">Expertos</p>
                        </div>

                    </div>

                </div>

                {/* ------------HERO content-----------*/}

            <div className="flex gap-[30px] justify-end ">
            <div>
                <img className="w-full" src={heroImg01} alt="" />
            </div>
            <div className="mt-[30px]">
                <img className="w-full mb-[30px] rounded-lg" src={heroImg02} alt="" />
                <img className="w-full rounded-lg" src={heroImg03} alt="" />
            </div>
            </div>
                </div>
            </div>
        </section>

        {/* ------------HERO section end-----------*/}

        {/* ------------HERO section-----------*/}

        <section>

        <div className="container">
           <div className="lg:w-[550px] mx-auto">
            <h2 className="heading text-center">
                Evita perdidas, diseñando tu plan de acción.
            </h2>
            
            <p className="text__para text-center">
            En un mundo empresarial dinámico, la prevención de pérdidas es esencial. Nos especializamos en diseñar planes de acción personalizados para evitar riesgos innecesarias en tu negocio.
            </p>
            </div> 
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
           
            <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                    <img src={icon02} alt="accede a tutoriales" />
                </div>

            <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Accede a tutoriales gratuitos
                </h2>
                <p className="text-[16px] text-center leading-7 text-textColor font-[400] mt-4">
                Recibiremos tus requerimientos de talento tech y alinearemos nuestra base de talentos con los perfiles solicitados. Nuestros algoritmos harán el trabajo por ti.
            </p>

            <Link to="http://www.youtube.com" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellowColor hover:border-none">
            <BsArrowRight className="group-hover:text-white w-6 h-5"/>
            </Link>
            </div>

            </div>

            <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                    <img src={icon01} alt="" />
                </div>

            <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Elige tu plan ideal
                </h2>
                <p className="text-[16px] text-center leading-7 text-textColor font-[400] mt-4">
                Recibiremos tus requerimientos de talento tech y alinearemos nuestra base de talentos con los perfiles solicitados. Nuestros algoritmos harán el trabajo por ti.
            </p>

            <Link to="/services" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellowColor hover:border-none">
            <BsArrowRight className="group-hover:text-white w-6 h-5"/>
            </Link>
            </div>

            </div>

            <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                    <img src={icon03} alt="" />
                </div>

            <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Ponte en contacto con nosotros
                </h2>
                <p className="text-[16px] text-center leading-7 text-textColor font-[400] mt-4">
                Recibiremos tus requerimientos de talento tech y alinearemos nuestra base de talentos con los perfiles solicitados. Nuestros algoritmos harán el trabajo por ti.
            </p>

            <Link to="/contact" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellowColor hover:border-none">
            <BsArrowRight className="group-hover:text-white w-6 h-5"/>
            </Link>
            </div>

            </div>

        </div>

        </section>

        {/* ------------HERO section end-----------*/}


        {/* ------------ABOUT section-----------*/}

        <About />

        {/* ------------ABOUT section end-----------*/}


        {/* ------------FEATURES section-----------*/}

        <section>
            <div className="container">
                <div className="flex items-center justify-between flex-col lg:flex-row">
                    <div className="xl:w-[670px]">
                        <h2 className="heading">
                            Obtenga una asesoría virtual
                        </h2>

                        <ul className="pl-4">
                            <li className="text__para">
                            1. Contrato directo con desarrolladores
                            </li>
                            <li className="text__para">
                            2. Encuentra recursos con valores y personalidad
                            </li>
                            <li className="text__para">
                            3. Si no estás conforme con el desempeño lo reemplazamos sin ningún costo.
                            </li>
                        </ul>
                        <Link to="/contact">
                            <button className="btn">Ver más...</button>
                        </Link>

                    </div>

        {/* ------------FEATURES image-----------*/}

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                <img src={featureImg} className="w-3/4 rounded-md" alt="asesor ventas" />

                <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                    <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3">
                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                        Lun, 22
                        </p>
                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                        19:49 PM
                        </p>         
                        </div>
                        <span className="text-[10px] leading-[10px] lg:text-[14px] flex justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                        <img src={videoIcon} className="w-3/4" alt="" />
                        </span>
                    </div>

                    <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                        Asesoría
                    </div>

                    <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                        <img src={avatarIcon} alt="" />
                        <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                            Nicolas Juri
                        </h4>
                    </div>
                </div>
            </div>



                </div>


            </div>
        </section>

        {/* ------------FAQ section-----------*/}

        <section>
            <div className="container">
            <div className="mx-auto">
            <h2 className="heading text-center">
                Lo que dicen de nosotros
            </h2>
            <p className="text__para text-center">
            Desarrollamos un proceso de contratación flexible y personalizado, enfocado en la calidad.
            </p>
            </div> 

                <Testimonial />
            </div>
        </section>

        </>
    )
}

export default Home;
