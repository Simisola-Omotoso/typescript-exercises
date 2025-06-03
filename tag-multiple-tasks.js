function tagTask(label) {
    var tags = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        tags[_i - 1] = arguments[_i];
    }
    return {
        label: label,
        tags: tags,
    };
}
var result = tagTask("Do laundry", "home", "urgent", "weekend");
console.log(result);
// result should be: { label: "Do laundry", tags: ["home", "urgent", "weekend"] }
