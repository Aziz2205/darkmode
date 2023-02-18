document.documentElement.setAttribute('color-theme', 'light');

function darkMode() {
    let dar = document.getElementById("there-dark") 
    if (dar.classList == "sr-only peer light") {
        dar.classList.remove("light")
        dar.classList.add("dark")
        document.documentElement.classList.add("dark")
    } else {
        dar.classList.remove("dark")
        dar.classList.add("light")
        document.documentElement.classList.remove("dark")
    }
}