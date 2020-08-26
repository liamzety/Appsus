export class BookFilter extends React.Component {



    render(){

        return (
            <section className="book-filter">


                <h2>Book Filter</h2>

                <input type="text" placeholder={"Filter By Name"} onChange={(ev) =>
                    this.props.setFilterByName(ev.target.value)} />
       
                <input name="min" type="number" placeholder={"Min."} onChange={(ev) =>
                    this.props.setFilterByPrice(ev.target)} />
                <input name="max" type="number" placeholder={"Max."} onChange={(ev) =>
                    this.props.setFilterByPrice(ev.target)} />
                    
                   
            </section>
        )
    }
}