import React, { useState } from "react";
import "./styles.css";

//Emoji Dictionary
const emojiDictionary = {
  "😀": "Grinning Face",
  "😉": "Winking Face",
  "😁": "Beaming Face with Smiling Eyes",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😜": "Winking Face with Tongue",
  "🍉": "Watermelon",
  "🍇": "Grapes",
  "🍋": "Lemon",
  "🍑": "Peach",
  "🥝": "Kiwi Fruit",
  "🥭": "Mango",
  "🌮": "Taco",
  "🥚": "Egg",
  "🎂": "Birthday Cake",
  "🍭": "Lollipop",
  "🍨": "Ice Cream",
  "🍿": "Popcorn",
  "🙈": "See-No-Evil Monkey",
  "🐵": "Monkey Face",
  "🐕": "Dog",
  "🦁": "Lion",
  "🦄": "Unicorn",
  "🐼": "Panda",
  "❤️": "Red Heart",
  "🎈": "Balloon",
  "🎀": "Ribbon",
  "🎁": "Wrapped Gift",
  "📷": "Camera",
  "📚": "Books",
  "😡": "Pouting Face",
  "😢": "Crying Face",
  "🧐": "Face with Monocle",
  "🤕": "Face with Head-Bandage",
  "😷": "Face with Medical Mask",
  "🥳": "Partying Face"
};

export default function App() {
  //Getting the keys from emoji dictionary
  const emojiKeys = Object.keys(emojiDictionary);
  const emojis = [];
  let start = 0;
  let count = 6;
  //This is just to have 6 emojis in each line
  while (emojiKeys.length !== 0) {
    emojis.push(emojiKeys.splice(start, count));
  }
  let [meaning, setMeaning] = useState("");
  //Input Field Handler
  function inputEmojiHandler(e) {
    //console.log(e.target.value);
    var emojiInput = e.target.value;

    if (emojiInput.trim() === "") {
      meaning = "";
    } else {
      meaning = emojiDictionary[emojiInput];
    }
    if (meaning === undefined) {
      meaning = "We don't have it...Sorry";
    }
    //console.log(meaning);
    setMeaning(meaning);
  }
  //Emoji Click Handler
  function emojiClickHandler(emoji) {
    // console.log(emoji);
    setMeaning(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1 className="title">EMOJIER</h1>
      <h2 className="tag">know your emojis!</h2>
      <input onChange={inputEmojiHandler}></input>
      <div className="meaning">
        <strong>{meaning}</strong>
      </div>
      <p className="tag">Available Emojis</p>
      {emojis.map((emojiList) => {
        return (
          <div key={emojiList}>
            {emojiList.map((emoji) => {
              return (
                <span
                  key={emoji}
                  className="emoji"
                  onClick={() => emojiClickHandler(emoji)}
                >
                  {emoji}
                </span>
              );
            })}
          </div>
        );
      })}
      <footer>
        <p>By Rampranav</p>
      </footer>
    </div>
  );
}
