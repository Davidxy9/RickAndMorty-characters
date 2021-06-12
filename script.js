const image1 = document.querySelector('.img1');
const image2 = document.querySelector('.img2');
const image3 = document.querySelector('.img3');
const image4 = document.querySelector('.img4');
const nameCharacterOne = document.querySelector('#name-char');
const nameCharacterTwo = document.querySelector('#name-char2');
const nameCharacterThree = document.querySelector('#name-char3');
const nameCharacterFour = document.querySelector('#name-char4');
const button = document.querySelector('button');
let nameData;

randomNumberGenerator = () => {
  return Math.floor(Math.random() * 671);
};

getCharactersOne = () => {
    const idCharacter = randomNumberGenerator();
    return fetch(`https://rickandmortyapi.com/api/character/${idCharacter}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },

    }).then((response) => response.json()).then((data) => {
        image1.src = data.image;
        image1.alt = data.name;
        nameData = data.name;
        nameCharacterOne.innerHTML = nameData;
    })

};


getCharactersTwo = () => {
    const idCharacter = randomNumberGenerator();
    return fetch(`https://rickandmortyapi.com/api/character/${idCharacter}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },

    }).then((response) => response.json()).then((data) => {
        image2.src = data.image;
        image2.alt = data.name;
        nameData = data.name;
        nameCharacterTwo.innerHTML = nameData;
    })

};

getCharactersThree = () => {
    const idCharacter = randomNumberGenerator();
    return fetch(`https://rickandmortyapi.com/api/character/${idCharacter}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },

    }).then((response) => response.json()).then((data) => {
        image3.src = data.image;
        image3.alt = data.name;
        nameData = data.name;
        nameCharacterThree.innerHTML = nameData;
    })

};

getCharactersFour = () => {
    const idCharacter = randomNumberGenerator();
    return fetch(`https://rickandmortyapi.com/api/character/${idCharacter}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },

    }).then((response) => response.json()).then((data) => {
        image4.src = data.image;
        image4.alt = data.name;
        nameData = data.name;
        nameCharacterFour.innerHTML = nameData;
    })

};

getCharactersOne();
getCharactersTwo();
getCharactersThree();
getCharactersFour();

