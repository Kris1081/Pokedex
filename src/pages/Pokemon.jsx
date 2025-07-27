import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Pokemon = () => {
  const { pokemonId } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemonData(data);
        setIsLoading(false);
        setHasError(undefined);
      })
      .catch(() => {
        setHasError('Ocurrió un error al cargar el Pokémon');
        setIsLoading(false);
        setPokemonData(null);
      });
  }, [pokemonId]);

  if (isLoading) return <div className="text-center p-4">Cargando...</div>;
  if (hasError) return <div className="text-center p-4 text-red-600">{hasError}</div>;
  if (!pokemonData) return null;

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold capitalize text-center mb-4">
        #{pokemonData.id} {pokemonData.name}
      </h1>

      {/* Front and Back Sprites */}
      <div className="flex justify-center gap-8 mb-4">
        <div className="flex flex-col items-center">
          <img
            src={pokemonData.sprites.front_default}
            alt={`${pokemonData.name} frente`}
            className="w-32 h-32 object-contain"
          />
          <span className="text-sm mt-1 text-gray-600">Frente</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={pokemonData.sprites.back_default}
            alt={`${pokemonData.name} atrás`}
            className="w-32 h-32 object-contain"
          />
          <span className="text-sm mt-1 text-gray-600">Atrás</span>
        </div>
      </div>

      <div className="text-sm text-gray-700 space-y-2">
        <p><strong>Altura:</strong> {pokemonData.height / 10} m</p>
        <p><strong>Peso:</strong> {pokemonData.weight / 10} kg</p>
        <p><strong>Tipos:</strong> {pokemonData.types.map(t => t.type.name).join(', ')}</p>

        <div className="mt-4">
          <strong>Estadísticas base:</strong>
          <ul className="list-disc list-inside ml-4">
            {pokemonData.stats.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
