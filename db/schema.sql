
DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS departments;



create TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description TEXT
);

/* Create Table for Inventory */
CREATE TABLE inventory (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    code INTEGER,
    name VARCHAR(30) NOT NULL,
    qty INTEGER NOT NULL,
    price FLOAT NOT NULL,
    family VARCHAR(30) NOT NULL,
    department INTEGER,
    inSTOCK BOOLEAN NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY(department) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE roles(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary FLOAT,
    department INTEGER,
    CONSTRAINT fk_department FOREIGN KEY(department) REFERENCES departments(id) ON DELETE SET NULL
)

CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER
    manager_id INTEGER REFERENCES employee(id) ON DELETE SET NULL,
    CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL
)
