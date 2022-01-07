import React, { Component } from "react";
import "./main.css";
import rockImg from "../Components/Images/202-2025619_rock-paper-scissors-png-transparent-png.svg";
import scisImg from "../Components/Images/3313787-middle.svg";
import paperImg from "../Components/Images/rock-paper-scissors-game-246511.svg";
export default class Main extends Component {
  state = {
    array: [
      { name: "Rock", image: rockImg },
      { name: "Scissors", image: scisImg },
      { name: "Paper", image: paperImg },
    ],
    newArray: {},
    my:'',
    result:''
  };
  randomFunction = (param) => {
    let i = this.state.array[Math.round(Math.random() * 2)];
    
    this.setState({
      newArray: i,
      my:param
    });
    
    
    console.log(param,i.name);
    
    if (param == i.name ){
        this.setState({
            result:'Draw'
        })
    }else if (param == 'Rock' && i.name == 'Scissors' || param == 'Scissors' && i.name == 'Paper' || param == 'Paper' && i.name == 'Rock' ){
        this.setState({
            result:'Win'
        })
    }else {
        this.setState({
            result:'Lose'
        })
    }
    
  };

  render() {
    return (
      <div>
        <div className="new-item">
          

              <div className="new-block">
                <img src={this.state.newArray.image} />
                <p>{this.state.newArray.name}</p>
              </div>
            <h1 className="result" style={{color:`${this.state.result === 'Win'? 'Green': this.state.result === 'Draw'? 'Yellow' : 'Red'}`}}>{this.state.result}</h1>
          
        </div>
        <div className="section-block">
          <div className="block rock-block">
            <img src={rockImg} />
            <button className="btn rock-btn" onClick={() => this.randomFunction('Rock')}>
              Rock
            </button>
          </div>
          <div className="block scissors-block">
            <img src={scisImg} />
            <button className="btn scissors-btn" onClick={() => this.randomFunction('Scissors')}>
              Scissors
            </button>
          </div>
          <div className="block paper-block">
            <img src={paperImg} />
            <button className="btn paper-btn" onClick={() => this.randomFunction('Paper')}>
              Paper
            </button>
          </div>
        </div>
      </div>
    );
  }
}
