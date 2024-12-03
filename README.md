<<<<<<< HEAD
# @edu-able/server-github

GitHub server implementation for Edu-able platform.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with the following variables:
```
PORT=3000
GITHUB_PERSONAL_ACCESS_TOKEN=your_github_token
```

3. Start the server:
```bash
npm start
```

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/repos/:owner/:repo/contents/:path` - Get repository contents
- `GET /api/search/repositories?q=query` - Search repositories
- `GET /api/repos/:owner/:repo` - Get repository information

## Development

Run in development mode with hot reload:
```bash
npm run dev
```

## Publishing

1. Login to GitHub packages:
```bash
npm login --registry=https://npm.pkg.github.com
```

2. Publish the package:
```bash
npm publish
``` 
=======
# server-github
>>>>>>> 5c716b802ef8b036aa2ae766ea0318e3d80ff039
