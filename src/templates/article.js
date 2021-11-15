import { graphql } from "gatsby"
import React from "react"

const ArticlePage = ({ data }) => {
  return (
    <>{data.entry.elements.title.value}</>
  )
}


export default ArticlePage

export const query = graphql`
  query($codename: String!) {
    entry: kontentItemArticle(system: {codename: {eq: $codename}}) {
      elements {
        title {
          value
        }
      }
    }
  }
`