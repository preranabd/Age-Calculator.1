function calculateAge() {

    const dobInput = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (dobInput === "") {
        result.innerHTML = "Please enter your date of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {
        result.innerHTML = "Date of birth cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `
        You are<br><br>
        ${years} Years,
        ${months} Months,
        ${days} Days old
    `;
}

function resetCalculator() {
    document.getElementById("dob").value = "";
    document.getElementById("result").innerHTML = "";
}