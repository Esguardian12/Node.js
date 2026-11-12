const { createServer } = require('node:http');
const fs = require('node:fs/promises'); // Import the File System module

const hostname = '127.0.0.1';
const port = 3000;

// Mark your request handler as an 'async' function so you can use 'await' inside it
const server = createServer(async (req, res) => {
  // Normalize the URL path by removing trailing slashes
  const path = req.url.replace(/\/$/, '') || '/';
  const method = req.method;

  // 1. ROUTING: Text / Web Page Route
  if (path === '/' && method === 'GET') {
    try {
      const visitLog = `Visitor landed at ${new Date().toISOString()}\n`;

      // 'appendFile' creates the file if it doesn't exist, or adds to it if it does
      await fs.appendFile('./visits.txt', visitLog);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Welcome! Your visit has been logged to a local file.');
    } catch(err) {
      res.statusCode = 500;
      res.end('Server Error writing logs.');
    }
  }

  // 2. API ENDPOINT: JSON Data Route (Added leading slash here)
  else if (path === '/api/user' && method === 'GET') {
    try {
      // Read the file asynchronously
      const data = await fs.readFile('.visits.txt', 'utf8');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Here is the historical server log:\n\n${data}');
    } catch (err) {
      // If the file doesn't exist yet because nobody visited '/', handle the error smoothly
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('No log file found yet. Go visit the homepage first to generate one!');
    }
  }

  // 3. FALLBACK: 404 Route for anything else
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Error: The requested route or method does not exist.');
  } 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Check out your logs dynamically at http://${hostname}:${port}/logs`);
});
