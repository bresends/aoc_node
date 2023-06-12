import fs from 'fs';
import path from 'path';

const getSumOfGroup = (group: string) =>
    group.split('\n').reduce((acc, cur) => acc + Number(cur), 0);

function puzzle1() {
    fs.readFile(
        path.resolve(__dirname, './calories.txt'),
        'utf-8',
        (err, data) => {
            if (err) throw new Error('Could not read the file');
            const elfCalories = data.split('\n\n').map(getSumOfGroup);
            const highestCalories = Math.max(...elfCalories);
            console.log(highestCalories);
        }
    );
}

function puzzle2() {
    fs.readFile(
        path.resolve(__dirname, './calories.txt'),
        'utf-8',
        (err, data) => {
            if (err) throw new Error('Could not read the file');
            const elfCalories = data.split('\n\n').map(getSumOfGroup);
            const topCalories = [...elfCalories].sort((a, b) => b - a);
            const totalTopCalories = topCalories
                .slice(0, 3)
                .reduce((acc, crr) => acc + crr, 0);
            console.log(totalTopCalories);
        }
    );
}

puzzle2();
