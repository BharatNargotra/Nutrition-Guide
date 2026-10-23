const SITE_URL = 'https://nutriguide.example.com'
const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/macronutrients/', priority: '0.9', changefreq: 'monthly' },
  { url: '/micronutrients/', priority: '0.9', changefreq: 'monthly' },
  { url: '/diet-types/', priority: '0.9', changefreq: 'monthly' },
  { url: '/meal-planning/', priority: '0.8', changefreq: 'monthly' },
  { url: '/gut-health/', priority: '0.8', changefreq: 'monthly' },
  { url: '/sports-nutrition/', priority: '0.8', changefreq: 'monthly' },
  { url: '/weight-management/', priority: '0.8', changefreq: 'monthly' },
  { url: '/supplements/', priority: '0.8', changefreq: 'monthly' },
  { url: '/food-science/', priority: '0.7', changefreq: 'monthly' },
  { url: '/glossary/', priority: '0.6', changefreq: 'yearly' },
]

function SitemapXML() {}
export default SitemapXML

export async function getServerSideProps({ res }) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  res.setHeader('Content-Type', 'application/xml')
  res.write(sitemap)
  res.end()
  return { props: {} }
}
