import { CharacterModel } from "../../models/CharacterModel";
import Character from "../character/Character";

function CharacterList(props : { title : string, addToFavourite : boolean, characterList : CharacterModel[] }) {
    const characters = props.characterList.map((el) =>
        <Character key={el.id} addToFavourite character={el} />
    );

    return (
        <div className="character-list-container">
            <h1>{props.title}</h1>
            {characters}
        </div>
    );
}

export default CharacterList;