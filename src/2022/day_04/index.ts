import fs from 'fs';
import path from 'path';

function convertToRange(inputText: string) {
    // Format: 31-31,32-40 - '()' to capture groups, '\d' for a digit '+' for a sequence of 1+ digits, and the other caracters to match the Format.
    // Slice to remove the first element of the return array, that is the original string.
    return inputText.split('\n').map((pair) =>
        pair
            .match(/(\d+)-(\d+),(\d+)-(\d+)/)
            .slice(1)
            .map(Number)
    );
}

function totalOverlapCheck([
    sec1Start,
    sec1End,
    sec2Start,
    sec2End,
]: Array<number>) {
    return (
        (sec1Start >= sec2Start && sec1End <= sec2End) ||
        (sec1Start <= sec2Start && sec1End >= sec2End)
    );
}

function partialOverlapCheck([
    sec1Start,
    sec1End,
    sec2Start,
    sec2End,
]: Array<number>) {
    return sec1Start <= sec2End && sec2Start <= sec1End;
}

function puzzle1() {
    fs.readFile(
        path.resolve(__dirname, './pairs.txt'),
        'utf-8',
        (err, data) => {
            if (err) throw new Error('Could not read the file');
            const totalOverlaps =
                convertToRange(data).filter(totalOverlapCheck).length;

            console.log(totalOverlaps);
        }
    );
}

function puzzle2() {
    fs.readFile(
        path.resolve(__dirname, './pairs.txt'),
        'utf-8',
        (err, data) => {
            if (err) throw new Error('Could not read the file');
            const totalOverlaps =
                convertToRange(data).filter(partialOverlapCheck).length;
            console.log(totalOverlaps);
        }
    );
}

puzzle2();
