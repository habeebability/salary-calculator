function getSalary () {
  let whour = document.getElementById('hours').value;
  let emName = document.getElementById('name').value;
  let idNum = document.getElementById('idNum').value;
  let normalPay = whour * 1000;
  let overTimePay = 0;
  
  document.getElementById("empName").innerHTML=`Employee: ${emName}`;
  
  document.getElementById("empID").innerHTML=`Identification Number: ${idNum}`;

  document.getElementById("salary").innerHTML=`Salary:     ${normalPay}`;
  if(whour > 4) {
    overTimePay = (whour - 4) * 200

  }
  document.getElementById('salary').innerHTML = `Salary: ${normalPay + overTimePay}`;
  document.getElementById("ovPayment").innerHTML=`Over time payment: ${overTimePay}`;

}

const refreshButton = document.querySelector('#submit2');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)
