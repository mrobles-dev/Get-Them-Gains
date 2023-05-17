const waterFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the water form
  const date = document.querySelector('#waterDate').value.trim();
  const ounces = document.querySelector('#ounces').value.trim();

  if (date && ounces) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/water', {
      method: 'POST',
      body: JSON.stringify({ date, ounces }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, show the message below
      console.log('Water entry added successfully!');
    } else {
      // If there is an error, display the error message
      const errorData = await response.json();
      console.error(errorData);
    }
  }
};

document
  .querySelector('.water-form')
  .addEventListener('submit', waterFormHandler);
