const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      query {
        allKontentItemArticle {
          edges {
            node {
              preferred_language
              system {
                codename
              }
              elements {
                url_pattern {
                  value
                }
              }
            }
          }
        }
      }
    `).then(results => {
        results.data.allKontentItemArticle.edges.forEach(({ node }) => {

          createPage({
            path: `/articles/${node.elements.url_pattern.value}`,
            component: path.resolve("./src/templates/article.js"),
            context: {
              codename: node.system.codename,
              language: node.preferred_language,
            },
            defer: true
          })
        })

      resolve()
    })
  })
}