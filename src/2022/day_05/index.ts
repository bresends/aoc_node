import fs from 'fs';
import path from 'path';

function spliceArrayIntoChunks<T>(arr: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        chunks.push(chunk);
    }
    return chunks;
}

function getStacks(rawStacks: string) {
    const splitColumnsRegex = /(\[[A-Z]\]|\s{4})/g;
    const lastColumnNumber = /(\d+)(?!.*\d)/g;

    const splitItems = rawStacks.match(splitColumnsRegex);
    const lastNumber = Number(rawStacks.match(lastColumnNumber));
    const columns = spliceArrayIntoChunks(splitItems, lastNumber).reduce(
        (obj, row) => {
            row.forEach((element, columnIndex) => {
                if (!obj[columnIndex + 1]) obj[columnIndex + 1] = [];
                if (element.trim()) obj[columnIndex + 1].push(element);
            });

            return obj;
        },
        {}
    );

    return columns;
}

function moveStacks(stack: {}, rawInstructions: string) {
    const instructions = rawInstructions
        .split('\n')
        .map((instruction) => instruction.match(/\d+/g));

    const newStack = instructions.reduce((obj, instruction) => {
        const numberOfMoves = Number(instruction[0]);
        const origin = Number(instruction[1]);
        const destination = Number(instruction[2]);

        // console.log(`${origin} Before: `, obj[origin]);
        // console.log(`${destination} Before: `, obj[destination]);

        const removedItems = obj[origin].splice(0, numberOfMoves);
        obj[destination].unshift(...removedItems);

        // console.log(`${origin} After: `, obj[origin]);
        // console.log(`${destination} After: `, obj[destination], '\n');
        return obj;
    }, stack);

    return newStack;
}

function puzzle1() {
    fs.readFile(
        path.resolve(__dirname, './crane.txt'),
        'utf-8',
        (err, data) => {
            if (err) throw new Error('Could not read the file');
            const [crates, instructions] = data.split('\n\n');
            const stacks = getStacks(crates);
            const organizedStack = moveStacks(stacks, instructions);
            const topKeys = Object.entries(organizedStack)
                .map((key) => key[1][0])
                .map((item) => item.match(/[A-Z]/)[0])
                .join('');
            console.log(topKeys);
        }
    );
}

puzzle1();
