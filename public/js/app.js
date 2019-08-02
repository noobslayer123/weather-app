const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.getElementById('message-1');
const message2 = document.getElementById('message-2');

weatherForm.addEventListener('submit', e => {
  e.preventDefault();

  const url = `/weather?address=${search.value}`;
  message1.textContent = 'Loading...';
  message2.textContent = '';

  fetch(url).then(res => {
    res.json().then(data => {
      if (data.error) {
        message1.textContent = data.error;
      } else {
        message1.textContent = data.location;
        message2.textContent = data.forecastData.summary;
      }
    });
  });
});
