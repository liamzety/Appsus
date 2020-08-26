export class LongTxt extends React.Component{

    state={
        isTxtShown:false
    }

    showMoreTxt=()=>{
        this.setState({isTxtShown: !this.state.isTxtShown}) 
    }

   render(){

       return (
          
           <li>
               <div className={this.state.isTxtShown ? "" : "decription-area"}>
               {this.props.text}
               </div>
               <span className="read-more" onClick={this.showMoreTxt}>{this.state.isTxtShown ? "Read Less.." : "Read More..."} </span>
           </li>
       )
   }
}