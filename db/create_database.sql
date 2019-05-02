
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


CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `customer_name` varchar(40) NOT NULL,
  `customer_password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `customers` (`customer_id`, `customer_name`, `customer_password`) VALUES
(1, 'Maria Cholakova', 'Asdf1');


CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_price` float(5,2) NOT NULL,
  `product_name` varchar(40) NOT NULL,
  `count_available` int(11) NOT NULL DEFAULT '30',
  `product_sex` enum('m','f') DEFAULT NULL,
  `description` varchar(100) NOT NULL,
  `image` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `products` (`product_id`, `product_price`, `product_name`, `count_available`, `product_sex`, `description`, `image`) VALUES
(1, 156.99, 'GUESS dress', 2, 'f', 'Such a beautiful dess!', 'https://lumiere-a.akamaihd.net/v1/images/file_be6334f7.jpeg?width=1200&region=0%2C0%2C2000%2C2000&quality=8'),
(2, 8.99, 'Roberto Cavalli shirt', 3, 'm', 'Men\'s shirt.', 'https://5.imimg.com/data5/WI/EB/MY-45054986/boys-designer-shirts-500x500.jpg'),
(3, 172.99, 'Red blouse', 4, 'f', 'Red blouse with short sleeves.', 'https://pngimage.net/wp-content/uploads/2018/05/blouse-png-3.png'),
(4, 34.99, 'Denim jeans', 1, 'f', 'Dolce & Gabbana jeans!', 'https://webiconspng.com/wp-content/uploads/2017/09/Jeans-PNG-Image-44263.png'),
(5, 52.99, 'Pink jeans', 5, 'f', 'Lovely pink jeans!', 'https://cdn.shopify.com/s/files/1/1110/1732/products/Chet_Rock_Pink_grande.png?v=1490631055'),
(6, 158.99, 'White blouse', 2, 'f', 'White blouse for every occasion.', 'https://static1.squarespace.com/static/5b26a5ef25bf0296b641458a/t/5bfe29d6352f5323e24c058f/1543383583232/blouse.png'),
(7, 33.99, 'Glittery dress', 3, 'f', 'Glittery pink dress!', 'https://cdn.shopify.com/s/files/1/2605/6882/products/product-image-442076407_530x@2x.jpg?v=1521459033'),
(8, 91.99, 'Stylish jeans', 3, 'm', 'Men\'s jeans.', 'https://vignette.wikia.nocookie.net/play-rust/images/3/3f/Pants_icon.png/revision/latest?cb=20150821195647'),
(9, 153.99, 'Adidas jacket', 1, 'f', 'Addidas sports jacket!', 'http://jordelsport.com/userfiles/productimages/product_5111.jpg'),
(10, 90.99, 'Black coat', 3, 'f', 'Winter coat which will keep you warm.', 'https://thehipsterhive.com/wp-content/uploads/2018/09/7687-2a535e-600x600.jpg'),
(11, 193.99, 'Hello Kitty shirt', 2, 'f', 'Hello Kitty T-Shirt!', 'https://www.symbios.pk/image/cache/data/h/Hello%20Kitty%20White%20Women%20T-Shirt-500x500.JPG'),
(12, 91.99, 'Dalas review shirt', 3, 'm', 'Men\'s T-Shirt.', 'https://www.pngarts.com/files/3/T-Shirt-PNG-Image-Background.png'),
(13, 75.99, 'Leather jacket', 4, 'm', 'Men\'s leather jacket.', 'https://4.imimg.com/data4/VW/KT/MY-17715579/mens-leather-jacket-500x500.jpg'),
(14, 104.99, 'Blue skirt', 1, 'f', 'Women\'s skirt in blue.', 'http://www.eyesofthewildtattoostudio.com/image/cache/data/category_3/max-and-co-women-calamaio-skirt-an-essential-item-in-the-closet-ma646aa96eyp-ouvhovf-4028-500x500.jpg'),
(15, 91.99, 'Everyday jeans', 5, 'm', 'Men\'s jeans in black.', 'https://media.dcshoes-newzealand.co.nz/media/catalog/product/cache/thumbnail/500x500/9df78eab33525d08d6e5fb8d27136e95/e/d/edydp03383_dc_mens_worker_slim_denim_jeans_kvjw_1_h.jpg');

ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);


ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `product_name` (`product_name`);

ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;


ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
