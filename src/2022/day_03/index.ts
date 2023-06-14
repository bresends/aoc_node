import fs from 'fs';
import path from 'path';

function findRepeatedItem(rucksack: string) {
    const firstCompartment = rucksack
        .substring(0, rucksack.length / 2)
        .split('');

    const secondCompartment = rucksack.substring(rucksack.length / 2).split('');

    // To scale linearly (has only returns once, and includes in exponential)
    const secondCompartmentSet = new Set(secondCompartment);
    return firstCompartment.find((item) => secondCompartmentSet.has(item));
}

/*
UTF Character | Decimal 
--------- | ------- 
'A'       | 65      
'a'       | 97      
*/

function calculateLetterScore(letter: string) {
    // UpperCase as 0 + 27 to be the next number after the lowercases.
    if (letter === letter.toUpperCase()) return letter.charCodeAt(0) - 65 + 27;
    return letter.charCodeAt(0) - 96;
}

function createGroups(rucksacks: Array<string>) {
    const groups = [];
    while (rucksacks.length) {
        groups.push(rucksacks.splice(0, 3));
    }
    return groups;
}

function findBadge([sack1, sack2, sack3]: Array<string>) {
    const [set1, set2, set3] = [new Set(sack1), new Set(sack2), new Set(sack3)];
    const badge = [...set1].find((item) => set2.has(item) && set3.has(item));
    return badge;
}

function puzzle1() {
    fs.readFile(
        path.resolve(__dirname, './rucksacks.txt'),
        'utf-8',
        (err, data) => {
            if (err) throw new Error('Could not read the file');
            const totalPriorities = data
                .split('\n')
                .map(findRepeatedItem)
                .map(calculateLetterScore)
                .reduce((acc, cur) => acc + cur, 0);
            console.log(totalPriorities);
        }
    );
}

function puzzle2() {
    fs.readFile(
        path.resolve(__dirname, './rucksacks.txt'),
        'utf-8',
        (err, data) => {
            if (err) throw new Error('Could not read the file');
            const rucksacks = data.split('\n');
            const groups = createGroups(rucksacks);
            const totalPriorities = groups
                .map(findBadge)
                .map(calculateLetterScore)
                .reduce((acc, cur) => acc + cur, 0);
            console.log(totalPriorities);
        }
    );
}

puzzle2();
