function calculateNetPay() {
    var hoursWorked = parseFloat(document.getElementById('hours').value);
    var hourlyRate = parseFloat(document.getElementById('hourlyRate').value);

    if (!isNaN(hoursWorked) && !isNaN(hourlyRate)) {
        var grossPay = hoursWorked * hourlyRate;

        // Calculate federal and provincial taxes (combined rate for Toronto)
        var combinedTaxRate = 0.13;
        var tax = combinedTaxRate * grossPay;

        // Calculate net pay after tax deduction
        var netPay = grossPay - tax;

        document.getElementById('netPayResult').innerHTML =
            'GROSS PAY: $' + grossPay.toFixed(2) +
            '<br>TAX DEDUCTION: $' + tax.toFixed(2) +
            '<br>NET PAY (after tax): $' + netPay.toFixed(2);
    } else {
        document.getElementById('netPayResult').innerHTML = 'Please enter valid numeric values.';
    }
}
