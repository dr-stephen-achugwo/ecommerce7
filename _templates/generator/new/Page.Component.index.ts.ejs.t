---
to: "<%= isPage ? `src/components/${filePath}/${fileName}Container/index.ts` : null %>"
---
export { <%= fileName %>Container } from './<%= fileName %>Container'
