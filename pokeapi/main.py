import requests
import json

if __name__ == '__main__':
    url = 'https://pokeapi.co/api/v2/pokemon/'
    response = requests.get(url)

    if response.status_code == 200:
        content = response.content
        file = open('pokeapi_20.json', 'wb')
        file.write(content)
        file.close()
        print(content)

    