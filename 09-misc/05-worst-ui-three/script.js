/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const input1 = document.getElementById("part-one");
const input2 = document.getElementById("part-two");
const input3 = document.getElementById("part-three");
const input4 = document.getElementById("part-four");
const button1 = document.getElementById("fix-part-one");
const button2 = document.getElementById("fix-part-two");
const button3 = document.getElementById("fix-part-three");
const button4 = document.getElementById("fix-part-four");
const phone = document.getElementById("target");
const inputs = document.querySelectorAll("input");
const isDisabled = (input, button) => {
  if (input.disabled) {
    button.innerHTML = "Stop";
    input.disabled = false;
  } else {
    button.innerHTML = "Change";
    input.disabled = true;
  }
};
const changeParts = (button, input, part) => {
  const datamin = input.getAttribute("data-min");
  const datamax = input.getAttribute("data-max");
  console.log(datamax, datamin);
  if (datamax >= input.value) {
    console.log(input.value);
    part = input.value;
  }
  return part;
};
(() => {
  // your code here
  inputs.forEach((input) => {
    input.addEventListener("input", ({ target: { value } }) => {
        let maxLength = input.getAttribute('data-max').length
      if (value.length >= input.getAttribute(maxLength)) {
        input.value = value.substring(0, maxLength);
      }
    });
  });

  let part1 = phone.innerHTML.substring(1, 4);
  let part2 = phone.innerHTML.substring(4, 6);
  let part3 = phone.innerHTML.substring(6, 8);
  let part4 = phone.innerHTML.substring(8, 10);

  button1.addEventListener("click", () => {
    isDisabled(input1, button1);

    part1 = changeParts(button1, input1, part1);
    phone.innerHTML = "+" + part1 + part2 + part3 + part4;
  });
  button2.addEventListener("click", () => {
    isDisabled(input2, button2);
    part2 = changeParts(button2, input2, part2);
    phone.innerHTML = "+" + part1 + part2 + part3 + part4;
  });
  button3.addEventListener("click", () => {
    isDisabled(input3, button3);
    part3 = changeParts(button3, input3, part3);
    phone.innerHTML = "+" + part1 + part2 + part3 + part4;
  });
  button4.addEventListener("click", () => {
    isDisabled(input4, button4);
    part4 = changeParts(button4, input4, part4);
    phone.innerHTML = "+" + part1 + part2 + part3 + part4;
  });
})();
