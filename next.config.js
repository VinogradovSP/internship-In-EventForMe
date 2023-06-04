/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig

module.exports = {
  images: {


    domains: ['picsum.photos', "dummyimage.com", "placekitten.com", 'jsonplaceholder.typicode.com' ]
  },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placekitten.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

