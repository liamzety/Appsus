

export function BookAdd(props){

    return(
        <section className="search-books">
             <h3>Search for Books:</h3>
             <div className="search-input-books">
            <input type="text" onChange={props.searchForBooks}/>
            <i className="fas fa-search"></i>
             </div>
        </section>
       
    )
}