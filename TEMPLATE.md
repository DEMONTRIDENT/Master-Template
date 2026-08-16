# Master Website Template — Customization Guide

Rebrand this site for a new business by editing only these 4 files. No component changes needed.

## 1. `frontend/src/config/business.js` — all words & links
Business name, hero title/tagline, rating, marquee phrases, story chapters (about text),
gallery photos + captions, section headings, address, opening hours, map address,
order/booking link, footer text.

## 2. `frontend/src/data/menu.js` — menu & testimonials
- `CATEGORIES`: menu/service categories and items (name, price, optional desc + tag badge)
- `REVIEWS`: 6 testimonial quotes with names
- `IMAGES`: hero + story-chapter photos (any image URLs)

## 3. `frontend/tailwind.config.js` — brand colours (3 values)
```js
cream: '#F4F1EB',  // page background
ink:   '#1A1A1A',  // text / dark sections
brand: '#A84A22',  // accent (buttons, highlights)
```
Changing these three re-skins the entire site.

## 4. `frontend/src/App.css` — fonts
Swap the Google Fonts import + the three font-family values (serif headings,
sans body, mono labels). Also update the `::selection` colour to match `brand`.

## Structure (reusable, don't need edits)
```
src/components/  Nav, Hero, Ribbon (marquee), Manifesto (about),
                 Gallery, MenuSection, Reviews, Visit (map/hours), Footer
```

## Not included (add per client if needed)
Phone number, email address, social media links, contact form — this business
had none listed. Add fields to `business.js` and render where needed.
