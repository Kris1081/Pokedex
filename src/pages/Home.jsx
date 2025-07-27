import Carousel from "../components/carousel/Carousel";
import slideData from '../store/carouselSlides';
import Container from "../components/panels/Container";
import HalfPagePanel from "../components/panels/HalfPagePanel";

const Home = ()=>{
    return (
        <>
            <Carousel slides={slideData} />
            <Container>
                <HalfPagePanel
                    leftNodes={(
                        <>
                            <picture>
                                <source srcSet="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png" media="(min-width:720px)" />
                <img className="w-full h-full object-fit" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png" />
                            </picture>
                        </>
                    )}
                    rightNodes={(
                        <>
                        <p className="flex justify-center items-center m-4 h-full">
                            Stakataka: Un Pokémon de tipo Roca/Acero que parece una fortaleza ambulante formada por bloques apilados. Es muy resistente y se dice que su cuerpo está hecho de miles de piezas que se unen para formar una estructura impenetrable.
                        </p>
                        </>
                    )}
                />
                   <HalfPagePanel
                    invert={true}
                    leftNodes={(
                        <>
                            <picture>
                                <source srcSet="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png" media="(min-width:720px)" />
                <img className="w-full h-full object-fit" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png" />
                            </picture>
                        </>
                    )}
                    rightNodes={(
                        <>
                        <p className="flex justify-center items-center m-4 h-full">
                            Victini: Un Pokémon legendario de tipo Psíquico/Fuego conocido como el símbolo de la victoria. Se dice que trae buena suerte y que tiene la energía para conceder victoria a su entrenador.
                        </p>
                        

                        </>
                    )}
                />
                <p>
                    Pokémon nació en Japón en 1996, creado por Satoshi Tajiri, quien se inspiró en su infancia coleccionando insectos. El concepto original giraba en torno a la exploración, la amistad y el intercambio entre jugadores. Desde entonces, se ha convertido en una de las franquicias más exitosas del mundo, abarcando videojuegos, series animadas, películas y productos coleccionables.
                </p>
            </Container>
        </>
    )
}

export default Home;