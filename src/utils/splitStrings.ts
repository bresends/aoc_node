export function splitOnLineBreak(string: string) {
    return string.split(/\r?\n/);
}

export function splitOnEmptyLine(string: string) {
    return string.split('\n\n');
}
