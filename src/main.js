import api from './api'

class App {
    constructor() {
        this.pokedex = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=pokedex]');
        this.listEl = document.getElementById('poke-list');


        this.registerHendlers();
    }

    registerHendlers() {
        this.formEl.onsubmit = event => this.addPokedex(event);
    }

    async addPokedex(event) {
        event.preventDefault();

        const pokeInput = this.inputEl.value;

        if (pokeInput.length === 0)
            return;
        try {
            const response = await api.get(`pokemon/${pokeInput}/`);

            const { name, id, species: { url }, sprites: { front_default } } = response.data;

            this.pokedex.push({
                name,
                id,
                url,
                front_default,
            });

            this.inputEl.value = '';

            this.render();
        } catch (error) {
            alert('Pokemon inexistente')
        }
    }

    render() {
        this.listEl.innerHTML = '';
        this.pokedex.forEach(pokebola => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', pokebola.front_default);
            imgEl.classList.add('circle');

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(pokebola.name))
            titleEl.classList.add('title')

            let idEl = document.createElement('p')
            idEl.appendChild(document.createTextNode(pokebola.id))

            let brEl = document.createElement('br');

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', pokebola.url)
            linkEl.appendChild(document.createTextNode('Acessar habilidades'));

            let listItemEl = document.createElement('li');
            listItemEl.classList.add('collection-item');
            listItemEl.classList.add('avatar');


            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(idEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(brEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl)

        })
    }
}

new App();