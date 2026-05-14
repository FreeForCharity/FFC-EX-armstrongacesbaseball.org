/**
 * Test Configuration for Armstrong Aces Baseball
 *
 * Content-specific values used in E2E tests. Single source of truth so
 * tests track the content as the site evolves.
 */

export const testConfig = {
  /**
   * Social Media Links
   * Used in: tests/social-links.spec.ts
   */
  socialLinks: {
    facebook: {
      url: 'facebook.com/people/Armstrong-Aces',
      ariaLabel: 'Facebook',
    },
  },

  /**
   * Copyright (Footer bottom bar)
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: 'Armstrong Aces Inc.',
    searchText: 'Armstrong Aces Inc.',
    linkUrl: 'https://freeforcharity.org',
    linkText: 'Free For Charity',
  },

  /**
   * Logo
   * Used in: tests/logo.spec.ts
   */
  logo: {
    headerAlt: 'Armstrong Aces Baseball home',
    navBarAriaLabel: 'Armstrong Aces Baseball home',
  },

  /**
   * External CTA URLs (Givebutter, Team Shop, YouTube)
   * Used in: tests/external-links.spec.ts
   */
  external: {
    donateUrl: 'https://givebutter.com/acesbaseball',
    shopUrl: 'https://armstrongacesbaseball.org/shop/',
    youtubeVideoId: 'MLpWrANjFbI',
  },
}
