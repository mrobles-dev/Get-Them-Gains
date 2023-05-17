const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the register form
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const startingWeight = document.querySelector('#startingWeight').value.trim();


  if (name && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, startingWeight }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, take the user to goals page
      document.location.replace('/goals');   //TODO Will we use profile?
    } else {
      // If the request fails, display the error message
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
