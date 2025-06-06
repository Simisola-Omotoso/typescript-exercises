var counter = {
    count: 0,
    increment: function () {
        this.count += 1;
    },
    reset: function () {
        this.count = 0;
    },
    log: function (label) {
        console.log("Label: ".concat(label, ", Count: ").concat(this.count));
    },
};
counter.increment();
counter.increment();
counter.log("Number of Notebooks");
counter.reset();
counter.log("Number of Notebooks");
