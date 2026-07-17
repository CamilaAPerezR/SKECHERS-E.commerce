/*
===========================================================
Componente: CategorySection

Descripción:
Sección principal donde se muestran las categorías
destacadas de la tienda.

Proyecto:
SKECHERS E-Commerce
===========================================================
*/


import CategoryCard from "../../components/ui/CategoryCard";

import running from "../../assets/images/running.jpg";
import lifestyle from "../../assets/images/lifestyle.jpg";
import training from "../../assets/images/training.jpg";
import "./CategorySection.css";

function CategorySection(){

    const categories=[

        {
            title:"Running",
            image:running
        },

        {
            title:"Lifestyle",
            image:lifestyle
        },

        {
            title:"Training",
            image:training
        }

    ];

    return(

    <section className="category-section">

        <div className="category-header">

            <h2>
                Explora nuestras categorías
            </h2>

            <p>
                Descubre colecciones diseñadas para acompañarte
                en cada momento, desde tus entrenamientos hasta
                tu estilo diario.
            </p>

        </div>

        <div className="category-grid">

            {

                categories.map(category=>(

                    <CategoryCard

                        key={category.title}

                        image={category.image}

                        title={category.title}

                    />

                ))

            }

        </div>

    </section>

);

}

export default CategorySection;