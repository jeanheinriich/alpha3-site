/** @type {import('next').NextConfig} */
const nextConfig = {
  // Imagens: serve WebP/AVIF automaticamente, cache de 1 ano
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },

  // Remove header "X-Powered-By: Next.js"
  poweredByHeader: false,

  // Compressão gzip
  compress: true,

  // Headers de segurança
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "X-Frame-Options",            value: "DENY" },
          { key: "Referrer-Policy",            value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",         value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Cache longo para assets estáticos
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(:path*\\.(?:jpg|jpeg|png|webp|avif|svg|ico|woff2))",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
