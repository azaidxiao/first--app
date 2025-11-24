const jokeBox = document.getElementById("joke-box");
const btn = document.getElementById("btn");

async function getJoke() {
    jokeBox.textContent = "Loading joke...";
    
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");

        const data = await response.json();

        // Delay showing the joke by 2 seconds
        setTimeout(() => {
            jokeBox.textContent = data.joke;
        }, 1000); // 2000 ms = 2 seconds


    } catch (error) {
        jokeBox.textContent = "Something went wrong. Try again!";
    }
}

btn.addEventListener("click", getJoke);
