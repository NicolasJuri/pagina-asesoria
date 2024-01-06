import React from "react";
import ServiceList from "../components/Services/ServiceList";



const Services = () => {
    return (
                <section>
                <div className="container">
                    <div className="mx-auto">
                        <h2 className="heading text-center">
                            Nuestros servicios
                        </h2>
                        <p className="text__para text-center">
                        Descubra servicios a medida para su empresa. Seleccione la clave del éxito que impulse su emprendimiento. ¡Su camino hacia el crecimiento comienza aquí!.
                        </p>
                    </div>
                    <ServiceList />
    
    
                </div>
            </section>
    )
}

export default Services;
