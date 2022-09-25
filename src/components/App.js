import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"

console.log(blogData);

function App() {
  return (
    <div className="App">
      {Header({name:"Overeacted"})}
      {About({image:"logo.svg", about:"About this blog"})}
    </div>
  );
}

export default App;
