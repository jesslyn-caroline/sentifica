import { useState } from "react"

function Navbar() {
    const [theme, setTheme] = useState(() => {
        let currentTheme = JSON.parse(localStorage.getItem("theme")) || "light"

        const html = document.documentElement
        html.setAttribute("data-theme", currentTheme)

        return currentTheme
    })

    

    function toggleTheme() {
        const html = document.documentElement
        const currentTheme = html.getAttribute("data-theme")

        if (currentTheme ==="light") {
            html.setAttribute("data-theme", "dark")
            setTheme("dark")
            localStorage.setItem("theme", JSON.stringify("dark"))
        }
        else {
            html.setAttribute("data-theme", "light")
            setTheme("light")
            localStorage.setItem("theme", JSON.stringify("light"))
        }
    }

    return (
        <div className={`w-full h-18 bg-background flex justify-between items-center px-8 md:px-12 lg:px-24 xl:px-32 z-10 fixed`}>
            <h1 className={`text-xl 2xl:text-2xl text-primary font-bold`}>Sentifica</h1>
            <button className={`w-10 h-10 2xl:w-12 2xl:h-12 bg-primary rounded-md outline-none cursor-pointer`} onClick={() => toggleTheme()}>
                <i className={`${theme === "light" ? "ri-moon-clear-line" : "ri-sun-line"} text-2xl 2xl:text-3xl text-white`}/>
            </button>
        </div>
    )
}

export default Navbar