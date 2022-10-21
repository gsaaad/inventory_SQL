
/* Create Table for Inventory */

CREATE TABLE inventory (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    code INTEGER,
    name VARCHAR(30) NOT NULL,
    qty INTEGER NOT NULL,
    price FLOAT NOT NULL,
    family VARCHAR(30) NOT NULL,
    inSTOCK BOOLEAN NOT NULL
)