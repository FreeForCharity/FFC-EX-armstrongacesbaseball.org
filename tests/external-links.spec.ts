import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * External CTA tests: Givebutter donation, Team Shop, and the YouTube
 * lite-embed thumbnail trigger.
 */

test.describe('External CTAs', () => {
  test('should preserve the Givebutter donation URL', async ({ page }) => {
    await page.goto('/')

    const donateLinks = page.locator(`a[href="${testConfig.external.donateUrl}"]`)
    // At minimum: hero CTA, donate section CTA, header nav, footer link
    await expect(donateLinks.first()).toBeVisible()
    const count = await donateLinks.count()
    expect(count).toBeGreaterThanOrEqual(1)

    // All donate links should open in a new tab with safe rel
    for (let i = 0; i < count; i++) {
      const link = donateLinks.nth(i)
      await expect(link).toHaveAttribute('target', '_blank')
      await expect(link).toHaveAttribute('rel', /noopener/)
    }
  })

  test('should preserve the Team Shop URL', async ({ page }) => {
    await page.goto('/')

    const shopLinks = page.locator(`a[href="${testConfig.external.shopUrl}"]`)
    await expect(shopLinks.first()).toBeVisible()
  })

  test('should render the lite YouTube embed trigger', async ({ page }) => {
    await page.goto('/')

    const playButton = page.locator(`button[aria-label*="Armstrong Aces Baseball"]`)
    await expect(playButton.first()).toBeVisible()

    // Activating the button swaps in the iframe
    await playButton.first().click()
    const iframe = page.locator(`iframe[src*="${testConfig.external.youtubeVideoId}"]`)
    await expect(iframe).toBeVisible()
  })
})
