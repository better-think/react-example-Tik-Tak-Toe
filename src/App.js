import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

class App extends React.Component {
  state = {}
  constructor(props) {
    super(props);

    this.state = {
      history: [
        Array(9).fill(null)
      ],
      xIsNext: true,
      winner: null
    }
    this.handleChangeSquares.bind(this)
  }

  handleChangeSquares(i) {
    let { history, xIsNext } = this.state;
    let squares = history[history.length-1].slice();

    if( squares[i] != null) {
      return;
    } else if(selectWinner(squares)) {
      return this.setState({
        winner: "Winner is " + (xIsNext ? "O" : "X")
      })
    }
    squares[i] = xIsNext ? "X" : "O";
    history.push(squares);

    this.setState({
      history,
      xIsNext: !xIsNext
    });
  }
  handleBack (i) {

    if(i == 0) {
      i = 1
    }
    let history = this.state.history.slice(0, i);
    this.setState({
      history
    })
  }

  render() {
    let current = this.state.history[this.state.history.length -1];
    let status = "Next is for " + (this.state.xIsNext ? "X" : "O");
    let winner = this.state.winner;
    let history = this.state.history
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>Tik Tok Tak</span>
        </header>
        <div>
          <h1>{ winner == null  ? status : winner}</h1>
          <div style={{display: "flex", justifyContent: 'center'}}>
           
            <ul className="back-list">Back
            {
              history.map((item, index) => {
                return <li key={index} className="list">
                  <button className="item" onClick={()=>this.handleBack(index)}>Back - {index + 1}</button>
                </li>
              })
            }
            </ul>
            <div style={{width: "fit-content"}}>
              <Board squares={current} onClick={(i)=>this.handleChangeSquares(i)}></Board>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function selectWinner(squares) {
  let ways = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < ways.length; i++) {
    let [a, b, c] = ways[i];
    if(squares[a] == null || squares[b] == null || squares[c] == null) {
      continue
    }
    if(squares[a] === squares[b] && squares[b] === squares[c] && squares[c] === squares[a]) {
      return true;
    }
  }
  return false;
}

export default App;