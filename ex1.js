function check() {
    const weightInput = document.getElementById('weight').value;
    const weight = parseFloat(weightInput);

    if (isNaN(weight)) {
        alert("Please enter a valid number for baggage weight.");
        return;
    }

    if (weight > 15) {
        alert("Overweight baggage! (" + weight + " kg)");
    } else {
        alert("Baggage weight is OK. (" + weight + " kg)");
    }
}
