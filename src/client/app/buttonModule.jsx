import React from 'react';
import IncButton from './incButton.jsx';
import DecButton from './decButton.jsx';

class ButtonModule extends React.Component{
    constructor(props){
        super(props)
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(){
        this.props.increment(this.props.demo);
    }
    decrement(){
        this.props.decrement(this.props.demo);
    }

    render(){
        return(
            <div className="e buttons col">
                <IncButton inc={this.increment} demo={this.props.demo}/>
                <p className="count">{this.props.demoTotal}</p>
                <DecButton dec={this.decrement}/>
            </div>
        )
    }
}

export default ButtonModule;
