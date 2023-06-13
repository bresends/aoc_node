import fs from 'fs';
import path from 'path';

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

function puzzle1() {
    fs.readFile(
        path.resolve(__dirname, './strategy.txt'),
        'utf-8',
        (err, data) => {
            if (err) throw new Error('Could not read the file');
            const matches = data.split('\n');
            const matchScore = matches.map(calculateMatchScore1);
            const totalScore = matchScore.reduce((acc, cur) => acc + cur, 0);
            console.log(totalScore);
        }
    );
}

function puzzle2() {
    fs.readFile(
        path.resolve(__dirname, './strategy.txt'),
        'utf-8',
        (err, data) => {
            if (err) throw new Error('Could not read the file');
            const matches = data.split('\n');
            const matchScore = matches.map(calculateMatchScore2);
            const totalScore = matchScore.reduce((acc, cur) => acc + cur, 0);
            console.log(totalScore);
        }
    );
}

puzzle2();
