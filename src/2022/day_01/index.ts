import fs from 'fs';
import { splitOnEmptyLine, splitOnLineBreak } from '../../utils/splitStrings';

function main() {
    fs.readFile('src/ex_01/calories.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const elfCalories = splitOnEmptyLine(data);
        const sum4Elf = elfCalories.map((bulk) =>
            splitOnLineBreak(bulk).reduce((acc, crr) => acc + Number(crr), 0)
        );

        const mostCalories = Math.max(...sum4Elf);
        console.log(mostCalories);
    });
}

function main2() {
    fs.readFile('src/ex_01/calories.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const elfCalories = splitOnEmptyLine(data);
        const sum4Elf = elfCalories.map((bulk) =>
            splitOnLineBreak(bulk).reduce((acc, crr) => acc + Number(crr), 0)
        );

        const topCalories = sum4Elf.sort((a, b) => b - a);
        const totalTopCalories = topCalories
            .slice(0, 3)
            .reduce((acc, crr) => acc + crr, 0);
        console.log(totalTopCalories);
    });
}

main2();
