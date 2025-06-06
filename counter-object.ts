const counter = {
    count: 0,

    increment() {
        this.count += 1;
    },

    reset() {
        this.count = 0;
    },

    log(label: string) {
        console.log(`Label: ${label}, Count: ${this.count}`);
    },
};

counter.increment();
counter.increment();
counter.log("Number of Notebooks");
counter.reset();
counter.log("Number of Notebooks");