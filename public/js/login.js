const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    console.log('test');
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/tracker');
    } else {
      alert(response.statusText);
    
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


  window.onload = function() {
  setTimeout(function() {
    var delayedImage = document.querySelector('.delayed-image');
    delayedImage.classList.add('fade-in');
  }, 300);
};