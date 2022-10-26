
/* Adding values in inventory Data */

INSERT INTO inventory (code, name, qty, price, family, department, inSTOCK)
VALUES
(4011,'Yellow Banana', 15, 3.99, 'Banana',1, 1),    
(4022,'Plantain Banana', 5, 6.99, 'Banana',1, 1),
(4033,'Blue Banana',15, 6.99, 'Banana',1, 1),
(4044,'Brown Banana', 15, 4.99, 'Banana',1, 1),
(4100,'Granny Smith Apples', 5, 6.99, 'Apples',1, 1),
(4200,'Red Delicious Apples', 15, 6.99, 'Apples',1, 1),
(4300,'PinkLady Apples', 35, 3.99, 'Apples',1, 1),
(4400,'HoneyCrisp Apples', 5, 6.99, 'Apples',1, 1),
(4500,'Fuji Apples', 51, 1.99, 'Apples',1, 1),
(4600,'Orange', 35, 6.99, 'Citrus',1, 1),
(4700,'Clementine',5, 6.99,'Citrus',1, 1),
(4800,'Lime',25,6.99,'Citrus',1, 1),
(4900,'Lemon',5,4.99, 'Citrus',1, 1),
(5000,'Tangerine',15,2.99, 'Citrus',1, 1),
(5100,'Grape Fruit',5, 4.99, 'Citrus',1, 1),
(6000,'PS4',10, 450.99, 'PlayStation',8, 1),
(6100,'PS5',15, 650.99, 'PlayStation',8, 1),
(6200,'PS6',10, 990.99, 'PlayStation',8, 1),
(6300,'XBOX',10, 550.99, 'XBOX',8, 1),
(6400,'XBOX360',15, 250.99, 'XBOX',8, 1),
(6500,'XBOX720',22, 770.99, 'XBOX',8, 1);







INSERT INTO departments (name, description)
VALUES
('Produce', 'Fruits, vegetables, Fresh Smoothies'),
('Clothing', 'T-Shirts, Pants, Socks'),
('Dairy', 'Milk, Yogurt, Cheese'),
('Grocery', 'Pasta, Cookies, Flour'),
('Meat', 'Ribs, Steak,Ground-Beef'),
('SeasFood','Salmon, Trout, Squid'),
('Baby', 'Diapers, Toys, Pacifiers'),
('Electronics', 'PS5, XBOX360, Wii');


INSERT INTO roles (title, salary, department)
VALUES
('Manager', 85000, 1),
('Assistant Manager', 45000, 1),
("Employee", 25000, 1),
('Manager', 75000, 2),
('Assistant Manager', 55000, 2),
("Employee", 25000, 2),
('Manager', 65000, 3),
('Assistant Manager', 35000, 3),
("Employee", 25000, 3),
('Manager', 95000, 4),
('Assistant Manager', 49000, 4),
("Employee", 25000, 4),
('Manager', 88000, 5),
('Assistant Manager', 37000, 5),
("Employee", 25000, 5),
('Manager', 68000, 6),
('Assistant Manager', 49000, 6),
("Employee", 25000, 6),
('Manager', 59000, 7),
('Assistant Manager', 47000, 7),
("Employee", 25000, 7),
('Manager', 90000, 8),
('Assistant Manager', 37000, 8),
("Employee", 25000, 8);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Josh','Jacobs', 1,  1 ),
('Mike','Johnson', 2, 1 ),
('Ja','Morant', 3,  1 ),
('Ja','Morant', 4,  2 ),
('Ja','Morant', 5,  2 ),
('Ja','Morant', 6,  2 ),
('Ja','Morant', 7,  3 ),
('Ja','Morant', 8,  3 ),
('Ja','Morant', 9,  3 ),
('Ja','Morant', 10, 4 ),
('Ja','Morant', 11, 4 ),
('Ja','Morant', 12, 4 ),
('Ja','Morant', 13 ,5 ),
('Ja','Morant', 14, 5 ),
('Ja','Morant', 15, 5 ),
('Ja','Morant', 16, 6 ),
('Ja','Morant', 17, 6 ),
('Ja','Morant', 18, 6 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 20, 7 ),
('Ja','Morant', 21, 7 ),
('Ja','Morant', 22, 7 ),
('Ja','Morant', 23, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 ),
('Ja','Morant', 19, 7 );


