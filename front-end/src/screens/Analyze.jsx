import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Analyze () {

    const [text, setText] = useState('')

    const [sentiment, setSentiment] = useState('')

    function handleValueChange(event) {
        setText(event.target.value)
    }

    async function analyze() {
        try {
            const response = await axios.post("https://sentifica-production.up.railway.app/api/predict", {text})
            setSentiment(response.data.sentiment)
            console.log(sentiment)
        }
        catch (err) {
            console.log(err)
        } 
    }

    return (
        <div className={`w-full md:max-h-[1024px] h-fit lg:h-screen px-8 md:px-12 lg:px-24 xl:px-32 py-20 flex flex-col items-center`}>
            <div className={`w-full`}>
                <Link to="/">
                    <i className={`ri-arrow-left-s-line text-3xl text-text`}/>
                </Link>
            </div>
            
            <div className={`max-w-xl w-full flex flex-col space-y-2`}>
                <h2 className={`text-lg 2xl:text-xl text-text font-bold`}>Type your text here, and let us analyze!</h2>
                <textarea className={`w-full text-text resize-none border border-2 border-accent rounded-md p-3`} rows={5} onChange={handleValueChange}></textarea>
                <div className={`flex justify-end`}>
                    <button className={`w-fit h-fit px-3 2xl:px-5 py-1.5 2xl:py-2 bg-primary rounded-md space-x-2 text-white text-md xl:text-xl font-bold cursor-pointer`} onClick={analyze}>
                        <span>Analyze</span>
                        <i className={`ri-magic-fill`}/>
                    </button>
                </div>
                
                <span className={`mt-8 flex justify-center text-lg 2xl:text-xl text-text font-semibold`}>
                    {sentiment === '' ? '' : `Result: ${sentiment}`}
                </span>
            </div>
        </div>
    )
}

export default Analyze
