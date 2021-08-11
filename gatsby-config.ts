import dotenv from 'dotenv';

dotenv.config();

if (!process.env.GRAPHCMS_TOKEN) {
	console.error('GRAPHCMS_TOKEN environmental variable is required');
	process.exit(1);
}

const title = 'Tacohuaco';
const siteUrl = 'https://tacohuaco.co';

export default {
	siteMetadata: {
		siteUrl,
		title,
		description: 'TODO',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-graphcms',
			options: {
				endpoint: `https://api-eu-central-1.graphcms.com/v2/${process.env.GRAPHCMS_TOKEN}/master`,
				fragmentsPath: 'src/fragments',
			},
		},
		{
			resolve: 'gatsby-plugin-graphql-codegen',
			options: {
				fileName: 'src/graphql-types.d.ts',
				documentPaths: ['src/**/!(*.d).{ts,tsx}', 'gatsby-node.ts'],
				codegenDelay: 10000,
			},
		},
		/*{
			resolve: 'gatsby-plugin-feed',
			options: {
				feeds: [
					{
						serialize: ({
							query: { allMarkdownRemark },
						}: {
							query: PostsQuery;
						}) => {
							return allMarkdownRemark.edges.map((edge) => {
								const url = `${siteUrl}/${edge.node.fields.slug}`;
								return {
									...edge.node.frontmatter,
									description: edge.node.excerpt,
									date: edge.node.frontmatter.date,
									url,
									guid: url,
									custom_elements: [
										{
											'content:encoded': edge.node.html,
										},
									],
								};
							});
						},
						query: `
							{
								allMarkdownRemark(
									filter: { fileAbsolutePath: { regex: "/all/.* !TODO! /" } }
									sort: { fields: [frontmatter___date], order: DESC },
									limit: 20,
								) {
									edges {
										node {
											frontmatter {
												title
												date
											}
											fields {
												slug
											}
											excerpt
											html
										}
									}
								}
							}
							`,
						output: '/atom.xml',
						title,
					},
				],
			},
		},*/
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-netlify',
			options: {
				headers: {
					// Cache fonts forever
					'/fonts/*': [
						'Cache-Control: public',
						'Cache-Control: max-age=365000000',
						'Cache-Control: immutable',
					],
					// Cache images for a week
					'/images/*': [
						'Cache-Control: public',
						'Cache-Control: max-age=604800',
					],
				},
			},
		},
		'gatsby-plugin-typescript',
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl,
			},
		},
		{
			resolve: 'gatsby-plugin-goatcounter',
			options: {
				code: 'tacohuaco',
				allowLocal: false,
			},
		},
	],
};
