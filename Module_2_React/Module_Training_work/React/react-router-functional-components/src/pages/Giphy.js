import React, {useState} from 'react'

const Giphy = () => {
    const [gifURL, setGifURL] = useState('')

    const randomGIF = () =>{
    fetch('https://api.giphy.com/v1/gifs/random?api_key=tkqnGGBZotzl2FU2g2Z0d8E4F3pE7Yle')
        .then(Response => Response.json())
        .then(gif =>setGifURL(gif.data.fixed_height_downsampled_url))
        .catch(err => console.log(err))
               
}
return (
    <div>
        <h1> Random GIF</h1>
        <button onClick={() => randomGIF()}> Random </button>
        <img src={gifURL} alt="Random GIF" />
    </div>
)

}
export default Giphy


