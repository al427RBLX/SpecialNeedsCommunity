const axios = require('axios');

async function searchGitHubJS(query) {
  try {
    const response = await axios.get('https://api.github.com/search/repositories', {
      params: {
        q: `${query} language:javascript`,
        sort: 'stars',
        order: 'desc'
      }
    });
    return response.data.items;
  } catch (error) {
    console.error('Error searching GitHub:', error);
  }
}

searchGitHubJS('react').then(results => console.log(results));
