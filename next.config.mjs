/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.vercel-storage.com',
            }
        ]
    },
    experimental: {
        serverComponentsExternalPackages: ['puppeteer-core', '@sparticuz/chromium-min']
    }
};

export default nextConfig;
