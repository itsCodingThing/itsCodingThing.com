export function random4DigitGen() {
    return Math.floor(1000 + Math.random() * 9000);
}

export function wrap(min: number, max: number, v: number) {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}
