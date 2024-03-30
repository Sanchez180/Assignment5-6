function convert() {
  //getting values of element
  var input1 = document.getElementById(`input1`).value;
  var select1 = document.getElementById(`select1`).value;
  var input2 = document.getElementById(`input2`).value;
  var select2 = document.getElementById(`select2`).value;

  //formular 1 usd = 1.35 cad
  let rate = 1.35;

  if (select1 == "usd") {
    if (select2 == "usd") {
      let cadsolved = parseFloat(input1);
      document.getElementById(`input2`).value = cadsolved.toFixed(3);
    }
    if (select2 == "cad") {
      let cadsolved = parseFloat(input1) * rate;
      document.getElementById(`input2`).value = cadsolved.toFixed(3);
    }
  }else{
    if (select2 == "cad") {
      let cadsolved = parseFloat(input1);
      document.getElementById(`input2`).value = cadsolved.toFixed(3);
    }
    if (select2 == "usd") {
      let cadsolved = parseFloat(input1) /  rate;
      document.getElementById(`input2`).value =cadsolved.toFixed(3);
    }
  }
}

