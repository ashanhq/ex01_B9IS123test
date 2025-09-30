// function check() {
  //  const weightInput = document.getElementById('weight').value;
    //const weight = parseFloat(weightInput);

   // if (isNaN(weight)) {
     //   alert("Please enter a valid number for baggage weight.");
      //  return;
   // }

   // if (weight > 15) {
     //   alert("Overweight baggage! (" + weight + " kg)");
  //  } else {
    //    alert("Baggage weight is OK. (" + weight + " kg)");
   // }
//} 


const LIMIT = 20; // allowed baggage weight

        let check = () => {
            let weight = parseInt(document.getElementById('weight').value) || 0;
            alert("Checking baggage weight: " + weight + " kg");

            if (weight > LIMIT) {
                let overLimit = weight - LIMIT;
                alert("Overweight by " + overLimit + " kg. Please remove some baggage.");

                // show input + button, pre-fill with over-limit
                document.getElementById('removed').style.display = 'block';
                document.getElementById('remB').style.display = 'block';
                document.getElementById('removed').value = overLimit;
            } else {
                alert("Weight is OK. You may proceed.");
                // hide input + button
                document.getElementById('removed').style.display = 'none';
                document.getElementById('remB').style.display = 'none';
            }
        }

        let remove = () => {
            let currentWeight = parseInt(document.getElementById('weight').value) || 0;
            let toRemove = parseInt(document.getElementById('removed').value) || 0;

            if (toRemove <= 0) {
                alert("Enter a valid amount to remove.");
                return;
            }

            let newWeight = currentWeight - toRemove;
            if (newWeight < 0) newWeight = 0;

            document.getElementById('weight').value = newWeight;
            alert("Removed " + toRemove + " kg. New weight: " + newWeight + " kg");

            if (newWeight <= LIMIT) {
                alert("Weight is now OK. You may proceed.");
                document.getElementById('removed').style.display = 'none';
                document.getElementById('remB').style.display = 'none';
            }
        }
