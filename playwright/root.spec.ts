import { expect, test } from '@playwright/test'
import { checkA11y, injectAxe } from 'axe-playwright'

import { config } from 'lib/config'
import { ja } from 'lib/i18n/ja'

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page).toHaveTitle(`${config.title} - ${config.name}`)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(ja.items)
  await injectAxe(page)
  await checkA11y(page, undefined, {
    axeOptions: {},
    detailedReport: true,
    detailedReportOptions: { html: true },
  })
})

test('monkey testing', async ({ page }) => {
  await page.addInitScript({
    path: './node_modules/gremlins.js/dist/gremlins.min.js',
  })
  await page.goto('http://localhost:3000')
  // @ts-expect-error
  await page.evaluate(() => gremlins.createHorde().unleash())
})
