document.getElementById("phnplus").addEventListener("click", function () {
  const newphoneplus = getInputvaluebyID("phoneinput", true);
  phonertaka(newphoneplus);
  calculateSubtotal();
});
document.getElementById("phnminus").addEventListener("click", function () {
  const newphoneminus = getInputvaluebyID("phoneinput", false);
  phonertaka(newphoneminus);
  calculateSubtotal();
});
