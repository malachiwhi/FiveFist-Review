/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source:"/",
                destination:"/newsletter", 
                permanent: true, 
            }
        ]
    }
};

export default nextConfig;
