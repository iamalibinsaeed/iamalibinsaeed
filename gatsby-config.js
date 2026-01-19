module.exports = {
    siteMetadata: {
        title: `Ali Bin Saeed | Software Engineer in Test`,
        description: `Professional portfolio of Ali Bin Saeed, focused on QA, Full Stack Development, and Gen AI.`,
        author: `@iamalibinsaeed`,
        siteUrl: `https://iamalibinsaeed.github.io`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Ali Bin Saeed Portfolio`,
                short_name: `Ali Portfolio`,
                start_url: `/`,
                background_color: `#0a192f`,
                theme_color: `#64ffda`,
                display: `minimal-ui`,
            },
        },
    ],
}
