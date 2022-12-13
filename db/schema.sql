
DROP TABLE IF EXISTS inventory;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

create TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description TEXT
);

CREATE TABLE inventory (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    code INTEGER,
    name VARCHAR(30) NOT NULL,
    qty INTEGER NOT NULL,
    price FLOAT NOT NULL,
    category VARCHAR(30) NOT NULL,
    department INTEGER,
    inSTOCK BOOLEAN NOT NULL,
    supplier VARCHAR(30) NOT NULL,
    country VARCHAR(15) NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department) REFERENCES departments(id) ON DELETE SET NULL

);

CREATE TABLE roles(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    salary FLOAT,
    department INTEGER,
    CONSTRAINT fk_deparment FOREIGN KEY (department) REFERENCES departments(id) ON DELETE SET NULL

);

CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER REFERENCES employee(id) ON DELETE SET NULL,
    CONSTRAINT fk_roles FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL
);


