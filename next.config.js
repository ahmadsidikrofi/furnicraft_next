/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    },
    // api: {
    //     bodyParser: false,
    //     externalResolver: true,
    // },
    images: {
        remotePatterns: [
            {
                hostname: 'utfs.io'
            }
        ]
    },
}

module.exports = nextConfig
