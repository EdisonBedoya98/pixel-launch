export const config = {
  matcher: ["/en", "/es", "/"],
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // Fetch the static index.html from the deployment
  const response = await fetch(new URL("/index.html", request.url));
  const html = await response.text();

  let title = "Pixel Launch | Diseño y Desarrollo Web Premium en Colombia";
  let description =
    "Diseño web premium y embudos de venta. Haz crecer tu negocio online con nuestros sitios rápidos, seguros y optimizados para Google.";
  let locale = "es_CO";

  if (path === "/en") {
    title = "Pixel Launch US | Premium Web Design & Sales Funnels";
    description =
      "We build fast, secure websites and e-commerce stores optimized for Google. Let's scale your business with international quality standards.";
    locale = "en_US";
  }

  // Inject dynamic SEO tags into the raw HTML string for bots and crawlers
  const modifiedHtml = html
    .replace('<html lang="en">', `<html lang="${locale.split("_")[0]}">`)
    .replace(
      "<title>Pixel Launch | Diseño y Desarrollo Web Premium en Colombia</title>",
      `<title>${title}</title>`,
    )
    .replace(
      '<meta name="description" content="En Pixel Launch creamos páginas web en Colombia que venden y posicionan. Diseño web premium, rápido, seguro y optimizado para SEO, junto con embudos de venta." />',
      `<meta name="description" content="${description}" />`,
    )
    .replace(
      '<meta property="og:title" content="Pixel Launch | Diseño Web Premium" />',
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      '<meta property="og:description" content="Diseño web premium y embudos de venta. Haz crecer tu negocio online con nuestra experiencia." />',
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(
      '<meta property="twitter:title" content="Pixel Launch | Diseño Web Premium" />',
      `<meta property="twitter:title" content="${title}" />`,
    )
    .replace(
      '<meta property="twitter:description" content="Diseño web premium y embudos de venta. Haz crecer tu negocio online con nuestra experiencia." />',
      `<meta property="twitter:description" content="${description}" />`,
    );

  // Return the modified HTML as standard text/html
  return new Response(modifiedHtml, {
    headers: { "content-type": "text/html;charset=UTF-8" },
  });
}
