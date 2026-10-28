# Hotel Management App Requirements

## Product summary

This practice app is a small Airbnb-style hotel management app. Guests browse hotel rooms, view room details, make reservations, and manage their own reservations. Hotel staff manage rooms and reservations. The central entity used throughout the training plan is a reservation, linked to a room and a guest.

## User stories and acceptance criteria

### 1. Browse rooms

As a guest, I want to view available rooms so I can choose a place to stay.

- The room list shows a photo placeholder, room name, location, nightly price, capacity, and availability.
- When no rooms match the current search, the app shows a clear empty state.

### 2. View room details

As a guest, I want to open a room so I can decide whether it suits my stay.

- The detail page shows the room description, amenities, price, capacity, location, and availability.
- A missing room shows a clear not-found message.

### 3. Search and filter rooms

As a guest, I want to search and filter rooms so I can find a suitable stay.

- I can search by location.
- I can filter by guest capacity and price range.
- The list only shows rooms that meet the active filters.

### 4. Create a reservation

As a guest, I want to reserve a room for chosen dates so I can plan my stay.

- I can select available check-in and check-out dates and provide my guest details.
- Check-out must be after check-in.
- A reservation cannot be created when it overlaps an existing confirmed reservation for the room.

### 5. View my reservations

As a guest, I want to see my reservations so I can review my travel plans.

- The list shows the room, dates, total price, and reservation status.
- An empty reservation list displays a clear message.

### 6. Cancel a reservation

As a guest, I want to cancel an upcoming reservation so I can change my plans.

- I can cancel an upcoming reservation from its detail page.
- A cancelled reservation remains visible with its updated status.
- Attempting to cancel a missing reservation returns a clear not-found result.

### 7. Manage rooms

As hotel staff, I want to create and edit room listings so guests see accurate information.

- Staff can create and update a room name, description, location, price, capacity, amenities, and availability.
- A room name, price, and capacity are required.
- Price and capacity must be positive values.

### 8. Sign in with a role

As a user, I want to sign in so the app can protect reservations and staff actions.

- Guests can sign in and access only their own reservations.
- Staff can sign in and manage rooms and reservations.
- Protected actions reject requests without valid authentication.

## Scope notes

- Day 2 begins with static home, room-list, and reservation-form pages.
- Later days add browser behavior, a TypeScript API, PostgreSQL persistence, a React UI, authentication, roles, tests, Docker, and CI.
- Payments, real image uploads, maps, hosting, and advanced availability pricing are outside the core scope.
