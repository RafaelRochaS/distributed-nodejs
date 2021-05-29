const fetch = require('node-fetch')

async function get() {
  const result = await fetch('http://localhost:3000/api')
  console.log(result.text());
  console.log(typeof result.text());
}

get();