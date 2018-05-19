const cards = [{ 'value': 1, 'name': 'Ace' },
                {'value': 2,  'name': 'Two' },
                {'value': 3,  'name': 'Three' },
                {'value': 4,  'name': 'Four' },
                {'value': 5,  'name': 'Five' },
                {'value': 6,  'name': 'Six' },
                {'value': 7,  'name': 'Seven' },
                {'value': 8,  'name': 'Eight' },
                {'value': 9,  'name': 'Nine' },
                {'value': 10, 'name': 'Ten' },
                {'value': 10, 'name': 'Joker' },
                {'value': 10, 'name': 'Queen' },
                {'value': 10, 'name': 'King' }
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
        getOneMore(obj);
    }

    function sortCard() {
        let card = cards[Math.floor(Math.random() * cards.length )].name;
        let suit = suits[Math.floor(Math.random() * suits.length )];
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