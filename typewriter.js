const sentence = "hello there from lighthouse labs";
let i = 0;
for (const char of sentence) {
  ++i;
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, 50 * i);// delay 50ms


}
setTimeout(() => {
  // print the \n here
  process.stdout.write('\n');
}, 50 * (i + 1));



