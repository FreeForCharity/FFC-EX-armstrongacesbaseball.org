import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Footer copyright notice
 */

test.describe('Footer copyright', () => {
  test('should display the current year and organization name', async ({ page }) => {
    await page.goto('/')

    const currentYear = new Date().getFullYear()
    // Use the copyright-line p which contains the year symbol
    const footerText = page.locator(`footer p:has-text("© ${currentYear}")`).first()

    await expect(footerText).toBeVisible()
    await expect(footerText).toContainText(`© ${currentYear}`)
    await expect(footerText).toContainText(testConfig.copyright.text)
  })

  test('should display the Free For Charity hosting credit link', async ({ page }) => {
    await page.goto('/')

    const link = page.locator(`footer a[href="${testConfig.copyright.linkUrl}"]`)
    await expect(link.first()).toBeVisible()
  })
})
