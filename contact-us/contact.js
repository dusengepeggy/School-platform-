document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var fullName = document.querySelector('input[name=""]').value;
    var email = document.querySelector('input[type="email"]').value;
    var message = document.querySelector('textarea').value;
    if (fullName === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
    } else {
      alert('Form submitted successfully!');
      // Reset the form
      this.reset();
    }
   });