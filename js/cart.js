document.getElementById("btncase").addEventListener("click", function () {
  const takvalue = getInputvaluebyID("caseinput", true);

  takarman(takvalue);
  calculateSubtotal();
});

document.getElementById("btnminus").addEventListener("click", function () {
  const mittha = getInputvaluebyID("caseinput", false);

  takarman(mittha);
  calculateSubtotal();
});
