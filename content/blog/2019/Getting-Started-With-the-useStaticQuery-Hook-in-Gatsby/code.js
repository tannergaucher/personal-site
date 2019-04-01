//  import {staticQuery, graphql} from 'gatsby'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
)

// import {useStaticQuery, graphql} from 'gatsby
function Layout({ children }) {
  const { site } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}
