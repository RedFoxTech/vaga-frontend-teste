const root = document.querySelector('#root')
const myContainerModal = document.querySelector('[data-modal="container"]');
const btnClose = document.querySelector('[data-modal="close"]');
const myModal = document.querySelector('.my__modal')

const container = document.createElement('div');
container.setAttribute('class', 'container-fluid');
root.appendChild(container);

const row = document.createElement('div');
row.classList.add('row', 'd-flex', 'justify-content-center')
container.appendChild(row);


fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        data.results.forEach((item) => {

            const card = document.createElement('div');
            card.classList.add('m-5', 'p-5', 'bg-danger', 'border', 'border-dark', 'rounded-lg', 'shadow-sm')
            row.appendChild(card);

            const p = document.createElement('p');
            p.innerHTML = item.name.toUpperCase();
            p.classList.add('text-white', 'text-center');
            card.appendChild(p);

            const btnCard = document.createElement('button');
            btnCard.innerHTML = 'Saiba mais';
            btnCard.classList.add('d-block', 'btn', 'btn-outline-light')

            const url = item.url;
            fetch(`${url}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    const arr = [data];
                    arr.forEach((item) => {
                        const img = document.createElement('img');
                        img.setAttribute('src', item.sprites.front_default);
                        card.appendChild(img);
                        card.appendChild(btnCard);

                        btnCard.addEventListener('click', () => {
                            myContainerModal.classList.add('ativo');
                            const arrAbility = item.abilities;
                            arrAbility.forEach((item) => {
                                console.log(item.ability.name)
                            })
                            // const txt = document.createElement('p');
                            // txt.innerHTML = item.abilities.ability.name;
                            // myModal.appendChild(txt);
                        })

                        btnClose.addEventListener('click', () => {
                            myContainerModal.classList.remove('ativo');
                        })

                    })
                })
        })
    })
    .catch((erro) => {
        console.log(erro)
    })
