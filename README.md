# Prisma-binding issue

This repository is to reproduce an issue where subscriptions don't work with `graphql-yoga` & `prisma-binding`.

## Running

Requirements:

1. Docker - [download here](https://store.docker.com/editions/community/docker-ce-desktop-mac)
1. `yarn` or `npm`

```sh
yarn start
```

The server will listen on port `4000` then you can try this query:

```graphql
subscription {
  messages {
    mutation
    updatedFields
    node {
      id
      text
    }
  }
}
```

Which will return:

```json
{
  "error": {
    "message": "The provided query doesn't include any known model name. Please check for the latest subscriptions API."
  }
}
```

This query should work fine on Prisma (port `4466`) though:

```graphql
subscription {
  chatMessage(where: {
    mutation_in: [UPDATED, CREATED]
  }) {
    mutation
    updatedFields
    node {
      id
      text
    }
  }
}
```