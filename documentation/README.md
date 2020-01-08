<h1 align="center">
  How to contribute to the documentation hub
</h1>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Install Gatsby CLI**

    The Gatsby command line tool (CLI) is the main entry point for getting up and running with a Gatsby application and for using functionality including like running a development server and building out your Gatsby application for deployment.

    ```shell
    # The Gatsby CLI is available via npm and should be installed globally by running
    npm install -g gatsby-cli
    # Run gatsby --help for full help.
    ```

2.  **Install node_modules.**
    The code of documentation hub is under "documentation" folder which has its own package.json. 

    ```shell
    cd ./documentation
    npm install
    ```

3.  **Host the documentation hub locally**
    Under the "documentation" folder, run
    ```shell
    gatsby develop
    ```
    Your site is now running at `http://localhost:8000`!
    You can also change the port by running:
    ```shell
    gatsby develop -p PORT_NUMBER
    ```

    Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

## 🧐 Top-level folder structure

A quick look at the top-level files and directories you'll see in the project.

    .
    ├── node_modules
    |── docs
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/docs`**: This directory contains all the markdown files which will be used to build documentation pages.

3.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

6.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

7.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

8.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🧐 What's inside the src folder?
    .
    ├── components
    ├── images
    ├── pages
    ├── templates
    ├── glabal.scss

1.   **`components`**: All the react components like layout, sidebar etc.

2.   **`images`**: All the images used by the components and pages.

3.   **`pages`**: Components under src/pages become pages automatically with paths based on their file name.
 
4.   **`templates`**: Contains templates for programmatically creating pages.

5.   **`glabal.scss`**: global styles.

## 🧐 How to add/edit documentations
**It's very simple!!**

**Just drop your markdown files into the "docs" folder. You can have new subfolders as well. Just need to make sure your md file have "title" and "parents" properties. You can take a look at the existing md files as reference, like "docker-jenkins.md"**

**The navigation tree will be automatically built based on the contents under "docs" folder. And the pages for the documentation will be created automatically as well at build time**

**So, you just need to add/edit the md files under the "docs" folder. That's it!**

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy
Getting your shiny new Gatsby site deployed and accessible is probably the first thing you will want to do now that it’s built! Also, give yourself a pat on the back real quick for creating something so great!
Check it out https://www.gatsbyjs.org/docs/deploying-and-hosting/

## 💫 Q&A
Q: I saw the localhost keep refreshing and the page is not rendered, what should I do?

A: It's probably due to the caching issue. You can stop the server and run 
    ```
    gatsby clean
    ```
    Then, start your localhost again. If it doesn't help, try clean your browser cache.
    
    
    
