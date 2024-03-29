const logout = async (event) => {
  event.preventDefault();

  console.log('attempting logout');

  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};





// const logout = async (event) => {
//   console.log('attempting logout');

//   const response = await fetch('/api/users/logout', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace('/');
//   } else {
//     alert(response.statusText);
//   }
// };

// document.querySelector('#logout').addEventListener('click', logout);
