document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let isValid = true;
    const fields = ['name', 'city', 'speciality', 'email', 'phone', 'id'];
    let firstInvalidField = null;

    fields.forEach(function(field) {
        const inputElement = document.getElementById(field);
        if (inputElement.value.trim() === '') {
            if (!firstInvalidField) {
                firstInvalidField = inputElement;
            }
            isValid = false;
        }
    });

    if (!isValid) {
        alert('  please fill all fields  .');
        firstInvalidField.focus(); 
        event.preventDefault(); 
    }
});