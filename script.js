// script.js
// smooth-scroll.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
// Listen for the form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get values from form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Store form data in local storage (you could use an array to store multiple messages)
    const contactData = {
        name: name,
        email: email,
        message: message
    };

    // Retrieve any previous messages stored in localStorage and append the new one
    let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    messages.push(contactData);

    // Save the updated messages array back to localStorage
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    // Show a confirmation message to the user
    document.getElementById('confirmation').innerHTML = "Thank you for contacting us, " + name + "! Your message has been stored.";
    
    // Optionally, you can clear the form after submission
    document.getElementById('contact-form').reset();
});
