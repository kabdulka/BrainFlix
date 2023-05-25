-- Shows all databases available --
SHOW DATABASES;

-- If the database 'instock_db' already exists, delete it --
DROP DATABASE IF EXISTS instock_db;

/* Create database */
CREATE DATABASE instock_db;

/* Target a database to use */
USE instock_db;

/* Creating new table (table name and fields need to be surrounded by backticks) */
CREATE TABLE `warehouse` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL DEFAULT 'Store Manager',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

/* Back ticks are optional, if name and fields do not conflict with a reserved keyword */
CREATE TABLE warehouse (
  id int unsigned NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  position varchar(255) NOT NULL DEFAULT 'Store Manager',
  updated_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

/* 
  Example where backticks are essential
  First one will not work because 'order' is a reserved word
 */
CREATE TABLE order (
  id int unsigned NOT NULL AUTO_INCREMENT,
  date datetime NOT NULL,
  description varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE `order` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `description` varchar(255),
  PRIMARY KEY (`id`)
);

/* Show all the tables in the current database */
SHOW TABLES;

/* Delete the table 'order' */
DROP TABLES `order`;

/* Show all columns from the table 'warehouse' */
SHOW COLUMNS FROM warehouse;

/* Adding a record to the table warehouse */
INSERT INTO warehouse (name)
VALUES ('Warehouse Number 1');

/* Retrieves all data from the table named `warehouse` */
SELECT * FROM warehouse;

INSERT INTO warehouse (name)
VALUES ('Warehouse Number 2');

/* We can also insert multiple fields at the same time into the table */
INSERT INTO warehouse (name, position) 
VALUES ('Warehouse Number 3', 'Associate');

/* Querying for specific fields only */
SELECT name, position FROM warehouse WHERE id = 2;
SELECT name, position FROM warehouse WHERE id = 2 AND position = 'Store Manager';

/* Update table schema */
ALTER TABLE warehouse
ADD COLUMN location VARCHAR(255);

/* Update a record; we need to specify which record to update using WHERE */
UPDATE warehouse
SET name = 'Awesome Warehouse', position = 'Grand Poobah', location = "Vancouver"
WHERE id = 3;

/* Deleting data (if you don't specify WHERE, all data from a table will be deleted)
Note: MySql comes with a safe update / delete mode which prevents you from
executing update / delete on a lot of rows at once unless key a specified.
To turn it off safe mode do: SET SQL_SAFE_UPDATES = 0;
To turn it back on do: SET SQL_SAFE_UPDATES = 1;
 */
DELETE FROM warehouse
WHERE id = 1;

DELETE FROM warehouse
WHERE name LIKE '%1%'
AND position = 'Store Manager';

/* Create a new table 'inventory' */
CREATE TABLE `inventory` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `quantity` int DEFAULT 0,
  `warehouse_id` int unsigned,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (warehouse_id) REFERENCES warehouse(id)
);

/* 
Insert some data for the inventory table
Make sure the id exists for warehouse
*/
INSERT INTO inventory (name, quantity, warehouse_id)
VALUES ('Wide Screen TV', 10, 4);

INSERT INTO inventory (name, quantity, warehouse_id)
VALUES ('Glacier Water', 5, 4);

INSERT INTO inventory (name, quantity, warehouse_id)
VALUES ('VHS Tape of Home Alone', 1, 1);

/* you can also insert multiple values like so: */
INSERT INTO inventory (name, quantity, warehouse_id) VALUES
('Wide Screen TV', 10, 2),
('Glacier Water', 5, 2),
('VHS Tape of Home Alone', 1, 3);

/* Joining data from two tables together */
-- Query for Warehouse Name, Inventory Name, and Inventory Quantity --
SELECT warehouse.name AS warehouse_name, inventory.name AS inventory_name, inventory.quantity
FROM warehouse
INNER JOIN inventory 
ON warehouse.id = inventory.warehouse_id;


INSERT INTO warehouse (name, location) 
VALUES
('Old Warehouse', 'Vancouver'),
('New Warehouse', 'Vancouver'),
('Regular Warehouse', 'Vancouver'),
('Cool Warehouse', 'Richmond'),
('Worn Warehouse', 'Burnaby'),
('Nice Warehouse', 'Surrey');

/* Count rows in warehouse table */
SELECT COUNT(*) FROM warehouse;

/* Count count rows by location in warehouse table */
SELECT location, COUNT(*)
FROM warehouse
GROUP BY location

SELECT location, COUNT(*)
FROM warehouse
GROUP BY location
LIMIT 2;
