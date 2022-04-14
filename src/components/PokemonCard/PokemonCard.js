import './style.css'

export default function PokemonCard({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">{pokemon.name}</div>
            <div className="Card__types">
                {pokemon.types.map((type) => {
                    return <div className="Card__type">{type.type.name}</div>
                })}
            </div>
            <div className="Card__info">
                <div className="Card__data">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card__data">
                    <p className="title">Ability</p>
                    <p className="ability">
                        {pokemon.abilities[0].ability.name}
                    </p>
                </div>
            </div>
        </div>
    )
}
