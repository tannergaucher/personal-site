---
title: Getting Started With Writing GraphQL Fragments in Gatsby
date: "2019-04-01"
description: ""
featuredImage: "./featured.jpg"
tags: ["Gatsby", "GraphQL", "React"]
draft: true
---

### What is a fragment?

According to the gatsby docs, fragments are 're-useable fields for query composition.'

### Why use them?

- allows you to co-locate data-fetching within your helper components
- can be exported and re-used in any other file. This keeps our queries DRY, smaller, easier to reason about, and less brittle when making changes,

## How

1. Define the fragment inside the helper component (what's that?)
2. Use the helper component throughout the app, along with the exported fragment

- It is possible for fragments to access variables declated in queries or mutations

---

### Resources

- [Gatsby Docs: Querying Data with GraphQL]('https://www.gatsbyjs.org/docs/querying-with-graphql/#fragments')
