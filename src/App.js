import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

class App extends Component {
  state ={
    color : "black" ,
    bold : false,
    italic: false,
    underline:false,
  };
  setStyle = style => {
    const newStyle = !this.state[style];
    this.setState({[style]:newStyle})
  }
  setColor = color => 
    this.setState({color:color});
  render() {
    const stylingBoxes = stylings.map(style => (
      <button className={`btn ${this.state[style] ? "btn-success": "btn-outline-success"}`} style={styles[style]} key={style}
      onClick ={()=>this.setStyle(style)}>
        {style}
      </button>
    ));

    const colorBoxes = colors.map(color => {
      const isCurrentColor= color=== this.state.color;
      const size = isCurrentColor? 35:30;
      return(
      <button
        style={{ backgroundColor: color, height: size, width: size }}
        key={color}
        onClick={()=> this.setColor(color)}
      />);
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea style={{color:this.state.color ,
         fontWeight:this.state.bold && "bold",
         fontStyle:this.state.italic && "italic",
         textDecorationLine:this.state.underline && "underline"
         }} />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
