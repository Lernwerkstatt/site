function checker() {
  if (document.getElementById("contact-check").checked) {
    document
      .getElementById("submit-button")
      .classList.replace("btn-primary", "btn-success");
    document.getElementById("submit-button").disabled = false;
  } else {
    document
      .getElementById("submit-button")
      .classList.replace("btn-success", "btn-primary");
    document.getElementById("submit-button").disabled = true;
  }
}
