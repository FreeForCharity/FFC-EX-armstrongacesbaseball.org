import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Logo / Header brand mark tests
 *
 * The Armstrong Aces header uses a text+badge brand mark rather than an
 * <img>, so we assert on the accessible name of the header home link.
 */

test.describe('Header brand mark', () => {
  test('should expose an accessible link to home', async ({ page }) => {
    await page.goto('/')

    const homeLink = page.locator(
      `header a[href="/"][aria-label="${testConfig.logo.navBarAriaLabel}"]`
    )
    await expect(homeLink).toBeVisible()
  })

  test('should display "Armstrong Aces" wordmark in the header', async ({ page }) => {
    await page.goto('/')

    const header = page.locator('header')
    await expect(header).toContainText('Armstrong Aces')
  })
})
