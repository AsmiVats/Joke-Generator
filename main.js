const jokeel = document.getElementById('joke');
const anojoke = document.getElementById('anojoke');

anojoke.addEventListener('click', newjoke);

newjoke();

async function newjoke() {
    const url = 'https://icanhazdadjoke.com/';
    const options = {
       
        headers: {
            accept:'application/json'
        }
    };

        const response = await fetch(url, options);
        const result = await response.json();
        jokeel.innerHTML = result.joke;
        console.log(result);
    
}

