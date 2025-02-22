// Function to validate the form
function validateForm(event) {
    const errors = [];
    let isValid = true;

    // Get payment method selection
    const paymentMethod = document.getElementById("paymentMethod").value;
    const creditCardInput = document.getElementById("creditCardNumber");
    const paypalInput = document.getElementById("paypalUsername");

    // Validate credit card number if selected
    if (paymentMethod === "creditCard") {
        if (!creditCardInput.value.match(/^\d{16}$/)) {
            isValid = false;
            errors.push("Credit Card number must be exactly 16 digits.");
        }
    }

    // Validate PayPal username if selected
    if (paymentMethod === "paypal") {
        if (paypalInput.value.trim() === "") {
            isValid = false;
            errors.push("PayPal username is required.");
        }
    }

    // Show errors and prevent submission if invalid
    if (!isValid) {
        event.preventDefault();
        showErrors(errors);
    }
}

// Function to toggle payment details visibility
function togglePaymentDetails() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    const creditCardContainer = document.getElementById("creditCardContainer");
    const paypalContainer = document.getElementById("paypalContainer");

    // Hide both initially
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");

    // Remove required attributes
    document.getElementById("creditCardNumber").required = false;
    document.getElementById("paypalUsername").required = false;

    // Show the selected method
    if (paymentMethod === "creditCard") {
        creditCardContainer.classList.remove("hide");
        document.getElementById("creditCardNumber").required = true;
    } else if (paymentMethod === "paypal") {
        paypalContainer.classList.remove("hide");
        document.getElementById("paypalUsername").required = true;
    }
}

// Function to display error messages
function showErrors(errors) {
    const errorSection = document.querySelector(".errors");
    errorSection.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
}

// Event Listeners
document.getElementById("paymentMethod").addEventListener("change", togglePaymentDetails);
document.getElementById("checkoutForm").addEventListener("submit", validateForm);
