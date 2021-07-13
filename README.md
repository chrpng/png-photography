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

### Need to do
Add webhook so GraphCMS can trigger Netlify builds
Fix Lightbox View so it's contain and not cover
Memoize galleries so load time upon switching back to already loaded gallery is faster? (Placeholder on initial query loads fast, but switching afterwards is slow)