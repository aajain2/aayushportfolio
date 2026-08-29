// Vercel Edge Middleware — runs before the filesystem on every matched request.
// Serves link-preview crawlers a text-only page (no image) while real
// visitors get the full site untouched.

const BOT = /facebookexternalhit|Facebot|Twitterbot|Slackbot|Discordbot|WhatsApp|LinkedInBot|TelegramBot|Applebot|SkypeUriPreview|redditbot|Pinterest|vkShare|Bufferbot|Google-InspectionTool|BingPreview/i;

const PREVIEW = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">' +
  '<title>Aayush Jain</title>' +
  '<meta property="og:type" content="website">' +
  '<meta property="og:title" content="Aayush Jain">' +
  '<meta property="og:site_name" content="Aayush Jain">' +
  '<meta property="og:url" content="https://fromaayush.com/art">' +
  '<meta name="twitter:card" content="summary">' +
  '<meta name="twitter:title" content="Aayush Jain">' +
  '</head><body></body></html>';

export const config = {
  matcher: ['/art', '/artwork', '/art.html', '/artwork.html'],
};

export default function middleware(request) {
  const ua = request.headers.get('user-agent') || '';
  if (BOT.test(ua)) {
    return new Response(PREVIEW, {
      status: 200,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'no-store',
      },
    });
  }
  // Not a crawler: return nothing so the request continues to the real page.
}
