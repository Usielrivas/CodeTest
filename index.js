function main() {
  const n1 = 12;
  const n2 = 22;
  console.log(n1 + n2);
  logic(n1, n2);
  let operation_one = multiplication(n1, n2);
  let operation_two = division(n2, n1);
  show(operation_one);
  show(operation_two);
  recursion("something");
  fnArrow();
  fnArrowTwo();
  printOne("hi", 8);
}
main();
const printOne = (txt, num) => {
  console.log(1, txt, num);
};
function recursion(data) {
  let txt = "something";
  if (txt === data) {
    return "stop";
  } else {
    show("To infinity");
    main();
  }
}
function logic(data1, data2) {
  const result = data1 < data2;
  if (result) {
    sum(data1, data2);
  } else {
    subtraction(data1, data2);
  }


  if (result) {
    sum(data1 + 2, data2 + 2);
  }

}
function sum(a, b) {
  const result = a + b;
  show(result);
  return result;
}
function subtraction(a, b) {
  const result = a - b;
  show(result);
  return result;
}
function multiplication(a, b) {
  const result = a * b;
  show(result);
  return result;
}
/*one line
two lines
three lines*/
function division(a, b) {
  const result = a / b;
  show(result);
  return result;
}
// one line
function show(data) {
  console.log(data);
}
function fnArrow() {
  [].map(i => i * 2);
}
function fnArrowTwo() {
  [].map((i) => {
    show("hello", i);
    return \`\${i + " test"} RESULT \${2 + 4} now \${i}\`;
  });
}
