export class NoteSearch extends React.Component {



    render(){

        return (
            <section className="note-search">
                <div className="search-input">

                <input type="text" placeholder={"Search Note"} onChange={(ev) =>
                    this.props.searchByText(ev.target.value)} />
                    <i className="fas fa-search"></i>
                </div>
               
            </section>
        )
    }
}