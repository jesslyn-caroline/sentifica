import { useState } from "react"

function Navbar() {
    const [theme, setTheme] = useState("light")

    function toggleTheme() {
        const html = document.documentElement
        const currentTheme = html.getAttribute("data-theme")

        if (currentTheme ==="light") {
            html.setAttribute("data-theme", "dark")
            setTheme("dark")
        }
        else {
            html.setAttribute("data-theme", "light")
            setTheme("light")
        }
    }

    return (
        <div className={`w-full h-16 flex justify-between items-center px-20 z-10 fixed`}>
            <h1 className={`text-2xl text-primary font-semibold`}>Sentifica</h1>
            <button className={`w-10 h-10 bg-primary rounded-md outline-none`} onClick={() => toggleTheme()}>
                <i className={`${theme === "light" ? "ri-moon-clear-line" : "ri-sun-line"} text-2xl text-background`}/>
            </button>
        </div>
    )
}

export default Navbar