/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source:"/email/page",
                destination:"/redirectRoute", 
                permanent: true, 
            }
        ]
    }
};

export default nextConfig;
