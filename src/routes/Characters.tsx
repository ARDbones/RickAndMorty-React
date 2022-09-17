import { useEffect, useState } from "react";
import CharacterList from "../components/character-list/CharacterList";
import Modal from "../components/modal/Modal";
import Pagination from "../components/pagination/Pagination";
import SearchBar from "../components/search-bar/SearchBar";

function Characters() {
    const title = 'Character list';
    const [ page, setPage ] = useState(1);
    const [ maxPages, setMaxPage ] = useState(1);
    const [ characterList, setCharList ] = useState([]);
    const [ prev, setPrev ] = useState(null);
    const [ next, setNext ] = useState(null);

    useEffect(() => {
        // chiamata
    });

    const previousPage = () => {

    }

    const nextPage = () => {
        
    }

    return (
        <>
            <SearchBar />
            <CharacterList title={title} addToFavourite characterList={[]} />
            <Pagination page={1} maxPages={1} previousPage={previousPage} nextPage={nextPage} />
            <Modal></Modal>
        </>
    );
}

export default Characters;