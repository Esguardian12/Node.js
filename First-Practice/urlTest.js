const myURL = new URL('https://example.com');
// 1. Basic URL parsing
console.log('Pathname:', myURL.pathname);

// 2. Using searchParams on that exact same URL object
console.log('Color:', myURL.searchParams.get('color'));  // 'blue'
console.log('Size:', myURL.searchParams.get('size'));    // '10';

// 3. Modifying parameters
myURL.searchParams.set('color', 'red');
myURL.searchParams.set('inStock', 'true');

console.log('Updated URL:', myURL.href);

// console.log('Protocol:', myURL.protocol); // Output: 'https:';
// console.log('Host:', myURL.host);         // 'example.com.8080';
// console.log('Hostname:', myURL.hostname); // 'example.com';
// console.log('Port:', myURL.port);         // '8080';
// console.log('Pathname:', myURL.pathname); // '/path/to/resource';
// console.log('Search:', myURL.search);     // '?color=blue&size=10';
// console.log('Hash:', myURL.hash);         // '#reviews';
