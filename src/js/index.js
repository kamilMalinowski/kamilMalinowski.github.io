import "../scss/main.scss";

console.log("Hi, I'm Kamil - I'm glad you're here :).");

fetch("https://api.github.com/users/kamilMalinowski/repos?sort=created")
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const repositoryList = document.querySelector(".projects-grid--js");
      const { description, homepage, name, html_url } = repo;
      const myTemplate = `
      <article class="project">
            <div class="project__window">
              <span class="project__dot"></span>
              <span class="project__dot"></span>
              <span class="project__dot"></span>
            </div>
            <div class="project__content">
              <img src="https://kamilMalinowski.github.io/ghicon.svg" alt="" />
              <h3 class="project__grid project__title">
                <span class="project__label">project:</span
                ><span>${name}</span>
              </h3>
              <p class="project__grid">
                <span class="project__label">description:</span
                ><span
                  >${description}</span>
              </p>
              <p class="project__grid">
                <span class="project__label">demo:</span
                ><span
                  ><a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project__link"
                    href="${homepage}"
                    title="${name}"
                    >see here</a
                  >
                </span>
              </p>
              <p class="project__grid">
                <span class="project__label">github:</span
                ><span
                  ><a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project__link"
                    href="${html_url}"
                    title="${name}"
                    >source code</a
                  ></span
                >
              </p>
            </div>
          </article>
      `;
      if (description) {
        repositoryList.innerHTML += myTemplate;
      }
    }
  })
  .catch((error) => {
    console.log("nie udało się pobrać");
  });
