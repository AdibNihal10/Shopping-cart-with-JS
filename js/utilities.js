function getInputvaluebyID(iddao, isIncrease) {
  const inputfield = document.getElementById(iddao);
  const ivalue = inputfield.value;
  const inter = parseInt(ivalue);
  let newnumber;
  if (isIncrease === true) {
    newnumber = inter + 1;
  } else {
    newnumber = inter - 1;
  }

  inputfield.value = newnumber;
  return newnumber;
}

function takarman(taka) {
  const totalmoney = taka * 59;
  const takarvalue = document.getElementById("Taka");

  takarvalue.innerText = totalmoney;
  return totalmoney;
}

function phonertaka(paisa) {
  const totalmoneyphone = paisa * 1219;
  const totaltaka = document.getElementById("phonetaka");

  totaltaka.innerText = totalmoneyphone;
  return totalmoneyphone;
}

function totaltaka(elementid) {
  const takadanao = document.getElementById(elementid);
  const takaurao = takadanao.innerText;
  const floatbanao = parseFloat(takaurao);
  takadanao.innerText = floatbanao;
  return floatbanao;
}
function calculateTax(elementid1, value) {
  const totalidnao = document.getElementById(elementid1);
  totalidnao.innerText = value;
}
function calculateSubtotal() {
  const takarman = totaltaka("Taka");
  const casetaka = totaltaka("phonetaka");
  //total
  const totaltakahobe = takarman + casetaka;

  calculateTax("subtotal", totaltakahobe);
  const totaltax = (totaltakahobe * 0.1).toFixed(2);
  const taxervalue = parseFloat(totaltax);
  calculateTax("tax", taxervalue);
  const subtotalerman = taxervalue + totaltakahobe;
  calculateTax("total", subtotalerman);
}
