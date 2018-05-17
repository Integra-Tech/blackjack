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
    'King'];

const suits = ['Spades', 'Hearts', 'Diamonds', 'Pluk'];

const deck = [];
let index;

function getOneMore() {
    let card = cards[Math.floor(Math.random() * cards.length >> 1)];
    let suit = suits[Math.floor(Math.random() * suits.length >> 1)];
    let sortedCard = card + ' of ' + suit;

    deck.push(sortedCard);
    console.log(deck, sortedCard);
    showDeck(deck);

    //oh fuck undefined.... why why why 
    index = deck.length-1;
}

function showDeck(deck, index) {
    let buildHtml = document.getElementById('Deck');
    const element = '<li> ' + deck[index] + '</li>';
    buildHtml.innerHTML = buildHtml.innerHTML.concat(element);
}