function calculateSplit() {
    const bill = parseFloat(document.getElementById('bill').value);
    const tip = parseFloat(document.getElementById('tip').value) || 0;
    const people = parseInt(document.getElementById('people').value);
    const resultDiv = document.getElementById('result');
  
    if (isNaN(bill) || isNaN(people) || people <= 0) {
      resultDiv.textContent = 'Please enter valid inputs.';
      resultDiv.style.color = 'red';
      return;
    }
  
    const tipAmount = (tip / 100) * bill;
    const total = bill + tipAmount;
    const perPerson = total / people;
  
    resultDiv.textContent = `Each person pays: ₹${perPerson.toFixed(2)}`;
    resultDiv.style.color = '#4a148c';
  }