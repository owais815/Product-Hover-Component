let container = document.getElementById("container");
for (let i = 50; i >= -20; i--) {
  let span = document.createElement("span");
  span.style.setProperty("--i", i);
  container.appendChild(span);
}
