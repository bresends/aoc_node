import { readTextFile } from '../../utils/readFile';

export function puzzle1(input: string) {
    const [crates, instructions] = input.split('\n\n');
    const stacks = getStacks(crates);
    const organizedStack = moveStacks(stacks, instructions, true);
    return getTopBoxes(organizedStack);
}

export function puzzle2(input: string) {
    const [crates, instructions] = input.split('\n\n');
    const stacks = getStacks(crates);
    const organizedStack = moveStacks(stacks, instructions, false);
    return getTopBoxes(organizedStack);
}

export function getStacks(rawStacks: string) {
    const boxes = rawStacks
        .split('\n')
        .slice(0, -1)
        .map((row) => [...row].filter((_, index) => index % 4 === 1));

    return boxes.reduce((obj, row) => {
        row.forEach((char, index) => {
            if (!obj[index + 1]) obj[index + 1] = [];
            // Exclude Empty Positions
            if (char.trim()) obj[index + 1].push(char);
        });
        return obj;
    }, {});
}

export function moveStacks(
    stack: {},
    rawInstructions: string,
    firstInFirstOut: boolean
) {
    const instructions = rawInstructions
        .split('\n')
        .map((instruction) => instruction.match(/\d+/g));

    const newStack = instructions.reduce((obj, instruction) => {
        const [numberOfMoves, origin, destination] = [
            instruction[0],
            instruction[1],
            instruction[2],
        ];

        const removedFromColumn = obj[origin].splice(0, numberOfMoves);

        if (firstInFirstOut)
            obj[destination].unshift(...removedFromColumn.reverse());
        else obj[destination].unshift(...removedFromColumn);

        return obj;
    }, stack);

    return newStack;
}

export function getTopBoxes(stack: {}) {
    return Object.keys(stack).reduce((acc, entry) => {
        return acc + stack[entry][0];
    }, '');
}

const input = readTextFile({
    folder: '2022/day_05',
    name: 'crane',
});

console.log(puzzle1(input));
console.log(puzzle2(input));
