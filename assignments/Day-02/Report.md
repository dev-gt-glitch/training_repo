# Day 2 — 29 October 2026

## Planned

- Practise semantic HTML and accessibility basics.
- Learn forms and browser validation, CSS selectors, specificity, and the box model.
- Practise Flexbox, CSS Grid, responsive design, media queries, CSS variables, and basic theming.
- Build a responsive landing page, an accessible signup form, and the static pages for the hotel practice app.

## Done

- [x] Rebuilt a simple Google-style search page using a semantic header, navigation, main content, form, and footer.
- [x] Created a signup form with visible labels, appropriate input types, autocomplete hints, required fields, and a minimum password length.
- [x] Added visible keyboard focus styles to the signup form controls.
- [x] Recorded a Lighthouse accessibility score of **100/100** for the Day 2 signup form in [the Day 2 README](docs/README.md). The score is for `assignments/Day-02/Form/signup.html`.
- [x] Built the hotel app home page with a Taj Mahal background, a hotel search form, and featured hotel cards.
- [x] Added the hotel listing and detail pages, plus static booking, manage-booking, and invoice pages.
- [x] Reused the existing forest green, gold, and cream theme, and used CSS Grid for the hotel cards and Flexbox for the header and form layouts.
- [x] Added responsive CSS rules for the hotel pages and search bar.
- [x] Wrote notes comparing Flexbox and Grid in [the Day 2 layout notes](docs/notes.md).

## What I learned

- Semantic elements such as `header`, `nav`, `main`, `section`, `article`, and `footer` make page structure clearer.
- Labels should be connected to inputs, and native input types and attributes can provide useful browser validation.
- Flexbox works well for arranging items in one direction; Grid is useful for rows and columns such as a hotel card layout.
- CSS variables make it easier to reuse the same colors across a site.
- Media queries let a layout change for narrower screens.

## Blockers and limitations

- The hotel pages are static practice pages. Search does not filter hotel results, and booking details are sample content that is not saved to a database.
- The Lighthouse score above applies to the Day 2 practice signup form, not the full hotel app.

## Can I explain it without notes?

- I can explain why a form label needs to be associated with its input and how `required`, `type="email"`, and `minlength` provide basic browser validation.
- I can explain when I would use Flexbox for a row or column and Grid for a card layout with multiple columns.
- I can explain how the mobile media query changes the search form and hotel card layout.

## Next

- Open the hotel pages at 375 px and 1280 px and check the layouts and keyboard navigation.
- Continue the practice app by making the static search and booking flow work with data.
