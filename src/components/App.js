// import { response } from 'msw/lib/types'
import React, { useEffect, useState } from 'react'

function App() {
    
    const [imgUrl, setImgUrl] = useState()

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(response => response.json())
        .then(json => setImgUrl(json.message))
    }, [])

    return (
        <div className="App">
            {imgUrl ? <img src={imgUrl} alt="A Random Dog" /> : <p>Loading...</p>}
        </div>
    )
}

export default App
