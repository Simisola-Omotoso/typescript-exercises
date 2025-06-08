function range(start: number, end: number) {
    return {
        [Symbol.iterator]() {
            let current = start;

            return {
                next() {
                    if (current <= end) {
                        return { value: current++, done: false };
                    } else {
                        return { value: undefined, done: true };
                    }
                }
            };
        }
    };
}

for (const num of range(3,6)) {
    console.log(num);
}