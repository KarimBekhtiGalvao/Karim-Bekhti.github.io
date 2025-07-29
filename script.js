const roles = ["Developer", "Engineer", "Designer", "Problem Solver"];
let index = 0;
const el = document.getElementById("sliding-text");

setInterval(() => {
  index = (index + 1) % roles.length;
  el.textContent = roles[index];
}, 3000);
