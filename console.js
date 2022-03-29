console.log("Hello World!");
console.warn("Hello World!");
console.error("Hello Wrold!");
console.info("Hello World!");
console.debug("Hello World!");

let person = "Ali";
console.log("Hello %c", person);

console.log("Hello %cWorld!", "color: red; font-size: 44px;");

for (let i = 1; i < 10000; i++) {
    console.group("even numbers")
    console.log("Is this number even?", i % 2 === 0);
    console.log("Is this number even and multiple of 10?", i % 2 === 0 && i % 10 === 0);
    console.group("Which number?")
    console.log(i);
    console.groupEnd();
    console.groupEnd();
}


console.time("EndFetch")
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
console.timeEnd("EndFetch")

let people = [["Will", "Smith"], ["Chris", "Rock"]];
console.table(people);