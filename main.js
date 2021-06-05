'use strict'
const $arenas = document.querySelector('.arenas')

const player1 = {
    name: 'Scorpion',
    hp: 30,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['kunai', 'katana'],
    attack: function () {
        console.log(this.name + 'Fight...')
    },
}

const player2 = {
    name: 'SubZero',
    hp: 70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['ice', 'cream'],
    attack: function () {
        console.log(this.name + 'Fight...')
    },
}

function createPlayer(player, object) {
    const $img = document.createElement('img')
    $img.src = object.img

    const $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = object.hp + '%'

    const $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerText = name;

    const $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar')
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)

    const $character = document.createElement('div')
    $character.classList.add('character')
    $character.appendChild($img)

    const $player = document.createElement('div')
    $player.classList.add(player)
    $player.appendChild($progressbar)
    $player.appendChild($character)
    $arenas.appendChild($player)
}

createPlayer('player1', player1)
createPlayer('player2', player2)
