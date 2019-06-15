
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


DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `product_name` varchar(40) NOT NULL,
  `product_price` float(5,2) NOT NULL,
  `sex` enum('men', 'women') DEFAULT NULL,
  `description` varchar(100) NOT NULL,
  `image` varchar(50) NOT NULL,
  `count_available` int(11) NOT NULL DEFAULT '10',
  `rating` float (3, 2) DEFAULT 0,
  `category` enum('jeans', 'tshirts', 'pullovers', 'dresses') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `product_name` varchar(40) NOT NULL,
  `username` varchar(40) NOT NULL,
  `date_posted` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO products (product_name, product_price, sex, description, image, count_available, category) VALUES
('Stylish jeans', 145.99, 'men', 'Men jeans.', 'men_style_jeans.jpg', 5, 'jeans'),
('Elegant blue jeans', 162.99, 'men', 'The elegant men choice.', 'men_blue_jeans.webp', 4, 'jeans'),
('Ripped jeans', 136.99, 'men', 'Cool ripped jeans for men.', 'men_ripped_jeans.jpg', 6, 'jeans'),
('Dream pullover', 102.99, 'men', 'Warm pullover.', 'dream_pullover.jpg', 5, 'pullovers'),
('Grey pullover', 75.99, 'men', 'Casual grey pullover.', 'grey_pullover.jpg', 5, 'pullovers'),
('Black pullover', 67.99, 'men', 'Casual black pullover.', 'black_pullover.jpg', 3, 'pullovers'),
('Armani Tshirt', 130.99, 'men', 'Made to impress...', 'men_armani_shirt.jpg', 5, 'tshirts'),
('Blue Tshirt', 121.99, 'men', 'Casual Tshirt.', 'men_blue_shirt.jpg', 4, 'tshirts'),
('Sports Tshirt', 80.99, 'men', 'Keep the good shape and looks.', 'men_grey_shirt.jpg', 5, 'tshirts'),

('Indigo jeans', 112.99, 'women', 'The perfect choice.', 'women_indigo_jeans.jpg', 5, 'jeans'),
('Grey jeans with decorations', 172.99, 'women', 'Look beautiful.', 'women_grey_jeans.jpg', 3, 'jeans'),
('Cool ripped jeans', 157.99, 'women', 'Cool ripped jeans for women.', 'women_ripped_jeans.jpg', 2, 'jeans'),
('Red Tshirt', 94.99, 'women', 'Everyday Tshirt.', 'women_red_shirt.jpg', 5, 'tshirts'),
('White Tshirt', 109.99, 'women', 'Casual white Tshirt.', 'women_white_shirt.jpg', 3, 'tshirts'),
('Stripes Tshirt', 121.99, 'women', 'Casual blue Tshirt with stripes.', 'women_blue_shirt.jpg', 4, 'tshirts'),
('Pink Tshirt', 88.99, 'women', 'College-style pink Tshirt.', 'women_pink_shirt.jpg', 4, 'tshirts'),
('Pink dress', 180.99, 'women', 'Official pink dress.', 'pink_dress.jpg', 5, 'dresses'),
('Yellow dress', 120.99, 'women', 'Everyday dress.', 'yellow_dress.jpg', 2, 'dresses'),
('Elegant dress in two parts', 190.99, 'women', 'Draw all the attention with this dress.', 'white_pink_dress.jpg', 5, 'dresses');

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
