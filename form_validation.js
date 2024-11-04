function validateForm() {
    const studentName = document.getElementById('studentName').value;
    const parentsName = document.getElementById('parentsName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const enrollmentClass = document.getElementById('enrollmentClass').value;
    const caste = document.getElementById('caste').value;
    const gender = document.getElementById('gender').value;

    let valid = true;

    // Clear previous error messages
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.remove());

    // Validation
    if (!studentName) {
        valid = false;
        showError('studentName', 'Student name is required.');
    }
    if (!parentsName) {
        valid = false;
        showError('parentsName', 'Parent\'s name is required.');
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        valid = false;
        showError('phone', 'Please enter a valid 10-digit phone number.');
    }
    if (!email) {
        valid = false;
        showError('email', 'Email ID is required.');
    }
    if (!enrollmentClass) {
        valid = false;
        showError('enrollmentClass', 'Please select an enrollment class.');
    }
    if (!caste) {
        valid = false;
        showError('caste', 'Please select a caste.');
    }
    if (!gender) {
        valid = false;
        showError('gender', 'Please select a gender.');
    }

    return valid; // Only submit if valid
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    const error = document.createElement('div');
    error.className = 'error';
    error.textContent = message;
    element.parentNode.insertBefore(error, element.nextSibling);
}
