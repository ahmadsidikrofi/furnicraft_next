/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'utfs.io'
            },
            {
                hostname: 'avatars.githubusercontent.com',
                protocol: 'https'
            }
        ]
    },

};

export default nextConfig;
