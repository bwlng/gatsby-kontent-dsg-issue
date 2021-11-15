# Basic Gatsby site demonstrating the inability to use Deferred Static Generation with the Gatsby Source Kontent Plugin

Create a new project use the sample project available in your Kontent account: [https://app.kontent.ai/projects/](https://app.kontent.ai/projects/)

Add the project’s ID to [`gatsby-config.js`](gatsby-config.js)

Run `npm install` to set up project.

Run `npm run build` to build.

A page is created for each __Article__ item in the Kontent project and uses the new defer argument for `createPage` action in [`gatsby-node.js`](gatsby-node.js) to exclude the page from the build step and instead generate it during the first HTTP request.

During the __Validating Rendering Engines__ portion of the build process, the following error is thrown:

```bash
Gatsby kontent source plugin resulted to error in `createSchemaCustomization` method ENOENT: no such file or directory, open '.cache/query-engine/template.items.schema.gql'

  Error: ENOENT: no such file or directory, open '.cache/query-engi
  ne/template.items.schema.gql'
```

Remove the defer argument from the `createPage` action then run `npm run build` and the site will build as expected.