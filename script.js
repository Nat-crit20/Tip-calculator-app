const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  for (const pair of data.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`);
  }
});
