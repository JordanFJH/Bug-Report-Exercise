import { useState } from "react";
import "../App.css"
// import randomLibrary from "randomLibrary"
function Main() {

  const [text,setText ]=useState({text:"Level 1 done"})
  


  
  return (
    <div className="App">
  {text.text}
    </div>
  );
}

export default Main;
