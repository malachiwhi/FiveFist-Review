/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source:"/",
                destination:"/redirectRoute", 
                permanent: true, 
            }
        ]
    }
};

export default nextConfig;
