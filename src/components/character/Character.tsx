import { CharacterModel } from "../../models/CharacterModel";
import './Character.css';

function Character(props : { addToFavourite : boolean, character : CharacterModel }) {
    let star;
    if(props.addToFavourite){
        star = <span className="material-symbols-rounded" onClick={() => addToFavorites(props.character.id)} title="Add to favorites">star</span>

        // TODO: logica aggiungi/rimuovi preferito
        // <span className="material-symbols-rounded favorite-star" onClick={removeFromFavorites(props.character.id)} title="Remove from favorites">star</span>
    }

    const openDetails = (id : number) => {
        console.log('openDetails')
    }

    const addToFavorites = (id : number) => {
        console.log('addToFavorites')
    }

    return (
        <div className="character-container">
            <div className="img-container">
                <img src={props.character.image} className="char-img" />
            </div>
            <div className="name-container">
                <h2 className="pointer" onClick={() => openDetails(props.character.id)}>{ props.character.name }</h2>
            </div>
            <div className="icons-container">
                <span className="material-symbols-rounded" onClick={() => openDetails(props.character.id)} title="Open details">
                    manage_search
                </span>
                { star }
            </div>
        </div>
    );
}

export default Character;