#### (This is for me as i need to read abt flex box and grid later)
# CSS Layout Notes

## Flexbox

Flexbox is mainly used for arranging items in **one direction**: a row or a column. It is useful for navigation bars, button groups, headers, and small components.

```css
.container {
    display: flex;
}
```

### Main axis and cross axis

By default:

- The main axis is horizontal.
- The cross axis is vertical.
- Items are placed from left to right.

If `flex-direction` changes to `column`, the axes change:

- The main axis becomes vertical.
- The cross axis becomes horizontal.

### Important Flexbox properties

| Property | Purpose | Common values |
|---|---|---|
| `display` | Activates Flexbox. | `flex` |
| `flex-direction` | Sets the main direction. | `row`, `column` |
| `justify-content` | Aligns items along the main axis. | `start`, `center`, `space-between`, `space-around` |
| `align-items` | Aligns items along the cross axis. | `start`, `center`, `stretch` |
| `gap` | Adds consistent space between items. | `16px`, `1rem` |
| `flex-wrap` | Allows items to move to another line. | `wrap`, `nowrap` |

### Header example

```css
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

nav {
    display: flex;
    gap: 20px;
}
```

The header places the logo at one end and the navigation at the other. The navigation uses another flex container to place its links in a row.

### `justify-content` vs `align-items`

The result depends on the direction:

```css
.row {
    display: flex;
    justify-content: space-between; /* horizontal */
    align-items: center;            /* vertical */
}

.column {
    display: flex;
    flex-direction: column;
    justify-content: center;        /* vertical */
    align-items: center;            /* horizontal */
}
```

### When to use Flexbox

Use Flexbox when:

- Items need to be arranged in one row or one column.
- You need to align items vertically or horizontally.
- The content size may change.
- You are building a header, menu, toolbar, or button group.

Do not use Flexbox as the first choice for a complex two-dimensional page layout. CSS Grid is usually clearer for that.

## CSS Grid

Grid is used for **rows and columns at the same time**. It is useful for page sections, card layouts, galleries, and dashboards.

```css
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

### Important Grid properties

| Property | Purpose | Example |
|---|---|---|
| `display` | Activates Grid. | `display: grid` |
| `grid-template-columns` | Defines the columns. | `repeat(3, 1fr)` |
| `grid-template-rows` | Defines row sizes. | `auto 1fr` |
| `gap` | Adds space between rows and columns. | `gap: 20px` |
| `grid-column` | Makes an item span columns. | `grid-column: span 2` |
| `minmax()` | Sets a flexible minimum and maximum size. | `minmax(200px, 1fr)` |

### Responsive card grid

```css
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}
```

This allows the browser to fit as many cards as possible. Cards move to new rows when the screen becomes smaller.

### When to use Grid

Use Grid when:

- You need both rows and columns.
- Cards should form a responsive gallery.
- Sections need clear two-dimensional placement.
- You are building a dashboard or page layout.

## Quick comparison

| Need | Better choice |
|---|---|
| Logo and navigation on one row | Flexbox |
| Buttons next to each other | Flexbox |
| A three-column card section | Grid |
| A dashboard with rows and columns | Grid |
| Centering one component | Flexbox |
| Responsive gallery | Grid |

Flexbox and Grid can also be combined. For example, Grid can create the page layout while Flexbox aligns the content inside each card.
