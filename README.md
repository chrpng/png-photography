
# gatsby-starter-strata

This uses a Gatsby starter based on the Strata site template, designed by [HTML5 UP](https://html5up.net/strata). Check out https://codebushi.com/gatsby-starters-and-themes/ for more Gatsby starters and templates.

## Installation

Install this starter (assuming Gatsby is installed) by running from your CLI:
`git clone https://github.com/chrpng/png-photography`
`cd png-photography`

Run `gatsby develop` in the terminal to start.

This also requires sourcing image data from GraphCMS.

### Updates

2021-07-13 Converted image gallery from a naive grid to a smarter row layout with react-photo-gallery. Uses Knuth and Plass line breaking algorithm to calculate rows.

2021-07-13 Set max size for sidebar/header at larger breakpoints so image take up more of the available space.

2021-07-14 BUGFIX: Fixed issue where gatsby-plugin-image does not pass sizes attribute and thus always picks the largest image to load. Passed in sizes prop manually.
Also is now loading different images for thumbnail (smaller) and lightbox view (larger)

2021-07-15 Added SEO
2021-07-15 BUGFIX: Fixed layout at extra large resolutions (1800px+). Media queries were not capturing extra large resolutions.
2021-07-15 BUGFIX: Fixed Lightbox View so image fit relative to screen is contain and not cover (used GatsbyImage imgStyle prop)

### Need to do

* BUG: (Potential) Lightbox View current view loads very slow. Adjacent view with the side arrows seem to load faster.
* Continuous deployment
* Add webhook so GraphCMS can trigger Netlify builds
* Instagram feed - either dynamically sourced (hybrid component) or static (build time graphql)
* Memoize galleries so load time upon switching back to already loaded gallery is faster? (Placeholder on initial query loads fast, but switching afterwards is slow)
* useCallback for functions that can benefit
* WYSIWYG (optional)