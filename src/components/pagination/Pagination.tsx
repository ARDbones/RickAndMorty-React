import './Pagination.css';

function Pagination(props : { page : number, maxPages : number, previousPage : () => void, nextPage : () => void}) {
    const leftArrow = props.page != 1 ? 
    <span className="material-symbols-rounded" onClick={()=> props.previousPage()} title="Previous page">arrow_back</span> : ''
    
    const rightArrow = props.page != props.maxPages ? 
    <span className="material-symbols-rounded" onClick={()=> props.nextPage()} title="Next page">arrow_forward</span> : ''

    return (
        <div className="pagination-container">
            <div className="arrow-container">
                {leftArrow}
            </div>
            <div className="page-container">
                <span>{ props.page } of { props.maxPages }</span>
            </div>
            <div className="arrow-container">
                {rightArrow}
            </div>
        </div>
    );
}

export default Pagination;