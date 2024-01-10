// Ensure the initial values are set when the page loads
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Put some default values in the inputs and call a function to calculate the current monthly payment
function setupInitialValues() {
  if (document.getElementById("loan-amount") && document.getElementById("loan-years") && document.getElementById("loan-rate")) {
    document.getElementById("loan-amount").value = '10000';
    document.getElementById("loan-years").value = '10';
    document.getElementById("loan-rate").value = '5.5';
    update();
  }
};

// Update the monthly payment based on the current values from the UI
function update() {
  if (document.getElementById("loan-amount") && document.getElementById("loan-years") && document.getElementById("loan-rate")) {
    const currentValues = getCurrentUIValues();
    const monthlyPayment = calculateMonthlyPayment(currentValues);
    updateMonthly(monthlyPayment);
  }
};

// Calculate the monthly payment given an object of values (amount, years, rate),
// and return the output as a string with 2 decimal places.
function calculateMonthlyPayment(values) {
  // Destructure values
  const { amount, years, rate } = values;

  // Convert the annual rate to a monthly rate (decimal)
  const monthlyRate = rate / 100 / 12;

  // Convert the term in years to the number of monthly payments
  const numberOfPayments = years * 12;

  // Calculate the monthly payment
  const monthlyPayment = 
    amount * monthlyRate / (1 - Math.pow((1 + monthlyRate), -numberOfPayments));

  // Return the monthly payment as a string rounded to 2 decimal places
  return monthlyPayment.toFixed(2);
};

// Update the UI to show the monthly payment value.
function updateMonthly(monthly) {
  const monthlyPaymentDisplay = document.getElementById("monthly-payment");
  monthlyPaymentDisplay.innerText = `$${monthly}`;
};
