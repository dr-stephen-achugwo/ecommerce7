module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'build: ',
        'chore: ',
        'ci: ',
        'docs: ',
        'feat: ',
        'fix: ',
        'perf: ',
        'refactor: ',
        'revert: ',
        'style: ',
        'test: ',
        'stories: ',
      ],
    ],
  },
}
