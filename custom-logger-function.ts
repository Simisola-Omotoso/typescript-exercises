type User = {
    name: string;
};

let user1: User = {
    name: "Simi"
};

function logger(this: User, message: string) {
    console.log(`${this.name}: ${message}`);
}

logger.call(user1, "Hi.");
logger.apply(user1, ["How are you doing?"]);
const bound = logger.bind(user1);
bound("I'm doing well.");