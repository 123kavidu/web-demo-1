addition = () =>{
    
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const total = Number(num1) + Number(num2);
    console.log(total);

    document.getElementById('result').innerText= total
}

subtraction =() =>{
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const subtraction = Number(num1) - Number(num2);
  console.log(subtraction);
}

multiply = () =>{
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const multifly = Number(num1) * Number(num2);
  console.log(multifly);
}

divide =() =>{
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const divide = Number(num1) / Number(num2);
  console.log(divide);
}