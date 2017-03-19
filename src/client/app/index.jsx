import React from 'react';
import {render} from 'react-dom';

import ButtonModule from './buttonModule.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            total: 0,
            men: 0,
            women: 0
        };
        this.incrementCount =  this.incrementCount.bind(this);
        this.decrementCount =  this.decrementCount.bind(this);
    }
    incrementCount(demo){
        this.setState((prev,props)=>{
            prev[demo] += 1;
            prev.total += 1;
            return prev;
        });
    }
    decrementCount(demo){
        this.setState((prev,props)=>{
            if(prev[demo] > 0){
                prev[demo] -= 1;
                prev.total -= 1;
            }
            return prev;
        });
    }

    render(){
        return(
            <main className="col">
                <header className="fixed top row"><h1>Bar Counter</h1></header>
                <section className="col c">
                    <p className="count">Total: {this.state.total}</p>
                    <div className="buttons row">
                        <ButtonModule increment={this.incrementCount} decrement={this.decrementCount} demo="men" total={this.state.total} demoTotal={this.state.men} />
                        <ButtonModule increment={this.incrementCount} decrement={this.decrementCount} demo="women" total={this.state.total} demoTotal={this.state.women} />
                    </div>
                </section>
                <footer className="fixed bottom"></footer>
            </main>
        )
    }
}

render(<App />, document.getElementById('app'));
