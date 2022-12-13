
/* Adding values in inventory Data */


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







INSERT INTO departments (name, description)
VALUES
('Produce', 'Fruits, Vegetables, Fresh Smoothies, Etc.'),
('Retail Clothes', 'T-Shirts, Pants, Socks, Etc.'),
('Dairy', 'Milk, Yogurt, Cheese, Etc.'),
('Grocery', 'Pasta, Cookies, Flour, Etc.'),
('Meat', 'Ribs, Steak,Chicken-Breast, Etc.'),
('Seafood','Salmon, Trout, Squid, Etc.'),
('Babies and toddlers', 'Diapers, Toys, Strollers, Etc.'),
('Electronics', 'PS5, Headphones, Etc.');


INSERT INTO roles (title, salary, department)
VALUES
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





