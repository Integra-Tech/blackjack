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
    let card = cards[Math.floor(Math.random() * cards.length >> 1)];
    let suit = suits[Math.floor(Math.random() * suits.length >> 1)];
    let sortedCard = card + ' of ' + suit;

    deck.push(sortedCard);
    console.log(deck, sortedCard);
    //oh fuck undefined.... why why why 
    index = deck.length - 1;
    showDeck(deck, index);

}

function showDeck(deck, index) {
    let buildHtml = document.getElementById('Deck');
    const element = '<li> ' + deck[index] + '</li>';
    buildHtml.innerHTML = buildHtml.innerHTML.concat(element);
}

function newGame() {
    deck = [];
    index = '';
    let buildHtml = document.getElementById('Deck');
    buildHtml.innerHTML = 'Your card\'s:';
}