function getSalary () {
  let whour = document.getElementById('hours').value;
  let emName = document.getElementById('name').value;
  let idNum = document.getElementById('idNum').value;
  let normalPay = whour * 1000;
  let overTimePay = (whour - 4) * 200;
  
  document.getElementById("empName").innerHTML=`Employee: ${emName}`;
  document.getElementById("ovPayment").innerHTML=`Identification Number: ${idNum}`

  document.getElementById("salary").innerHTML=`Salary: ${normalPay}`;
  if(whour > 4) {
    document.getElementById('salary').innerHTML = `Salary: ${normalPay + overTimePay}`
  }
  

}

const refreshButton = document.querySelector('#submit2');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)