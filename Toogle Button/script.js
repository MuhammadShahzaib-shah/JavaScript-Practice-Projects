let color = "white";
let common = () => {
    if (color == "white") {
        let colours = document.querySelector("body")
        colours.style.backgroundColor = "black";
        color = "black"
        
    }
    else {
        let colours = document.querySelector("body")
        colours.style.backgroundColor = "white"
        color = "white"

    }
}

let divi = document.querySelector(".sub")
        divi.style.justifyContent = "center"
