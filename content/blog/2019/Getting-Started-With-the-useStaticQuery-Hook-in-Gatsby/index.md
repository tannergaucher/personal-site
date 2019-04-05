---
title: Getting Started with the useStaticQuery Hook in Gatsby
date: "2019-03-30"
description: ""
featuredImage: "./featured.jpg"
tags: ["Gatsby", "React"]
draft: true
---

As with everywhere else in the React world, hooks make it possible to write cleaner components in Gatsby.

In this post, we're going to take the layout page component from the current gatsby-starter `/src/components/layout.js`, and refactor it from it's current use of `<StaticQuery/>`, into using the newly available `useStaticQuery` hook.

Before doing that, let's take a quick look at how data is handled the Gatsby Way.

### A Quick Look at Data the Gatsby Way

Before `<StaticQuery/>` was introduced into gatsby, there was only one way to pull data from the GraphQL data layer into our markup templating. That was through a page-level GraphQL query. Only files in the `/pages` directory could send off data queries.

With the introduction of `<StaticQuery/>`, it meant that we could query data from _any_ component, not just page level components.

One benefit of this is the possibility of co-locating data-fetching logic and markup templating in the same file. That pattern can result in less need to pass data down as props from the page level query to child components rendering that data.

Now, we have less prop-drilling, but that comes at the cost of adding more "nesting" into the component, through using the render props pattern.

Here's a look at how `<StaticQuery/>` uses the render props pattern in `/src/components/layout.js` of the Gatsby starter.

## Using Static Query and Render Props to Query Data

Now let's refactor `/src/components/layout.js` from using `<StaticQuery/>` to the new `useStaticQuery` hook.

## Using useStaticQuery to Query Data

On first glance, we can see that the stateless functional component (a now deprecated term, because hooks can make them stateful) has been refactored into a function component. This is just personal preference.

We have our data-fetching logic at the top of the function declaration, and return the "view" templating at the bottom.

You can also see that removing the render-props pattern results in one less level of nesting in the component, which as you'd expect makes for cleaner and more readable code. Nice 🤓.

## Limitations and Dynamic Queries?

As noted in [this post](https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/) one limitation is that only one instance of `useStaticQuery` can currently be declared per file.

Another limitation is that `<StaticQuery/>`, in keeping with its name, does not take in variables. The only way to pass variables into a GraphQL query in gatsby is via the page-level query, where variables are passed in as context at build time from `gatsby-node.js`

It would be great to have something like `<DynamicQuery name={name}/>` where we could use the `useStaticQuery` hook, but pass in variables _after_ build time.

An example use case of this is an application I'm currently working on, which pulls static data in from a headless CMS and becomes dynamic after 'hydrating' in the DOM. A user takes the static content and makes it dynamic by interacting with it and re-arranging it. Behind the scenes, this sends mutations to a database which saves the static content's ID to the `User` data model.

Currently, the only solution I've come up with is to query _all_ of the static data in the CMS and filter it client side against the ID's returned from the Apollo Query sent off to the backend.

Obviously this is not ideal, and I'm hoping that something like a `<StaticQuery/>` becomes an option. According to [this issue on github](https://github.com/gatsbyjs/gatsby/issues/9047) the gatsby team would like to support dynamic queries, but it's not an easy problem to solve.

Has anyone else solved this problem in a better way than filtering everything client side? If so, please get in touch on Github.

---

### Resources

[Introducing useStaticQuery](https://www.gatsbyjs.org/blog/2019-02-20-introducing-use-static-query/)
