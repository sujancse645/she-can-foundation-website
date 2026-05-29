const fs = require('fs');

async function fetchImages() {
  try {
    const res = await fetch('https://shecanfoundation.org/');
    const html = await res.text();
    const regex = /<img[^>]+src="([^">]+)"/gi;
    let match;
    const urls = new Set();
    while ((match = regex.exec(html)) !== null) {
      let url = match[1];
      if (url.startsWith('/')) {
        url = 'https://shecanfoundation.org' + url;
      }
      if (url.match(/\.(jpeg|jpg|gif|png|webp|avif)$/i)) {
        urls.add(url);
      }
    }
    console.log(Array.from(urls).join('\n'));
  } catch (error) {
    console.error(error);
  }
}

fetchImages();
