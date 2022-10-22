
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
('Electronics', 'PS5, XBOX360, Wii')