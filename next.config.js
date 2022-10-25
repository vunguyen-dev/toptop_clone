/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["www.kibrispdr.org", "lh3.googleusercontent.com"],
    },
};

module.exports = nextConfig;
