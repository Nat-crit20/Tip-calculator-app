const form = document.querySelector("form");

$("#other-field").focus(function () {
  $("#other").prop("checked", true);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  for (const pair of data.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`);
  }
});
