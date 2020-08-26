export class NoteSearch extends React.Component {



    render(){

        return (
            <section className="note-search">


                <h2>Note Search</h2>

                <input type="text" placeholder={"Search"} onChange={(ev) =>
                    this.props.searchByText(ev.target.value)} />
               
            </section>
        )
    }
}