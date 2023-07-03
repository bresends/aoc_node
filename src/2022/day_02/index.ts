import { readTextFile } from '../../utils/readFile';

/*
First Challenge 

Opponent Plays
A Rock
B Paper
C Scissors 

My plays
X Rock
Y Paper
C Scissors
*/

export function puzzle1(input: string) {
    return input
        .split('\n')
        .map(calculateMatchScore1)
        .reduce((total, cur) => total + cur, 0);
}

export function puzzle2(input: string) {
    return input
        .split('\n')
        .map(calculateMatchScore2)
        .reduce((total, cur) => total + cur, 0);
}

function calculateMatchScore1(match: string) {
    const [opponentMove, myMove] = match.split(' ');

    const myMoveValues = {
        X: 1,
        Y: 2,
        Z: 3,
    };

    const gameValues = {
        A: { X: 3, Y: 6, Z: 0 },
        B: { X: 0, Y: 3, Z: 6 },
        C: { X: 6, Y: 0, Z: 3 },
    };

    const myMoveScore = myMoveValues[myMove];
    const gameScore = gameValues[opponentMove][myMove];

    return myMoveScore + gameScore;
}

/*
Second Challenge 

Opponent Plays
A Rock
B Paper
C Scissors 

Outcome
X Lose
Y Draw
C Win
*/

function calculateMatchScore2(match: string) {
    const [opponentMove, gameOutcome] = match.split(' ');

    const requiredMove = {
        A: { X: 'C', Y: 'A', Z: 'B' },
        B: { X: 'A', Y: 'B', Z: 'C' },
        C: { X: 'B', Y: 'C', Z: 'A' },
    };

    const myMoveValues = {
        A: 1,
        B: 2,
        C: 3,
    };

    const gameOutcomeValues = {
        X: 0,
        Y: 3,
        Z: 6,
    };

    const myMove = requiredMove[opponentMove][gameOutcome];
    const gameScore = gameOutcomeValues[gameOutcome];
    const myMoveScore = myMoveValues[myMove];

    return myMoveScore + gameScore;
}

const input = readTextFile({
    folder: '2022/day_02',
    name: 'strategy',
});

console.log(puzzle1(input));
console.log(puzzle2(input));
