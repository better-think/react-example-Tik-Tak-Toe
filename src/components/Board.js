import React, { Component } from "react";
import Square from "./Square";

class Board extends Component{
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true
        }
        this.squareRender.bind(this);
    }

    squareRender(i) {
        return (
            <Square value={this.props.squares[i]} onClick={()=>this.props.onClick(i)}></Square>
        )
    }

    render() {
        let borderRowStyle = {
            clear: "both",
            content: "",
            display: "table",
        }

        return (
            <>
                <div style={borderRowStyle}>
                    {this.squareRender(0)}
                    {this.squareRender(1)}
                    {this.squareRender(2)}
                </div>
                <div style={borderRowStyle}>
                    {this.squareRender(3)}
                    {this.squareRender(4)}
                    {this.squareRender(5)}
                </div>
                <div style={borderRowStyle}>
                    {this.squareRender(6)}
                    {this.squareRender(7)}
                    {this.squareRender(8)}
                </div>
            </>
        )
    }
}

export default Board