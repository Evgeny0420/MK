'use strict'
const $arenas = document.querySelector('.arenas')
const randomButton = document.querySelector('.button')
let $life

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['kunai', 'katana'],
    attack: function () {
        console.log(this.name + 'Fight...')
    },
}

const player2 = {
    player: 2,
    name: 'SubZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['ice', 'cream'],
    attack: function () {
        console.log(this.name + 'Fight...')
    },
}

const createElement = (tag, className) => {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }
    return $tag
}

function createPlayer(object) {
    const $player = createElement('div', 'player' + object.player)
    const $progressbar = createElement('div', 'progressbar')
    $life = createElement('div', 'life')
    const $name = createElement('div', 'name')
    const $character = createElement('div', 'character')
    const $img = createElement('img')


    $player.appendChild($progressbar)
    $player.appendChild($character)

    $progressbar.appendChild($life)
    $progressbar.appendChild($name)

    $life.style.width = object.hp + '%'

    $name.innerText = object.name;

    $character.appendChild($img)
    $img.src = object.img

    return $player
}

randomButton.addEventListener('click', function () {
    bite(player1)
    bite(player2)
    // console.log(playerNum())
    if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWin('friends'))
    } else if (player2.hp === 0 && player1.hp > 0) {
        $arenas.appendChild(playerWin(player1.name))
    } else if (player1.hp === 0 && player2.hp > 0) {
        $arenas.appendChild(playerWin(player2.name))
    }
})

function playerNum() {
    return Math.floor(Math.random() * 20) + 1
}

function bite(player) {
    const $playerLife = document.querySelector('.player'+ player.player +' .life')
    player.hp -= playerNum()
    if (player.hp < 0) {
        player.hp = 0
        randomButton.disabled = true
    }
    $playerLife.style.width = player.hp + '%'
}

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle')
    $winTitle.innerText = name + ' wins'

    return $winTitle
}

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
