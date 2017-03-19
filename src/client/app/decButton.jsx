import React from 'react';

class DecButton extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.dec();
    }
    render(){
        return(
            <div className="col button decButton" onClick={this.handleClick}>
                <img src="Minus_symbol.svg" />
            </div>
        )
    }
}
export default DecButton;
