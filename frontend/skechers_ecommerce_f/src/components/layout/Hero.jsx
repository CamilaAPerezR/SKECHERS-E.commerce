/*
===========================================================
Componente: Hero

Descripción:
Sección principal de bienvenida del e-commerce.

Representa la identidad visual de la marca y
presenta la colección principal.
===========================================================
*/

import heroImage from "../../assets/images/SKECHERShero.jpg";


function Hero() {


    return (

        <section className="hero">


            <div className="hero-image">

                <img 
                    src={heroImage}
                    alt="Nueva colección Skechers"
                />

            </div>



            <div className="hero-content">


                <span>
                    Nueva colección 2026
                </span>


                <h1>
                    MOVE
                    <br/>
                    WITH
                    <br/>
                    CONFIDENCE
                </h1>


                <p>
                    Zapatillas diseñadas para acompañarte
                    en cada momento con comodidad,
                    tecnología y estilo.
                </p>


                <button>
                    Explorar colección
                </button>


            </div>



        </section>

    );

}


export default Hero;