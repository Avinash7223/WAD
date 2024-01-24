function validateForm() {
    // Validation for Name
    var nameInput = document.getElementById('name').value;
    if (!/^[a-zA-Z]{3,}$/.test(nameInput)) {
        alert('Name should contain at least 3 alphabets and no numerics or special characters.');
        return;
    }

    // Validation for Email
    var emailInput = document.getElementById('email').value;
    if (!/^\S+@\S+\.\S+$/.test(emailInput)) {
        alert('Invalid email format.');
        return;
    }

    // Validation for Password
    var passwordInput = document.getElementById('password').value;
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordInput)) {
        alert('Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return;
    }

    // Validation for Phone Number
    var phoneInput = document.getElementById('phone').value;
    if (!/^\d{10}$/.test(phoneInput)) {
        alert('Phone number should be numeric and equal to 10 numbers.');
        return;
    }

    // If all validations pass, you can submit the form or perform other actions.
    alert('Form submitted successfully!');
}
