function Home() {
    return (
        <div className={`w-full flex flex-col`}>
            
            {/* Hero Section */}
            <div className={`w-full max-h-[1024px] h-screen px-24 py-20 flex flex-row`}>
                <div className={`w-1/2 flex flex-col justify-center space-y-3`}>
                    <h1 className={`text-text text-3xl font-semibold`}>
                        <span>Discover the Sentiment</span>
                        <br/>
                        <span className={`text-primary`}>Behind Every Word</span>
                    </h1>
                    <h2 className={`text-accent text-xl font-semibold`}>
                        Analyze Emotions. Understand Perspective.
                    </h2>
                    <button className={`w-fit h-fit px-4 py-2 bg-primary rounded-md space-x-2 text-white text-lg font-semibold`}>
                        <span>Try it Out!</span>
                        <i className={`ri-arrow-right-line font-xl`}/>
                    </button>
                </div>
                <div className={`w-1/2 flex justify-center items-center`}>
                    <img src="/images/sentiment-analysis.png" className={`w-sm`}/>
                </div>
            </div>

            {/* About Section*/}
            <div className={`w-full h-fit bg-secondary px-24 py-12 flex flex-col space-y-3`}>
                <i className={`ri-information-2-fill text-3xl text-primary`}/>
                <h1 className={`font-semibold`}>
                    <h2 className={`text-lg text-primary`}>About Sentifica</h2>
                    <h2 className={`text-2xl text-text`}>Understanding Feelings through Words</h2>
                </h1>
                <h3 className={`font-normal text-md text-text`}>
                    <span className={`font-semibold text-primary`}>Sentifica</span> helps you explore the emotions behind everyday words. Using simple Machine Learning model, it classifies texts
                    into positive, neutral, or negative sentiments - quickly and easily. 
                    <br/>
                    Whether you’re just curious or experimenting with text analysis, <span className={`font-semibold text-primary`}>Sentifica</span> is here to make it simple and accessible.
                </h3>
            </div>

            {/* Why Section */}
            <div className={`w-full px-24 py-12 flex flex-col space-y-3`}>
                <i className={`ri-question-fill text-3xl text-primary`}/>
                <h1 className={`font-semibold`}>
                    <h2 className={`text-lg text-primary`}>Why Sentifica?</h2>
                    <h2 className={`text-2xl text-text`}>Your Text, Understood Instantly</h2>
                </h1>
                <h3 className={`font-normal text-md text-text`}>
                    <span className={`font-semibold text-primary`}>Sentifica</span> is built with one goal in mind — to make sentiment analysis simple, fast, and accessible for everyone.
                </h3>
                <div className={`grid grid-cols-3 space-x-3`}>
                    <div className={`flex flex-row items-center bg-secondary rounded-md px-4 py-2 space-x-2`}>
                        <i className={`ri-checkbox-circle-fill text-2xl text-primary`}/>
                        <span className={`text-md font-medium text-text`}>Easy to use</span>
                    </div>
                    <div className={`flex flex-row items-center bg-secondary rounded-md px-4 py-2 space-x-2`}>
                        <i className={`ri-money-dollar-box-fill text-2xl text-primary`}/>
                        <span className={`text-md font-medium text-text`}>Free</span>
                    </div>
                    <div className={`flex flex-row items-center bg-secondary rounded-md px-4 py-2 space-x-2`}>
                        <i className={`ri-login-box-fill text-2xl text-primary`}/>
                        <span className={`text-md font-medium text-text`}>No Login</span>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className={`w-full h-fit bg-primary py-2 mt-15 flex justify-center`}>
                <div className={`font-medium text-lg text-white space-x-1`}>
                    <span>Sentifica</span>
                    <i className={`ri-copyright-line`}/>
                    <span>2025</span>
                </div>
            </div>
        </div>
    )
}

export default Home