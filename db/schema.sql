
DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;




create TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description TEXT,
    extension INTEGER,
    budget FLOAT,
    sale TEXT,
    margin FLOAT,
    trending TEXT
);

/* Create Table for Inventory */
CREATE TABLE inventory (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    code INTEGER NOT NULL,
    name VARCHAR(30) NOT NULL,
    quantity INTEGER NOT NULL,
    price FLOAT NOT NULL,
    category VARCHAR(30) NOT NULL,
    department INTEGER,
    inSTOCK BOOLEAN NOT NULL,
    supplier VARCHAR(30) NOT NULL,
    country VARCHAR(30) NOT NULL,
    lastShipment DATETIME,
    nextShipment DATETIME
    /* CONSTRAINT fk_department FOREIGN KEY(department) REFERENCES departments(id) ON DELETE SET NULL */
);

CREATE TABLE roles(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary FLOAT,
    department INTEGER,
    responsibilities TEXT,
    positionType TEXT,
    reportsTo INTEGER REFERENCES employees(id) ON DELETE SET NULL
    /* CONSTRAINT fk_roles_department FOREIGN KEY(department) REFERENCES departments(id) ON DELETE SET NULL */
);

CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    employeeNumber INTEGER(11),
    extension INTEGER(11),
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    role_id INTEGER
    /* CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL */
);

