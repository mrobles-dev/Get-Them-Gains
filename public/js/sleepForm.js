const sleepFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the sleep form
  const date = document.querySelector('#sleepDate').value.trim();
  const hours = document.querySelector('#hours').value.trim();

  if (date && hours) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/sleep', {
      method: 'POST',
      body: JSON.stringify({ date, hours }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, show the message below
      console.log('Sleep data submitted successfully!');
    } else {
      // If there is an error, display the error message
      const errorData = await response.json();
      console.error(errorData);
    }
  }
};

document
  .querySelector('.sleep-form')
  .addEventListener('submit', sleepFormHandler);


//Delayed Image

  window.onload = function() {
  setTimeout(function() {
    var delayedImage = document.querySelector('.delayed-image');
    delayedImage.classList.add('fade-in');
  }, 300);
};