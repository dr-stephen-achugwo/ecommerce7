---
to: "<%= isPage ? `src/components/${filePath}/index.ts` : null %>"
---
export { <%= fileName %>Container } from './<%= fileName %>Container'
