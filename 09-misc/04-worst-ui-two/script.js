/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
const changeParts = (button,index, part) => {
  const datamin = button[index].getAttribute("data-min");
  const datamax = button[index].getAttribute("data-max");

  while (datamax > Number(button[index].innerHTML)) {
    const incrment = Number(button[index].innerHTML) + 1;
    button[index].innerHTML = incrment;
    part = incrment;
  }
  return part
};
(() => {
  // your code here
  const button = document.querySelectorAll("button");
  console.log(button.length);
  const phone = document.getElementById("target");
  console.log(phone.innerHTML);
  let part1 = phone.innerHTML.substring(1, 4);
  let part2 = phone.innerHTML.substring(4, 6);
  let part3 = phone.innerHTML.substring(6, 8);
  let part4 = phone.innerHTML.substring(8, 10);

  button[0].addEventListener("click", () => {
    part1 = changeParts(button, 0, part1);
    phone.innerHTML = '+' +part1 +part2 +part3 +part4
  });
  button[1].addEventListener("click", () => {
    part2 = changeParts(button, 1, part2);
    phone.innerHTML = '+' +part1 +part2 +part3 +part4
  });
  button[2].addEventListener("click", () => {
    part3 = changeParts(button, 2, part3);
    phone.innerHTML = '+' +part1 +part2 +part3 +part4
  });
  button[3].addEventListener("click", () => {
    part4 = changeParts(button, 3, part4);
    phone.innerHTML = '+' +part1 +part2 +part3 +part4
  });
 
})();
