const weightFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the sleep form
  const date = document.querySelector('#date').value.trim();
  const currentWeight = document.querySelector('#currentWeight').value.trim();
  const weightGoal = document.querySelector('#goalWeight').value.trim();


  if (date && currentWeight && weightGoal) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/weight', {
      method: 'POST',
      body: JSON.stringify({ date, currentWeight, weightGoal }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, show the message below
      console.log('Weight data submitted successfully!');
    } else {
      // If there is an error, display the error message
      const errorData = await response.json();
      console.error(errorData);
    }
  }
};

document
  .querySelector('.weight-form')
  .addEventListener('submit', weightFormHandler);
