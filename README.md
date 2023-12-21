# Restaurant Reservation System

![us-05-dashboard-finish-button-after](https://github.com/cmorgan3324/thinkful-reservation-system/assets/132379707/831b6e34-503f-490d-9622-219e8619c5cc)

https://restaurant-reservation-system-atni.onrender.com

## Description
I created a restaurant reservation system for restaurants to allow users to create, find, view, update, and cancel reservations.  With this application, users can also seat them at various tables within the restaurant.

## API Documentation
This documentation provides an overview of the available endpoints and functionalities provided by the API module in the project.

### Base URL
The base URL for the API is determined by the API_BASE_URL environment variable. By default, it is set to:
http://localhost:5001

### Functions
`listReservations(params, signal)`
* Description: Retrieves all existing reservations.
* Endpoint: GET /reservations
* Parameters:
  * params: Query parameters to filter reservations.
  * signal: AbortController signal.
* Returns: A promise resolving to an array of reservations.

`createReservation(reservation, signal)`
* Description: Creates a new reservation.
* Endpoint: POST /reservations
* Parameters:
  * reservation: Reservation data to be created.
  * signal: AbortController signal.
Returns: A promise resolving to the created reservation data.

`createTable(table, signal)`
* Description: Creates a new table.
* Endpoint: POST /tables
* Parameters:
  * table: Table data to be created.
  * signal: AbortController signal.
* Returns: A promise resolving to the created table data.

`listTables(signal)`
* Description: Retrieves all existing tables.
* Endpoint: GET /tables
* Parameters:
  * signal: AbortController signal.
* Returns: A promise resolving to an array of tables.

`seatReservation(table_id, reservation_id, signal)`
* Description: Seats a reservation at a table.
* Endpoint: PUT /tables/:table_id/seat
* Parameters:
  * table_id: ID of the table.
  * reservation_id: ID of the reservation to be seated.
  * signal: AbortController signal.
* Returns: A promise resolving to the updated table data.

`unassignTable(table_id, reservation_id, signal)`
* Description: Finishes a reservation that has been seated.
* Endpoint: DELETE /tables/:table_id/seat
* Parameters:
  * table_id: ID of the table.
  * reservation_id: ID of the reservation to be unassigned.
  * signal: AbortController signal.
* Returns: A promise resolving to null on successful completion.

`cancelReservation(reservation_id)`
* Description: Cancels a reservation.
* Endpoint: PUT /reservations/:reservation_id/status
* Parameters:
  * reservation_id: ID of the reservation to be canceled.
* Returns: A promise resolving to null on successful cancellation.

`findReservation(reservation_id, signal)`
* Description: Finds a reservation by its ID.
* Endpoint: GET /reservations/:reservation_id
* Parameters:
  * reservation_id: ID of the reservation to be found.
  * signal: AbortController signal.
* Returns: A promise resolving to the found reservation data.

`modifyReservation(id, res, signal)`
* Description: Updates reservation information.
* Endpoint: PUT /reservations/:id
* Parameters:
  * id: ID of the reservation to be modified.
  * res: Updated reservation data.
  * signal: AbortController signal.
* Returns: A promise resolving to the modified reservation data.

## Technologies & Tools
 * React
 * Node
 * Postgres
 * Express
 * CSS
 * Bootstrap4
 * HTML
 * JavaScript
 * RESTful APIs
 * DBeaver
 
## Run Locally
 1. Fork & Clone the repository
 2. Run npm install
 3. Run npm run start:dev to start
