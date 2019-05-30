const input = document.querySelector('input');
const btn = document.querySelector('button');
const container = document.querySelector('.container');


btn.addEventListener('click', () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data.results.forEach((item) => {

                let card = document.createElement('div');
                card.setAttribute('class', 'card');
                container.appendChild(card);

                let p = document.createElement('p');
                p.innerHTML = item.name;
                card.appendChild(p);

                let url = item.url;
                fetch(`${url}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        const arr = [data];
                        // console.log(arr);
                        arr.forEach((item) => {
                            // console.log(item.sprites.back_default);
                            let img = document.createElement('img');
                            img.setAttribute('src', item.sprites.front_default)
                            card.appendChild(img);
                        })
                    })
            })
        })
        .catch((erro) => {
            console.log(erro)
        })
})
