const path = require('path')

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions
    const bookTemplate = path.resolve('src/templates/bookTemplate.js')

    return graphql(`
        query {
          allBook {
            edges {
              node {
                summary
                title
                id
                localImage{
                    publicURL
                }
                author {
                  name
                }
              }
            }
          }
        }
    `).then((result) => {
        if(result.errors) {
            throw result.errors;
        }

        result.data.allBook.edges.forEach(book => {
            createPage({
                path: `/book/${book.node.id}`,
                component: bookTemplate,
                context: book.node
            })
        });
    })
}