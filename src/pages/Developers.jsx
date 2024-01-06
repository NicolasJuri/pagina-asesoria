import React, { useState } from "react";
import FaqsList from "../components/Faqs/FaqsList";
import faqImg from "./../assets/images/faq-img.png";
import DevList from "../components/Devs/DevList";
import { devs } from "../assets/data/devs";

const Developers = () => {
    const [visibleDevs, setVisibleDevs] = useState(6);
  
    const loadMoreDevs = () => {
      setVisibleDevs((prevVisibleDevs) => prevVisibleDevs + 3);
    };
  
    const devsToShow = devs.slice(0, visibleDevs);
  

    return (
        <>
            <section>
                <h2 className="heading text-center mb-9">Nuestra historia</h2>
                <p className="text__para">
                    Con más de una década de experiencia, nuestra firma de asesoría empresarial se ha destacado como líder en la consultoría. Desde humildes comienzos hasta la actualidad, hemos acumulado conocimientos valiosos que nos capacitan para guiar a nuestros clientes hacia el éxito.
                </p>

                <p className="text__para mt-[30px]">Hemos tenido el privilegio de atender a más de 1000 clientes satisfechos, cada uno con una historia única de crecimiento y superación. Nos enorgullece ser parte esencial de sus logros empresariales, considerando su satisfacción como nuestro mayor triunfo.</p>

                <p className="text__para mt-[30px] mb-9">Nuestro equipo, compuesto por más de 15 expertos altamente capacitados y apasionados, aporta experiencias diversas para ofrecer soluciones innovadoras y personalizadas. Mantenemos un compromiso constante con la excelencia, la confianza y la construcción de relaciones sólidas. Buscamos no solo ser asesores, sino también socios en el crecimiento de cada negocio que confía en nosotros. Nuestra historia de éxito se entrelaza con la de aquellos a quienes hemos tenido el honor de servir, y ansiamos escribir nuevos capítulos de éxito empresarial juntos.
                </p>
            </section>

            <section>
                <div className="container">
                <DevList devsToShow={devsToShow} />
                {visibleDevs < devs.length && (
            <div className="text-center my-7">
              <button
                className="bg-yellowColor transition-all duration-150 btn"
                onClick={loadMoreDevs}
              >
                Ver más asesores
              </button>
                        </div>
                    )}
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-0">
                        <div className="w-1/2 hidden md:block">
                            <img className="rounded-lg" src={faqImg} alt="" />
                        </div>

                        <div className="w-fill md:w-1/2">
                            <h2 className="heading">Preguntas frecuentes</h2>
                            <FaqsList />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Developers;
