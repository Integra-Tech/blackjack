const cards = [
    { 'value': 1, 'name': 'Ace', 'visual': 'A'},
    {'value': 2,  'name': 'Two', 'visual': '2'},
    {'value': 3,  'name': 'Three', 'visual': '3'},
    {'value': 4,  'name': 'Four', 'visual': '4'},
    {'value': 5,  'name': 'Five', 'visual': '5'},
    {'value': 6,  'name': 'Six', 'visual': '6'},
    {'value': 7,  'name': 'Seven', 'visual': '7'},
    {'value': 8,  'name': 'Eight', 'visual': '8'},
    {'value': 9,  'name': 'Nine', 'visual': '9'},
    {'value': 10, 'name': 'Ten', 'visual': '10'},
    {'value': 10, 'name': 'Joker', 'visual': 'J'},
    {'value': 10, 'name': 'Queen', 'visual': 'Q'},
    {'value': 10, 'name': 'King', 'visual': 'K'}
];

const suits = [
    'Spades',
    'Hearts',
    'Diamonds',
    'Clubs'
];


let deck = [];
let deckDealer = [];

function hit() {
    getOneMore(deck);
}

function stand() {
    getOneMore(deckDealer);
}

function getOneMore(obj) {
    let sortedCard = sortCard();

    if (!obj.includes(sortedCard)) {
        obj.push(sortedCard);
        console.log(obj, sortedCard);
        showDeck(obj);
    } else {
        getOneMore(obj);
    }

    function sortCard() {
        return {
            'name': cards[Math.floor(Math.random() * cards.length )].visual,
            'suit': suits[Math.floor(Math.random() * suits.length )]  
        }
    }
}

function showDeck(obj) {
    const suitClass = {
        'Spades': {'visual':'♠', 'class': 'black'},
        'Hearts': {'visual':'♥', 'class': 'red'},
        'Diamonds': {'visual':'♦', 'class': 'red'},
        'Clubs': {'visual':'♣', 'class': 'black'}
    };
    let buildHtml = document.getElementById('Deck');
    buildHtml.innerHTML = '';
    
    obj.forEach(card => {
        buildHtml.innerHTML += '<div class="' + suitClass[card.suit].class + '">'
        +'<div class="number">' + card.name + '</div>'
        +'<div class="suit">' + suitClass[card.suit].visual + '</div><div>';
    });
}

function newGame() {
    deck = [];
    deckDealer = [];
    let buildHtml = document.getElementById('Deck');
    buildHtml.innerHTML = 'Your card\'s:';
}