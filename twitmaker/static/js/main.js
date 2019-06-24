document.addEventListener('DOMContentLoaded', function () {
  let form = document.querySelector('form');
  let tweetList = document.querySelector('.tweets');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let formData = new FormData(this);
    axios.post(
      this.action,
      formData,
    ).then(function (response) {
      console.log(response);
      let createdAt = new Date(response.data.created_at);
      let message = response.data.message;
      let newTweet = document.createElement('li');
      newTweet.className = 'tweet';
      newTweet.innerHTML = `<time>${createdAt}</time><p>${message}</p>`;
      tweetList.appendChild(newTweet);
    }).catch(function (error) {
      console.log(error);
    });
  });
});