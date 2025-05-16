function Home() {
    return (
        <div className={`w-full flex flex-col`}>
            
            {/* Hero Section */}
            <div className={`w-full h-screen px-20 py-20 flex flex-row`}>
                <div className={`w-1/2 flex flex-col justify-center space-y-3`}>
                    <h1 className={`text-text text-3xl font-semibold`}>
                        <span>Discover the Sentiment</span>
                        <br/>
                        <span className={`text-primary`}>Behind Every Word</span>
                    </h1>
                    <h2 className={`text-accent text-xl font-semibold`}>
                        Analyze Emotions. Understand Perspective.
                    </h2>
                    <button className={`w-fit h-fit px-4 py-1 bg-primary rounded-md space-x-2 text-white text-lg font-semibold`}>
                        <span>Try it Out!</span>
                        <i className={`ri-arrow-right-line font-xl`}/>
                    </button>
                </div>
                <div className={`w-1/2 flex justify-center items-center`}>
                    <img src="/images/sentiment-analysis.png" className={`w-md`}/>
                </div>
            </div>
        </div>
    )
}

export default Home