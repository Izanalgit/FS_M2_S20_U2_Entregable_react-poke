import styles from '../styles/PokeForm.module.css';

function Pokemon(data){
    return(
        <div className={styles.Pokemon}>
            <div>
                <img src={data.sprites.front_default}/>
                <div>
                    <h2>{data.name}</h2>
                    <h3>POKEDEX ID: {data.id}</h3>
                </div>
            </div>
            <p>Peso : {data.weight}</p>
            <p>EXP Base: {data.base_experience}</p>
            <p>Tipos :</p>
            <p>{data.types.map((type,ind)=><span key={ind}>{type.type.name}</span>)}</p>
        </div>
    );
}

export default Pokemon;