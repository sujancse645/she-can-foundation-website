const fs = require('fs');
const path = require('path');

const sections = [
  'hero', 'trust', 'about', 'architecture', 'command-center',
  'fall-detection', 'environmental', 'obstacle-detection',
  'gps-command', 'incident-response', 'ai-intelligence',
  'digital-twin', 'hardware-showcase', 'real-time-integration',
  'industries', 'analytics', 'features', 'testimonials', 'faq',
  'contact', 'footer'
];

const dir = path.join('src', 'components', 'sections');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

sections.forEach(name => {
  const pascal = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  const content = `export function ${pascal}Section() {
  return (
    <section id="${name}" className="min-h-screen py-20 flex items-center justify-center border-b border-white/10">
      <h2 className="text-4xl font-bold">${pascal} Section</h2>
    </section>
  );
}`;
  fs.writeFileSync(path.join(dir, name + '.tsx'), content);
});
console.log('Scaffold complete');
