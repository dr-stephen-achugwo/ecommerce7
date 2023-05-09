---
to: "<%= isComponent ? `src/components/${filePath}/${fileName}/index.ts` : null %>"
---
export { <%= fileName %> } from './<%= fileName %>'
