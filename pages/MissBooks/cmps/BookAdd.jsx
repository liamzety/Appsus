

export function BookAdd(props){

    return(
        <section className="search-books">
             <h3>Search for Books</h3>
        <input type="text" onChange={props.searchForBooks}/>
        </section>
       
    )
}