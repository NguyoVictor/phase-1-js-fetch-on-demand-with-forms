const init = () => {
  const formInput = document.querySelector("form");
  formInput.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("form #searchByID");
    console.log(input.value);
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((res) => res.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        console.log(data.title);
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
