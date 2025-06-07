function* countdown(startingNum: number) {
    while (startingNum >= 0) {
        yield startingNum --;
    }
}

const newCountdown = countdown(21);
newCountdown.next();