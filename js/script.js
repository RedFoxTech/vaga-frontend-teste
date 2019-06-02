const root = document.querySelector('[data-root="container"]')
const myContainerModal = document.querySelector('[data-modal="container"]');
const btnClose = document.querySelector('[data-modal="close"]');
const myModal = document.querySelector('[data-modal="my-container"]');

const container = document.createElement('div');
container.classList.add('container-fluid');
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
            btnCard.classList.add('d-block', 'btn', 'btn-outline-light');

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

                        function openModal() {
                            myContainerModal.classList.toggle('ativo');

                            const imgModal = document.createElement('img');
                            imgModal.setAttribute('src', item.sprites.front_shiny);
                            myModal.appendChild(imgModal);

                            item.abilities.forEach((item) => {
                                const txt = document.createElement('p');
                                txt.innerHTML = `Ability name: ${item.ability.name}`;
                                myModal.appendChild(txt);

                                function closeModal() {
                                    myContainerModal.classList.remove('ativo');
                                    myModal.appendChild(txt).remove();
                                }
                                btnClose.addEventListener('click', closeModal)
                            })

                            item.types.forEach((item) => {
                                const txt = document.createElement('p');
                                txt.innerHTML = `Type name: ${item.type.name}`;
                                myModal.appendChild(txt);

                                function closeModal() {
                                    myContainerModal.classList.remove('ativo');
                                    myModal.appendChild(txt).remove();
                                    myModal.appendChild(imgModal).remove();
                                }
                                btnClose.addEventListener('click', closeModal)
                            })
                        }
                        btnCard.addEventListener('click', openModal)
                    })
                })
        })
    })
    .catch((erro) => {
        console.log(erro)
    })


