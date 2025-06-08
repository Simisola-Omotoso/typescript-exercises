function range(start, end) {
    var _a;
    return _a = {},
        _a[Symbol.iterator] = function () {
            var current = start;
            return {
                next: function () {
                    if (current <= end) {
                        return { value: current++, done: false };
                    }
                    else {
                        return { value: undefined, done: true };
                    }
                }
            };
        },
        _a;
}
console.log(range(3, 6));
