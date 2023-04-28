let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

wordfrequency = (x) => {
  let count = 0;
  x = x.split('');
  console.log(x);

  for (let i = 0, len = x.length; i < len; i++) {
    if (x[i] == "i") {
      count++;
    }
  }
  return count;
}
let i = "Subha Keerthi";
console.log(wordfrequency(i));
