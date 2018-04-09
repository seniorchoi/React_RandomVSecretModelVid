import React, { Component } from 'react';

class VideoButton extends Component {
    constructor(props) {
        super(props);

        this.state = { term : '' };

    }
    render() {

        return (
            <div className="container">
                <button onClick={(e) => {this.clickRandom(e)}} className="btn btn-primary btn-lg col-md-4">
                    Next Model!
                </button>
            </div>
        );
    }

    clickRandom(){
        const modelNum = {
            1 : 'Candice Swanepoel',
            2 : 'Alessandra Ambrosio',
            3 : 'Adriana Lima',
            4 : 'Miranda Kerr',
            5 : 'Bar Refaeli',
            6 : 'Brooklyn Decker',
            7 : 'Marisa Miller',
            8 : 'Doutzen Kroes',
            9 : 'Erin Heatherton',
            10 : 'Rosie Huntington-Whiteley'
        };
        let randomNum;
        let max =10;
        let min =1;
        randomNum = Math.floor(Math.random()*(max-min+1)+ min);
        let modelName = modelNum[randomNum];
        this.setState({term : modelName});

        this.props.onSearchTermChange(modelName);



    }
}


export default VideoButton;
