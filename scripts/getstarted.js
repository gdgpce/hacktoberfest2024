// Fetch data and initialize rendering
document.addEventListener('DOMContentLoaded', () => {
    fetchRepoData('data.json');
  });
  
  // Fetch the external JSON file
  const fetchRepoData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        renderAllCategories(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  };
  
  // Function to render all categories
  const renderAllCategories = (data) => {
    const repoCardsContainer = document.getElementById('repo-cards');
    Object.keys(data).forEach(category => {
      const sectionTitle = createSectionTitle(category);
      repoCardsContainer.appendChild(sectionTitle);
      renderCards(category, data[category], repoCardsContainer);
    });
  };
  
  // Function to create section title
  const createSectionTitle = (category) => {
    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('section-title');
    sectionTitle.textContent = category;
    return sectionTitle;
  };
  
  // Function to render cards for each repository
  const renderCards = (category, repos, container) => {
    repos.forEach(repo => {
      const card = createRepoCard(repo);
      container.appendChild(card);
    });
  };
  
  // Function to create a card for a single repository
  const createRepoCard = (repo) => {
    const card = document.createElement('div');
    card.classList.add('col-md-4');
    card.innerHTML = `
      <div class="card repo-card">
        <div class="card-header">
          <h5 class="card-title">${repo.name}</h5>
        </div>
        <div class="card-body">
          <p class="card-desc">${repo.description}</p>
          <p class = "card-tech" ><strong>Technologies : </strong> ${repo.languages.join(', ')}</p>
          <div class="card-link">
            <a href="${repo.url}" target="_blank" class="btn btn-primary">
              <img src="../img/github_white.svg" alt="GitHub Logo" class="github-logo">GitHub
            </a>
          </div>
        </div>
      </div>
    `;
    return card;
  };
  