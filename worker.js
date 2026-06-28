const ORIGIN_HOST = "your-username.github.io";
const ORIGIN_PROTOCOL = "https:";

function isAssetPath(path) {
  return /.(css|js|mjs|png|jpg|jpeg|webp|gif|svg|ico|woff2?|ttf|otf|json|map)$/i.test(path);
}

function isHtmlPath(path) {
  return path === "/" || /.html$/i.test(path) || !/.[^/]+$/.test(path);
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const originUrl = new URL(request.url);
    originUrl.hostname = ORIGIN_HOST;
    originUrl.protocol = ORIGIN_PROTOCOL;

    const init = {
      method: request.method,
      headers: request.headers,
      redirect: "follow",
    };

    if (request.method !== "GET" && request.method !== "HEAD") {
      init.body = request.body;
    }

    const originResponse = await fetch(originUrl.toString(), init);

    const response = new Response(originResponse.body, {
      status: originResponse.status,
      statusText: originResponse.statusText,
      headers: originResponse.headers,
    });

    const path = url.pathname.toLowerCase();

    if (isAssetPath(path)) {
      response.headers.set("Cache-Control", "public, max-age=31536000, immutable");
    } else if (isHtmlPath(path)) {
      response.headers.set("Cache-Control", "public, max-age=300, stale-while-revalidate=86400");
    } else {
      response.headers.set("Cache-Control", "public, max-age=3600");
    }

    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");

    const ctype = response.headers.get("content-type") || "";
    if (ctype.includes("text/html")) {
      response.headers.set(
        "Content-Security-Policy",
        "default-src 'self' https: data: blob:; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; connect-src 'self' https:; frame-src https://www.google.com https://www.google.com/maps; frame-ancestors 'none'; base-uri 'self';"
      );
    }

    return response;
  },
};
