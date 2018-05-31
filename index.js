const cards = [
    { 'value': 1, 'name': 'Ace', 'visual': 'A' },
    { 'value': 2, 'name': 'Two', 'visual': '2' },
    { 'value': 3, 'name': 'Three', 'visual': '3' },
    { 'value': 4, 'name': 'Four', 'visual': '4' },
    { 'value': 5, 'name': 'Five', 'visual': '5' },
    { 'value': 6, 'name': 'Six', 'visual': '6' },
    { 'value': 7, 'name': 'Seven', 'visual': '7' },
    { 'value': 8, 'name': 'Eight', 'visual': '8' },
    { 'value': 9, 'name': 'Nine', 'visual': '9' },
    { 'value': 10, 'name': 'Ten', 'visual': '10' },
    { 'value': 10, 'name': 'Joker', 'visual': 'J' },
    { 'value': 10, 'name': 'Queen', 'visual': 'Q' },
    { 'value': 10, 'name': 'King', 'visual': 'K' }
];

const suits = [
    'Spades',
    'Hearts',
    'Diamonds',
    'Clubs'
];


let playerDeck = [];
let deckDealer = [];

function hit() {
    getOneMore(playerDeck);
}

function stand() {
    getOneMore(deckDealer, 'deckDealer');
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
        let card = cards[Math.floor(Math.random() * cards.length)];
        return {
            'name': card.visual,
            'value': card.value,
            'suit': suits[Math.floor(Math.random() * suits.length)]
        }
    }
}

function showDeck(obj) {
    const suitClass = {
        'Spades': { 'visual': '♠', 'class': 'black' },
        'Hearts': { 'visual': '♥', 'class': 'red' },
        'Diamonds': { 'visual': '♦', 'class': 'red' },
        'Clubs': { 'visual': '♣', 'class': 'black' }
    };
    let buildHtml = document.getElementById('Deck');
    let disableHitHtml = document.getElementById('hit')
    buildHtml.innerHTML = '';

    let count = 0;
    obj.forEach(card => {
        buildHtml.innerHTML += '<div class="' + suitClass[card.suit].class + '">' +
            '<div class="number">' + card.name + '</div>' +
            '<div class="suit">' + suitClass[card.suit].visual + '</div><div>';
        count += (card.name !== 'A' ? card.value : countPoints(obj))
    });
    if (count > 21) {
        disableHitHtml = '<button id="hit" disabled type="button" class="btn btn-primary btn-md" onclick="hit()">Hit!</button>'
        count += ' ' + ' pontuação máxima atingida! '
            // document.getElementById('sum').innerHTML = count;
    }
    document.getElementById('sum').innerHTML = count;

};


function countPoints(obj) {
    let AceValue = 1;
    if (obj.some(card => obj.some(card => (card['name'] === 'J') || (card['name'] === 'Q') || (card['name'] === 'K')))) {
        AceValue = 11;
    }
    return AceValue;
}


function newGame() {
    playerDeck = [];
    deckDealer = [];
    count = 0;
    let buildHtml = document.getElementById('Deck');
    buildHtml.innerHTML = 'Your card\'s:';
    document.getElementById('sum').innerHTML = count;
}