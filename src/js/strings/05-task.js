// Задание:
// Преобразуйте регистр первого символа строки из нижнего регистра в верхний.
const str = "string not starting with capital";
const result = str.charAt(0).toUpperCase() + str.slice(1); // тут ваш код вместо null

console.log(result); // "String not starting with capital"
