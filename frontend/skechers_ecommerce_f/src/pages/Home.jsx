/*
===========================================================
Archivo: Home.jsx

Descripción:
Página principal del e-commerce.

Contiene las secciones principales:
- Hero principal
- Categorías destacadas
- Productos destacados

Proyecto:
SKECHERS E-Commerce
===========================================================
*/

import HeroCarousel from "../components/layout/HeroCarousel";
import CategorySection from "../features/categorias/CategorySection";
import FeaturedProducts from "../features/productos/FeaturedProducts";


function Home(){

    return(

        <>

            <HeroCarousel />

            <CategorySection />

            <FeaturedProducts />

        </>

    );

}


export default Home;