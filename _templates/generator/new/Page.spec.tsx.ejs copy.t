---
to: "<%= isPage ? `playwright/${filePath}.spec.ts` : null %>"
---
import { expect, test } from '@playwright/test'
import { checkA11y, injectAxe } from 'axe-playwright'

test('<%= filePath %> test', async ({ page }) => {
  await page.goto('http://localhost:3000/<%= filePath %>')
  await expect(page).toHaveTitle('<%= fileName %>')
})

test('a11y', async ({ page }) => {
  await page.goto('http://localhost:3000/<%= filePath %>')
  await injectAxe(page)
  await checkA11y(page, undefined, {
    axeOptions: {},
    detailedReport: true,
    detailedReportOptions: { html: true },
  })
})
