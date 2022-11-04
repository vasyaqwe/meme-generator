import { useState, useEffect } from 'react'


export default function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className='form'>
                <div className="inputs">
                    <input onChange={handleChange}
                        value={meme.topText}
                        name="topText"
                        type="text"
                        placeholder="Top Text"
                    />
                    <input onChange={handleChange}
                        name="bottomText"
                        value={meme.bottomText}
                        type="text"
                        placeholder="Bottom Text"
                    />
                </div>
                <button type="submit" className="fw-700" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}