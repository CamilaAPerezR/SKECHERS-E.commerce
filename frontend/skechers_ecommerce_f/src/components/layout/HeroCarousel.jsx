import { useEffect, useState } from "react";
import "../../styles/Hero.css";

import heroMain from "../../assets/images/SKECHERShero.jpg";
import heroRunning from "../../assets/images/running.jpg";
import heroLifestyle from "../../assets/images/lifestyle.jpg";


function HeroCarousel() {

    // Lista de imágenes y textos que tendrá el carrusel
    const slides = [
        {
            image: heroMain,
            title: "Camina con tecnología y estilo",
            description:
                "Descubre la nueva colección Skechers diseñada para acompañarte todos los días."
        },

        {
            image: heroRunning,
            title: "Corre sin límites",
            description:
                "Calzado deportivo creado para mejorar tu rendimiento."
        },

        {
            image: heroLifestyle,
            title: "Tu estilo, tu comodidad",
            description:
                "Diseños modernos para cada momento."
        }
    ];


    // Estado que controla cuál imagen se muestra
    const [currentSlide, setCurrentSlide] = useState(0);



    // Cambio automático cada 5 segundos
    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentSlide(
                (previous) =>
                    (previous + 1) % slides.length
            );

        }, 5000);


        return () => clearInterval(interval);

    }, []);



    return (

        <section className="hero">

            <img
                src={slides[currentSlide].image}
                alt="Skechers collection"
                className="hero-image"
            />


            <div className="hero-overlay">

                <h1>
                    {slides[currentSlide].title}
                </h1>


                <p>
                    {slides[currentSlide].description}
                </p>


                <button>
                    Comprar ahora
                </button>

            </div>



            <div className="hero-indicators">

                {
                    slides.map((slide,index)=>(

                        <span
                            key={index}
                            className={
                                currentSlide === index
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                                setCurrentSlide(index)
                            }
                        >

                        </span>

                    ))
                }

            </div>


        </section>

    );
}


export default HeroCarousel; 