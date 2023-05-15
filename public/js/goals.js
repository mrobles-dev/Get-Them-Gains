// const goalLink = document.querySelector('#goalLink');

// goalLink.addEventListener('click', (event) => {
//   event.preventDefault();

//   console.log('Goal link clicked');

//   const response = fetch('/api/users/goals');

//   response.then((res) => {
//     if (res.ok) {
//       document.location.replace('/goals');
//     } else {
//       alert('Failed to fetch goals data');
//     }
//   }).catch((err) => {
//     console.log(err);
//     alert('An error occurred');
//   });
// });


// const goalNavHandler = async () => {
//   const response = await fetch('/api/users/goals');

//   if (response.ok) {
//     document.location.replace('/goals');
//   } else {
//     alert('Failed to fetch goals data');
//   }
// };
