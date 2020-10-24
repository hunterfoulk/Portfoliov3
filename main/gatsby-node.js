
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions


  if (page.path.match(/^\/projects/)) {
    page.matchPath = "/projects/*"


    createPage(page)
  }
}

