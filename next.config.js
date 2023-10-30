/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'content2.rozetka.com.ua'
			},
			{
				protocol: 'https',
				hostname: 'content1.rozetka.com.ua'
			},
			{
				protocol: 'https',
				hostname: 'content.rozetka.com.ua'
			}
		]
	}
}

module.exports = nextConfig
