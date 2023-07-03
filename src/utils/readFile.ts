import fs from 'fs';
import path from 'path';

export function readTextFile({
    folder,
    name,
}: {
    folder: string;
    name: string;
}) {
    try {
        const filePath = path.resolve(
            `src/${folder}/${name.trim()}.txt`
        );
        console.log(filePath);
        const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
        return data;
    } catch (error) {
        console.log('Error reading file. Check if file exists and the name.');
    }
}
