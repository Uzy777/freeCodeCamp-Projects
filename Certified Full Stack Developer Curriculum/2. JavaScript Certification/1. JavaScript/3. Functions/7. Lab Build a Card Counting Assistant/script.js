
let count = 0;

function cardCounter(card) {
    if (typeof card === 'number') {
        if (card >= 2 && card <= 6) {
            count += 1;
        } else if (card >= 7 && card <= 9) {
        } else if (card === 10) {
            count -= 1;
        }
    } else if (typeof card === 'string') {
        const v = card.toUpperCase();
        if (v === 'J' || v === 'Q' || v === 'K' || v === 'A') {
            count -= 1;
        }
    }

    return `${count} ${count > 0 ? 'Bet' : 'Hold'}`;
}


console.log(cardCounter("K"))
console.log(cardCounter(2))