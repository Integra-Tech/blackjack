const cards = [{ 'value': 1, 'name': 'Ace' },
    { 'value': 2, 'name': 'Two' },
    { 'value': 3, 'name': 'Three' },
    { 'value': 4, 'name': 'Four' },
    { 'value': 5, 'name': 'Five' },
    { 'value': 6, 'name': 'Six' },
    { 'value': 7, 'name': 'Seven' },
    { 'value': 8, 'name': 'Eight' },
    { 'value': 9, 'name': 'Nine' },
    { 'value': 10, 'name': 'Ten' },
    { 'value': 10, 'name': 'Joker' },
    { 'value': 10, 'name': 'Queen' },
    { 'value': 10, 'name': 'King' }
];

const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];


let deck = [];
let deckDealer = [];
// let index = 0;

function hit() {
    getOneMore(deck, 'deck');
}

function stand() {
    getOneMore(deckDealer, 'deckDealer');
}

let playerPoints = 0;

function countCards() {
    deck.array.forEach(element => {
        if (element === 'Ace' & deck.includes('King' || 'Queen' || 'Joker')) {
            playerPoints = 10
        } else {
            playerPoints += element.value;
        }
        console.log(playerPoints);
    });
}

function getOneMore(obj, divId) {
    let sortedCard = sortCard();

    if (!obj.includes(sortedCard)) {
        obj.push(sortedCard);
        console.log(obj, sortedCard);
        showDeck(obj, obj.length - 1, divId);
    } else {
        getOneMore();
    }

    function sortCard() {
        let card = cards[Math.floor(Math.random() * cards.length >> 1)].name;
        let suit = suits[Math.floor(Math.random() * suits.length >> 1)];
        let sortedCard = card + ' of ' + suit;
        return sortedCard;
    }
}

function showDeck(obj, index, divId) {
    let buildHtml = document.getElementById(divId);
    const element = '<li> ' + obj[index] + '</li>';
    buildHtml.innerHTML = buildHtml.innerHTML.concat(element);
}

function newGame() {
    deck = [];
    deckDealer = [];
    var buildHtml = document.getElementById('deck');
    var htmlDealer = document.getElementById('deckDealer')
    buildHtml.innerHTML = '';
    htmlDealer.innerHTML = '';
}