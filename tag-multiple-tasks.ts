function tagTask(label: string, ...tags: string[]): { label: string; tags: string[] } {
  return {
    label: label,
    tags: tags,
  }
}

const result = tagTask("Do laundry", "home", "urgent", "weekend");

console.log(result);
// result should be: { label: "Do laundry", tags: ["home", "urgent", "weekend"] }