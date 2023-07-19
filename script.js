
function calculatePAYETax(monthlyTaxablePay) {
    if (monthlyTaxablePay <= 24000) {
        return 0.1 * monthlyTaxablePay;
    } else if (monthlyTaxablePay <= 32333) {
        return 2400 + 0.25 * (monthlyTaxablePay - 24000);
    } else {
        return 6608 + 0.3 * (monthlyTaxablePay - 32333); 
    }
}

function displayPAYETax() {
    const monthlyTaxablePayInput = document.getElementById('monthly-taxable-pay');
    const annualTaxablePayInput = document.getElementById('annual-taxable-pay');
    const payeTaxOutput = document.getElementById('paye-tax');

    const monthlyTaxablePay = parseFloat(monthlyTaxablePayInput.value);
    const annualTaxablePay = parseFloat(annualTaxablePayInput.value);

    if (!isNaN(monthlyTaxablePay) && isNaN(annualTaxablePay)) {
        const annualTax = calculatePAYETax(annualTaxablePay);
        payeTaxOutput.textContent = `PAYE Tax: Ksh ${annualTax.toFixed(2)}`;
    } else {
        payeTaxOutput.textContent = 'Invalid input. Please enter valid numbers.';
    }
}

const calculatePAYEButton = document.getElementById('calculate-paye-button');
calculatePAYEButton.addEventListener('click', displayPAYETax);
