// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Get it from the local storage
  var itemCountTotal = localStorage.getItem("itemCount");

  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");

      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );

  //DOM Variables
  var total = document.getElementById("total");
  var itemNumber = document.getElementById("itemNumber");
  total.innerText = "$" + itemCountTotal * 28.99;
  itemNumber.innerText = itemCountTotal;
})();
