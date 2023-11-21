/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        unoptimized:true,
    }
}

module.exports = {
    ...nextConfig,
    images: {
      domains: ['rickandmortyapi.com'], // kullanılan domain burada tanımlanır
    },
    async rewrites() {
        return [
            {
                source: '/rick/:slug*',
                destination: 'https://rickandmortyapi.com/:slug*'
            }
        ]
    }
  };
