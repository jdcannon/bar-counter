import React from 'react';


class IncButton extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.inc();
    }
    render(){
        let classes="col button incButton e " + "btn-" + this.props.demo;
        return(
            <div className={classes} onClick={this.handleClick}>
                {this.props.demo == "men" ? <img src="Male_symbol.svg" /> : <img src="Female_symbol.svg"/> }
            </div>
        )
    }
}
export default IncButton;
