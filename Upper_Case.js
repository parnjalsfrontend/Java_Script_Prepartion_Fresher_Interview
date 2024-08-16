function toTitleCase(str) {
    return str
        .toLowerCase() // Convert the entire string to lowercase
        .split(' ') // Split the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words back into a single string
}

// Example usage:
const sentence = "hello world! this is a title case example.";
const titleCased = toTitleCase(sentence);
console.log(titleCased); // Output: "Hello World! This Is A Title Case Example."
