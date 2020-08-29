export class EmailFilter extends React.Component {


    render() {
        return (

            <section className={`email-filter ${this.props.isHamburger ? 'show' : ''}`}>

                <div className='email-search-input'>

                    <input type="text" placeholder={"Search Emails"} onChange={(ev) =>
                        this.props.onSearchByTxt(ev.target.value)} />
                    <i className="fas fa-search"></i>
                </div>

            </section>
        )
    }
}