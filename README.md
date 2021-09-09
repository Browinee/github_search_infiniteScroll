# Search github repositories with InfiniteScroll

## Feature

- Scroll to top
- Edge cases

  - No more data
  - No data

- Error handle
  - Rate limit handle when api request are too much.
  - Debounce user input
- Errorboundary
- Suspense
- husky + lint(eslint, prettier, commitlint)

##Setup

```shell
 git clone https://github.com/Browinee/github_search_infiniteScroll.git

 cp .env.example cp .env.development

 yarn

 yarn start
```

## Testing

## Storybook

```shell
yarn run storybook
```

## Performance

- [ ] lighthouse
- [ ] reportWebVitals
