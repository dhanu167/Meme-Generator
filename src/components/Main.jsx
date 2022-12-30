import React from "react";
import memesData from "../memesData";

export default function Main(){

    const [memes, setMemes] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }
    )

    const [allMemeImages,setAllMemeImages] = React.useState(memesData)

    function handleChange(event){
        const {name, value} = event.target
        setMemes(prevMemes => ({
            ...prevMemes,
            [name] : value
        }))
    }

    function getMemeImage(){
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMemes(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Above Text" 
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Below Text" 
                    className="form--input"
                    name="buttomText"
                    onChange={handleChange}
                />
                <button 
                    className="form--button" 
                    onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img className="meme-image" src={memes.randomImage} />
                <h2 className="meme--text top">{memes.topText}</h2>
                <h2 className="meme--text bottom">{memes.buttomText}</h2>
            </div>
        </main>
    )
}