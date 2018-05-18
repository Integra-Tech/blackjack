const cards = ['Ace',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'Joker',
    'Queen',
    'King'
];

const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];

let deck = [];
let index = 0;

function getOneMore() {
    let sortedCard = sortCard();

    if (!deck.includes(sortedCard)) {
        deck.push(sortedCard);
        console.log(deck, sortedCard);
        showDeck(deck, deck.length - 1);
    } else {
        getOneMore();
    }

    function sortCard() {
        let card = cards[Math.floor(Math.random() * cards.length >> 1)];
        let suit = suits[Math.floor(Math.random() * suits.length >> 1)];
        let sortedCard = card + ' of ' + suit;
        return sortedCard;
    }
}

function showDeck(deck, index) {
    let buildHtml = document.getElementById('Deck');
    const element = '<li> ' + deck[index] + '</li>';
    buildHtml.innerHTML = buildHtml.innerHTML.concat(element);
}

function newGame() {
    deck = [];
    let buildHtml = document.getElementById('Deck');
    buildHtml.innerHTML = 'Your card\'s:';
}