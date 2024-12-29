$(document).ready(function () {
    let digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    let cards = [...digits, ...digits];
    let flippedCards = [];
    let matchedPairs = 0;
    let gameActive = false;

    let shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    let createCardElement = (symbol) => {
        return $(`
            <div class="card" data-symbol="${symbol}">
                <div class="card-front">${symbol}</div>
                <div class="card-back"></div>
            </div>
        `);
    };

    let initializeGameBoard = () => {
        let shuffledCards = shuffleArray([...cards]);
        let $cardsContainer = $('.cards-container');
        $cardsContainer.empty();

        shuffledCards.forEach(symbol => {
            $cardsContainer.append(createCardElement(symbol));
        });

        flippedCards = [];
        matchedPairs = 0;
        gameActive = true;
        $('.message').text('');
    };

    let checkMatch = () => {
        let [card1, card2] = flippedCards;

        if (card1.data('symbol') === card2.data('symbol')) {
            card1.add(card2).addClass('matched');
            matchedPairs++;
            flippedCards = [];

            if (matchedPairs === digits.length) {
                $('.message').text('You won!');
                $('#startBtn').text('START');
                gameActive = false;
            }
        } else {
            setTimeout(() => {
                card1.add(card2).removeClass('flipped');
                flippedCards = [];
            }, 1000);
        }
    };

    let handleCardFlip = (card) => {
        if (!gameActive || card.hasClass('flipped') || card.hasClass('matched')) return;

        card.addClass('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    };

    $('#startBtn').click(function () {
        if ($(this).text() === 'START') {
            $(this).text('FINISH');
            initializeGameBoard();
        } else {
            $(this).text('START');
            $('.cards-container').empty();
            $('.message').text('Paused');
            gameActive = false;
        }
    });

    $('.cards-container').on('click', '.card', function () {
        handleCardFlip($(this));
    });
});
