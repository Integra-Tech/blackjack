const cards = [{ 1: 'Ace' },
    { 2: 'Two' },
    { 3: 'Three' },
    { 4: 'Four' },
    { 5: 'Five' },
    { 6: 'Six' },
    { 7: 'Seven' },
    { 8: 'Eight' },
    { 9: 'Nine' },
    { 10: 'Ten' },
    { 10: 'Joker' },
    { 10: 'Queen' },
    { 10: 'King' }
];

const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];


let deck = [];
let deckDealer = [];
// let index = 0;

function hit() {
    getOneMore(deck);
}

function stand() {
    getOneMore(deckDealer);
}

function countCards() {
    deck.array.forEach(element => {
        if (element === 'Ace' & deck.includes('King' || 'Queen' || 'Joker')) {

        } else {

        }
    });
}

function getOneMore(obj) {
    let sortedCard = sortCard();

    if (!obj.includes(sortedCard)) {
        obj.push(sortedCard);
        console.log(obj, sortedCard);
        showDeck(obj, obj.length - 1);
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

function showDeck(obj, index) {
    let buildHtml = document.getElementById('Deck');
    const element = '<li> ' + obj[index] + '</li>';
    buildHtml.innerHTML = buildHtml.innerHTML.concat(element);
}

function newGame() {
    deck = [];
    deckDealer = [];
    let buildHtml = document.getElementById('Deck');
    buildHtml.innerHTML = 'Your card\'s:';
}