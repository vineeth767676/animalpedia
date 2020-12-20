import React , {useState} from "react";
import "./styles.css";


var emojiDictionary = {
  "🐶" : "dog",
  "🦁" : "lion",
  "🐯" : "tiger",
  "🦄" : "unicorn",
  "🐇" : "rabbit",
  "🦇" : "bat",
  "🦅" : "eagle",
  "🐍" : "snake"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {

  const [meaning , setMeaning] = useState("");

 function emojiInputHandler(event) {
  var userInput = event.target.value;

  var meaning = emojiDictionary[userInput];
    
  if (meaning === undefined) {
    meaning = "Our database doesn't have this"
  }
  setMeaning(meaning)
 }

 function emojiClickHandler(emoji) {
  var meaning = emojiDictionary[emoji];
  setMeaning(meaning);
 }
  return (
    <div className="container">
     <div className="App">
      
      <h1 className = "heading">AnimalPedia</h1>
      <input placeholder =" EMOJI" onChange = {emojiInputHandler}></input>

      <h2> {meaning} </h2>

      <h3>  👇 Emojis we know 👇  </h3>

     {emojisWeKnow.map(function(emoji){
      return(
        <span className = "emoji"
          onClick={() => emojiClickHandler(emoji)} 
          style={{fontSize:"",}}
          key={emoji} > {emoji} 
        </span>
      );
     })}
      </div>
    </div>
  );
}
