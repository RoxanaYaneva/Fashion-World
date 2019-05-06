
CREATE DATABASE fashiondb;
USE fashiondb;

CREATE USER 'fashiondbuser'@'%' IDENTIFIED BY 'fashiondbpass';
GRANT ALL PRIVILEGES ON fashiondb.* to 'fashiondbuser'@'%';
FLUSH PRIVILEGES;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `customer_name` varchar(40) NOT NULL,
  `customer_password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `customers` (`customer_id`, `customer_name`, `customer_password`) VALUES
(1, 'Maria Cholakova', 'Asdf1');


DROP TABLE IF EXISTS `men_products`;
CREATE TABLE `men_products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `product_name` varchar(40) NOT NULL,
  `product_price` float(5,2) NOT NULL,
  `description` varchar(100) NOT NULL,
  `image` varchar(50) NOT NULL,
  `count_available` int(11) NOT NULL DEFAULT '10',
  `rating` float (3, 2) DEFAULT 0,
  `category` enum('jeans', 'tshirts', 'pullovers') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `women_products`;
CREATE TABLE `women_products` (
  `product_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `product_name` varchar(40) NOT NULL,
  `product_price` float(5,2) NOT NULL,
  `description` varchar(100) NOT NULL,
  `image` varchar(50) NOT NULL,
  `count_available` int(11) NOT NULL DEFAULT '10',
  `rating` float (3, 2) DEFAULT 0,
  `category` enum('jeans', 'tshirts', 'dresses') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `product_name` varchar(40) NOT NULL,
  `username` varchar(40) NOT NULL,
  `date_posted` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO men_products (product_name, product_price, description, image, count_available, category) VALUES
('Stylish jeans', 145.99, 'Men jeans.', 'men_style_jeans.jpg', 5, 'jeans'),
('Elegant blue jeans', 162.99,  'The elegant men choice.', 'men_blue_jeans.webp', 4, 'jeans'),
('Ripped jeans', 136.99, 'Cool ripped jeans for men.', 'men_ripped_jeans.jpg', 6, 'jeans'),
('Dream pullover', 102.99, 'Warm pullover.', 'dream_pullover.jpg', 5, 'pullovers'),
('Grey pullover', 75.99, 'Casual grey pullover.', 'grey_pullover.jpg', 5, 'pullovers'),
('Black pullover', 67.99, 'Casual black pullover.', 'black_pullover.jpg', 3, 'pullovers'),
('Armani Tshirt', 130.99, 'Made to impress...', 'men_armani_shirt.jpg', 5, 'tshirts'),
('Blue Tshirt', 121.99, 'Casual Tshirt.', 'men_blue_shirt.jpg', 4, 'tshirts'),
('Sports Tshirt', 80.99, 'Keep the good shape and looks.', 'men_grey_shirt.jpg', 5, 'tshirts');

INSERT INTO women_products (product_name, product_price, description, image, count_available, category) VALUES
('Indigo jeans', 112.99, 'The perfect choice.', 'women_indigo_jeans.jpg', 5, 'jeans'),
('Grey jeans with decorations', 172.99,  'Look beautiful.', 'women_grey_jeans.jpg', 3, 'jeans'),
('Cool ripped jeans', 157.99, 'Cool ripped jeans for women.', 'women_ripped_jeans.jpg', 2, 'jeans'),
('Red Tshirt', 94.99, 'Everyday Tshirt.', 'women_red_shirt.jpg', 5, 'tshirts'),
('White Tshirt', 109.99, 'Casual white Tshirt.', 'women_white_shirt.jpg', 3, 'tshirts'),
('Pink Tshirt', 88.99, 'Casual pink Tshirt.', 'women_pink_shirt.jpg', 4, 'tshirts'),
('Pink dress', 180.99, 'Official pink dress.', 'pink_dress.jpg', 5, 'dresses'),
('Yellow dress', 120.99, 'Everyday dress.', 'yellow_dress.jpg', 2, 'dresses'),
('Elegant dress in two parts', 190.99, 'Draw all the attention with this dress.', 'white_pink_dress.jpg', 5, 'dresses');

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
