document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    console.log(form.username.value);
    console.log(form.email.value);
    const mobileNumber = form.mobile.value;
    console.log("the mobile number is " + mobileNumber);
    if (mobileNumber == NaN) {
      alert("you have entered invalid number");
    }

    document
      .getElementById("email")
      .addEventListener("input", function (event) {
        const emailElement = event.target;
        if (emailElement.validity.typeMistmatch) {
          emailElement.setCustomValidity("Please enter an email address");
          emailElement.reportValidity;
        } else {
          emailElement.setCustomValidity("");
        }
      });
  });

  document.addEventListener("click", function () {
    console.log(document.getElementById("outside").value);
  });
});
