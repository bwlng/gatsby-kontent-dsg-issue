import * as React from "react"
import { graphql } from 'gatsby'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

// markup
const IndexPage = ({ data }) => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <ul style={listStyles}>
        {data.articles.nodes.map(article => (
          <li key={article.elements.url_pattern.value} style={{ ...listItemStyles }}>
            <span>
              <a
                style={linkStyle}
                href={`/articles/${article.elements.url_pattern.value}`}
              >
                {article.elements.title.value}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}


export const query = graphql`
  query IndexPageQuery {
    articles: allKontentItemArticle {
      nodes {
        preferred_language
        system {
          codename
        }
        elements {
          title {
            value
          }
          url_pattern {
            value
          }
        }
      }
    }
  }
`

export default IndexPage