const express = require('express');
const { Octokit } = require('octokit');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize Octokit with the GitHub token
const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
});

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Get repository contents
app.get('/api/repos/:owner/:repo/contents/:path(*)', async (req, res) => {
  try {
    const { owner, repo, path } = req.params;
    const response = await octokit.rest.repos.getContent({
      owner,
      repo,
      path: path || '',
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search repositories
app.get('/api/search/repositories', async (req, res) => {
  try {
    const { q } = req.query;
    const response = await octokit.rest.search.repos({
      q,
      per_page: 10,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get repository information
app.get('/api/repos/:owner/:repo', async (req, res) => {
  try {
    const { owner, repo } = req.params;
    const response = await octokit.rest.repos.get({
      owner,
      repo,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`GitHub server listening at http://localhost:${port}`);
}); 