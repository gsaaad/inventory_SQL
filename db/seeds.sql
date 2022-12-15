
/* Adding values in inventory Data */
<<<<<<< HEAD


INSERT INTO inventory (code, name, qty, price, category, department, inSTOCK, supplier, country)
VALUES
/* bananas */
(4001,'Yellow Banana',15,3.99,'Banana',1,1,'Banana Corp','Banana Land'),    
(4002,'Plantain Banana',5,6.99,'Banana',1,1,'Banana Corp','Banana Land'),
(4003,'Blue Banana',15,6.99,'Banana',1,1,'Banana Corp','Banana Land'),
(4004,'Brown Banana',15,4.99,'Banana',1,1,'Banana Corp','Banana Land'),
/* apples */
(4012,'Red Delicious Apples',15,6.99,'Apples',1,1,'Apples R Us','Apple Land'),
(4013,'PinkLady Apples', 35, 3.99, 'Apples',1,  1, 'Apples R Us', 'Apple Land'),
(4014,'HoneyCrisp Apples',5, 6.99, 'Apples',1,  1, 'Apples R Us', 'Apple Land'),
(4015,'Fuji Apples',51,1.99, 'Apples',1,  1, 'Apples R Us', 'Apple Land'),
/* citrus */
(4021,'Orange',35,6.99, 'Citrus',1, 1, 'Apples R Us', 'Apple Land'),
(4022,'Clementine',5,6.99,'Citrus',1, 1, 'Apples R Us', 'Apple Land'),
(4023,'Lime',25,6.99,'Citrus',1, 1, 'Apples R Us', 'Apple Land'),
(4024,'Lemon',5,4.99, 'Citrus',1, 1, 'Apples R Us', 'Apple Land'),
(4025,'Tangerine',15,2.99, 'Citrus',1, 1, 'Apples R Us', 'Apple Land'),
(4026,'Grape Fruit',5, 4.99, 'Citrus',1, 1, 'Apples R Us', 'Apple Land'),
/* Sony electronics */
(6000,'PS4',10, 450.99, 'Sony',8, 1,'Sony corp', 'Japan'),
(6100,'PS5',15, 650.99, 'Sony',8, 1,'Sony corp', 'Japan'),
(6200,'PS6',10, 990.99, 'Sony',8, 1,'Sony corp', 'Japan'),
/* Microsoft electronics */
(6300,'XBOX',10, 550.99, 'Microsoft',8, 1, "Microsoft Corp.", "USA"),
(6400,'XBOX360',15, 250.99, 'Microsoft',8, 1, "Microsoft Corp.", "USA" ),
(6500,'XBOX720',22, 770.99, 'Microsoft',8, 1, "Microsoft Corp.", "USA" );
=======
/* 
INSERT INTO inventory (code, name, quantity, price, category, department, inSTOCK, supplier, country, lastShipment, nextShipment)
VALUES
(4011,'Yellow Banana', 15, 3.99, 'Banana',1, 1, "Banana Corp", "Argentina", "2020-03-14 00:00:13", "2025-05-05 10:15:25"  ),  
(4022,'Plantain Banana', 5, 6.99, 'Banana',1, 1, "Banana Corp", "Argentina", "2020-03-14 00:00:13", "2025-05-05 10:15:25"),
(4033,'Blue Banana',15, 6.99, 'Banana',1, 1, "Banana Corp", "Argentina", "2020-03-14 00:00:13", "2025-05-05 10:15:25"),
(4044,'Brown Banana', 15, 4.99, 'Banana',1, 1, "Banana Corp", "Argentina", "2020-03-14 00:00:13", "2025-05-05 10:15:25"),
(4100,'Granny Smith Apples', 5, 6.99, 'Apples',1, 1, "Apple Corp", "Canada", "2020-03-14 00:00:13", "2025-05-05 10:15:25"),
(4200,'Red Delicious Apples', 15, 6.99, 'Apples',1, 1, "Apple Corp", "Canada", "2020-03-14 00:00:13", "2025-05-05 10:15:25"),
(4300,'PinkLady Apples', 35, 3.99, 'Apples',1, 1, "Apple Corp", "Canada", "2020-03-14 00:00:13", "2025-05-05 10:15:25"),
(4400,'HoneyCrisp Apples', 5, 6.99, 'Apples',1, 1, "Apple Corp", "Canada", "2020-03-14 00:00:13", "2025-05-05 10:15:25"),
(4500,'Fuji Apples', 51, 1.99, 'Apples',1, 1, "Apple Corp", "Canada", "2020-03-14 00:00:13", "2025-05-05 10:15:25"),
(4600,'Orange', 35, 6.99, 'Citrus',1, 1, "Citrus Corp", "USA", "2020-03-14 00:25:13", "2025-05-05 10:15:25"),
(4700,'Clementine',5, 6.99,'Citrus',1, 1, "Citrus Corp", "USA", "2020-03-14 00:25:13", "2025-05-05 10:15:25"),
(4800,'Lime',25,6.99,'Citrus',1, 1, "Citrus Corp", "USA", "2020-03-14 00:25:13", "2025-05-05 10:15:25"),
(4900,'Lemon',5,4.99, 'Citrus',1, 1, "Citrus Corp", "USA", "2020-03-14 00:25:13", "2025-05-05 10:15:25"),
(5000,'Tangerine',15,2.99, 'Citrus',1, 1, "Citrus Corp", "USA", "2020-03-14 00:25:13", "2025-05-05 10:15:25"),
(5100,'Grape Fruit',5, 4.99, 'Citrus',1, 1, "Citrus Corp", "USA", "2020-03-14 00:25:13", "2025-05-05 10:15:25"),
(6000,'PS4',10, 450.99, 'PlayStation',8, 1, "SONE Corp", "JAPAN", "2020-03-14 00:00:13", "2025-05-05 10:15:25"),
(6100,'PS5',15, 650.99, 'PlayStation',8, 1, "SONE Corp", "JAPAN", "2020-03-14 00:00:13", "2025-05-05 10:15:25"),
(6200,'PS6',10, 990.99, 'PlayStation',8, 1, "SONE Corp", "JAPAN", "2020-03-14 00:00:13", "2025-05-05 10:15:25"),
(6300,'XBOX',10, 550.99, 'XBOX',8, 1, "Micro Corp", "USA", "2020-03-14 00:00:13", "2025-05-05 10:15:25"),
(6400,'XBOX360',15, 250.99, 'XBOX',8, 1, "Micro Corp", "USA", "2020-03-14 00:00:13", "2025-05-05 10:15:25"),
(6500,'XBOX720',22, 770.99, 'XBOX',8, 1, "Micro Corp", "USA", "2020-03-14 00:00:13", "2025-05-05 10:15:25");
 */
>>>>>>> develop






/* INSERT INTO departments (name, description, extension, budget, sale, margin, trending)
VALUES
<<<<<<< HEAD
('Produce', 'Fruits, Vegetables, Fresh Smoothies, Etc.'),
('Retail Clothes', 'T-Shirts, Pants, Socks, Etc.'),
('Dairy', 'Milk, Yogurt, Cheese, Etc.'),
('Grocery', 'Pasta, Cookies, Flour, Etc.'),
('Meat', 'Ribs, Steak,Chicken-Breast, Etc.'),
('Seafood','Salmon, Trout, Squid, Etc.'),
('Babies and toddlers', 'Diapers, Toys, Strollers, Etc.'),
('Electronics', 'PS5, Headphones, Etc.');
=======
('Produce', 'Fruits, vegetables, Fresh Smoothies', 4002, 2140000, 'APPLES//BANANAS', 0.3, 'APPLES'),
('Clothing', 'T-Shirts, Pants, Socks', 4003, 290000, 'APPLES//BANANAS', 0.5, 'PANTS'),
('Dairy', 'Milk, Yogurt, Cheese', 4004, 2180000, 'MILK/CHEESE', 0.2, 'CHEESE'),
('Grocery', 'Pasta, Cookies, Flour', 4034, 2520000, 'PASTA/COOKIES', 0.7, 'PASTA'),
('Meat', 'Ribs, Steak,Ground-Beef', 4014, 2560000, 'STEAK/RIBS', 0.4, 'RIBS'),
('SeasFood','Salmon, Trout, Squid', 4054, 4250000, 'SQUID, TROUT', 0.3, 'SALMON'),
('Baby', 'Diapers, Toys, Pacifiers', 4032, 50000, 'TOYS/PACIFIERS', 0.2, 'DIAPERS'),
('Electronics', 'PS5, XBOX360, Wii', 4234, 1250000, 'XBOX/PS5', 3.4, 'PS5'); */
>>>>>>> develop


/* INSERT INTO roles (title, salary, department, responsibilities, positionType, reportsTo)
VALUES
<<<<<<< HEAD
('Produce Manager', 85000, 1),
('Retail Manager', 75000, 2),
('Dairy Manager', 65000, 3),
('Grocery Manager', 95000, 4),
('Meat Manager', 88000, 5),
('Seafood Manager', 68000, 6),
('Babies & Toddlers Manager', 59000, 7),
('Electronics Manager', 90000, 8),
('Produce Assistant Manager', 45000, 1),
('Retail Assistant Manager', 55000, 2),
('Dairy Assistant Manager', 35000, 3),
('Grocery Assistant Manager', 49000, 4),
('Meat Assistant Manager', 37000, 5),
('Seafood Assistant Manager', 49000, 6),
('Babies & toddlers Assistant Manager', 47000, 7),
('Electronics Assistant Manager', 37000, 8),
('Produce Employee', 25000, 1),
('Retail Employee', 25000, 2),
("Dairy Employee", 25000, 3),
('Grocery Employee', 25000, 4),
('Meat Employee', 25000, 5),
("Seafood Employee", 25000, 6),
('Babies & toddlers Employee', 25000, 7),
('Electronics Employee', 25000, 8);

/* [Produce,Retail, Dairy, Grocery, Meat, Seafood, Babies & Toddlers, Electronics] */
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Smith', 1, 1),
('Mike', 'Steven',2, 2)





=======
('Manager', 85000, 1, "WORK", 'FULL-TIME', 1),
('Assistant Manager', 45000, 1, "WORK", 'FULL-TIME', 1),
("Employee", 25000, 1, "WORK", 'FULL-TIME', 1),
('Manager', 75000, 2, "WORK", 'FULL-TIME', 1),
('Assistant Manager', 55000, 2, "WORK", 'FULL-TIME', 1),
("Employee", 25000, 2, "WORK", 'FULL-TIME', 1),
('Manager', 65000, 3, "WORK", 'FULL-TIME', 1),
('Assistant Manager', 35000, 3, "WORK", 'FULL-TIME', 1),
("Employee", 25000, 3, "WORK", 'FULL-TIME', 1),
('Manager', 95000, 4, "WORK", 'FULL-TIME', 1),
('Assistant Manager', 49000, 4, "WORK", 'FULL-TIME', 1),
("Employee", 25000, 4, "WORK", 'FULL-TIME', 1),
('Manager', 88000, 5, "WORK", 'FULL-TIME', 1),
('Assistant Manager', 37000, 5, "WORK", 'FULL-TIME', 1),
("Employee", 25000, 5, "WORK", 'FULL-TIME', 1),
('Manager', 68000, 6, "WORK", 'FULL-TIME', 1),
('Assistant Manager', 49000, 6, "WORK", 'FULL-TIME', 1),
("Employee", 25000, 6, "WORK", 'FULL-TIME', 1),
('Manager', 59000, 7, "WORK", 'FULL-TIME', 1),
('Assistant Manager', 47000, 7, "WORK", 'FULL-TIME', 1),
("Employee", 25000, 7, "WORK", 'FULL-TIME', 1),
('Manager', 90000, 8, "WORK", 'FULL-TIME', 1),
('Assistant Manager', 37000, 8, "WORK", 'FULL-TIME', 1),
("Employee", 25000, 8, "WORK", 'FULL-TIME', 1); */


INSERT INTO employees (employeeNumber, first_name, last_name, email, role_id, extension)
VALUES
(3305, 'Mike', 'Johnson', 'mJ@live.com', 3,147),
(3305, 'Mike', 'Johnson', 'mJ@live.com', 3,147),
(3305, 'Mike', 'Johnson', 'mJ@live.com', 3,147),
(3305, 'Mike', 'Johnson', 'mJ@live.com', 3,147)
>>>>>>> develop
