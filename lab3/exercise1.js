const buffer_array = Buffer.from([8,6,7,5,3,0,9]);
const buffer_string = Buffer.from("I am a string!", "utf-8");

console.log(buffer_string.toString());
console.log(buffer_string.toString('hex'));
console.log(buffer_string);
const arr = [buffer_array, buffer_string];
console.log(Buffer.concat(arr));
console.log(Buffer.concat(arr).toJSON());


