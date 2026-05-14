import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Social media link tests
 *
 * Armstrong Aces currently has a single active social channel: Facebook.
 */

test.describe('Footer social links', () => {
  test('should expose a Facebook link in the footer', async ({ page }) => {
    await page.goto('/')

    const facebookLink = page.locator(`footer a[href*="${testConfig.socialLinks.facebook.url}"]`)
    await expect(facebookLink).toBeVisible()
    await expect(facebookLink).toHaveAttribute(
      'aria-label',
      testConfig.socialLinks.facebook.ariaLabel
    )
    await expect(facebookLink).toHaveAttribute('target', '_blank')
    await expect(facebookLink).toHaveAttribute('rel', /noopener/)
  })

  test('should not contain defunct Google+ links', async ({ page }) => {
    await page.goto('/')

    const googlePlusLink = page.locator('footer a[href*="plus.google.com"]')
    await expect(googlePlusLink).toHaveCount(0)
  })
})
