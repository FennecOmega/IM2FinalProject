-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2023 at 04:33 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bananadb`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `fname` varchar(50) DEFAULT NULL,
  `midname` varchar(50) DEFAULT NULL,
  `lname` varchar(50) DEFAULT NULL,
  `contact_no` varchar(15) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `fname`, `midname`, `lname`, `contact_no`, `birthdate`, `address`) VALUES
(1, 'von', NULL, 'manginsay', '12345678', '2003-11-05', 'Address Address');

--
-- Triggers `customer`
--
DELIMITER $$
CREATE TRIGGER `add_user_on_customer_staff_insert` AFTER INSERT ON `customer` FOR EACH ROW BEGIN
    INSERT INTO `user` (`user_type`, `id_no`, `email`, `password`)
    VALUES ('Customer', NEW.`customer_id`, NULL, NULL);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `inventory_id` int(11) NOT NULL,
  `item_type` enum('product','ingredient','miscellaneous') DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `staff_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`inventory_id`, `item_type`, `product_id`, `supplier_id`, `staff_id`, `quantity`) VALUES
(4, NULL, 45, NULL, NULL, NULL),
(5, NULL, 46, NULL, NULL, NULL),
(6, NULL, 47, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `Order_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `transaction_date` datetime DEFAULT NULL,
  `completion_date` datetime DEFAULT NULL,
  `ArrayOfProduct` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`ArrayOfProduct`)),
  `payment_method` enum('Gcash','Onsite') DEFAULT NULL,
  `total_price` decimal(10,2) DEFAULT NULL,
  `order_status` enum('PENDING','APPROVED','CANCELLED') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Triggers `order`
--
DELIMITER $$
CREATE TRIGGER `set_completion_date` AFTER UPDATE ON `order` FOR EACH ROW BEGIN
    IF NEW.order_status = 'APPROVED' THEN
        UPDATE `order` SET completion_date = NOW() WHERE order_id = NEW.order_id;
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_desc` varchar(255) DEFAULT NULL,
  `product_image_url` varchar(255) DEFAULT NULL,
  `unit_price` decimal(10,2) DEFAULT NULL,
  `expiry_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_desc`, `product_image_url`, `unit_price`, `expiry_date`) VALUES
(45, 'Banana Cupcake', 'Banana Cupcake for the family', 'https://tornadoughalli.com/wp-content/uploads/2021/12/BANANA-CUPCAKES-4-1.jpg', 75.00, '0000-00-00'),
(46, 'Banana Bread', 'Banana Bread for the family', 'https://www.superhealthykids.com/wp-content/uploads/2019/07/healthy-banana-bread-featured-image-2.jpg', 50.00, '2023-12-25'),
(47, 'Banana Split', 'Banana Split for the family', 'https://static.toiimg.com/thumb/52500416.cms?imgsize=1164165&width=800&height=800', 135.00, '2023-12-25');

-- --------------------------------------------------------

--
-- Table structure for table `receipt`
--

CREATE TABLE `receipt` (
  `receipt_no` int(11) NOT NULL,
  `approver_name` varchar(255) DEFAULT NULL,
  `transaction_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `customer_id` int(11) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `payment_method` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Triggers `receipt`
--
DELIMITER $$
CREATE TRIGGER `approve_order_on_receipt_creation` AFTER INSERT ON `receipt` FOR EACH ROW BEGIN
    UPDATE `order`
    SET order_status = 'APPROVED'
    WHERE order_id = NEW.order_id AND order_status = 'PENDING';
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `staff_id` int(11) NOT NULL,
  `fname` varchar(50) DEFAULT NULL,
  `mname` varchar(50) DEFAULT NULL,
  `lname` varchar(50) DEFAULT NULL,
  `residence` varchar(255) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `staff_status` enum('active','inactive') DEFAULT NULL,
  `staff_type` enum('inventory','accounting','admin') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`staff_id`, `fname`, `mname`, `lname`, `residence`, `birthdate`, `staff_status`, `staff_type`) VALUES
(1, 'kenneth', 'john', 'cantillas', 'address address', '2003-09-15', 'active', 'admin'),
(2, 'Phillip', 'Isidro', 'Go', 'Address Address', '2003-11-05', 'active', 'admin');

--
-- Triggers `staff`
--
DELIMITER $$
CREATE TRIGGER `add_user_on_staff_insert` AFTER INSERT ON `staff` FOR EACH ROW BEGIN
    INSERT INTO `user` (`user_type`, `id_no`, `email`, `password`)
    VALUES ('Staff', NEW.`staff_id`, NULL, NULL);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE `supplier` (
  `supplier_id` int(11) NOT NULL,
  `supplier_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact_no` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`supplier_id`, `supplier_name`, `email`, `contact_no`, `address`) VALUES
(1, 'Matthea Trina Borromeo', 'mattheatrina@gmail.com', '12345678', 'Address Address');

-- --------------------------------------------------------

--
-- Table structure for table `supplyorder`
--

CREATE TABLE `supplyorder` (
  `SupplyOrder_ID` int(11) NOT NULL,
  `staff_id` int(11) DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `order_status` enum('Pending','Complete') DEFAULT NULL,
  `ArrayOfProduct` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`ArrayOfProduct`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_type` enum('Staff','Customer') DEFAULT NULL,
  `id_no` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_type`, `id_no`, `email`, `password`) VALUES
(1, 'Staff', 1, 'kennethcantillas@gmail.com', '$2a$10$KjTyNVtgoAIxE0skR4Mimu0bbiBx9Gzw1QAuJhtWIubfuzq8ymfTK'),
(2, 'Staff', 2, 'phillipgo@gmail.com', '$2a$10$6mMAQzBsw5BhzIMfMNJLU.xRpXjLYTdjnW.4MjZJ0WinwoI1N5fTe'),
(11, 'Customer', 1, 'vonmanginsay@gmail.com', '$2a$12$ezuwVZixlnXBAOxAKVKNtu.27qlFVp5WlTk7G6jd9K1N85tWOQXjK');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`inventory_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `supplier_id` (`supplier_id`),
  ADD KEY `inventory_ibfk_3` (`staff_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`Order_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `receipt`
--
ALTER TABLE `receipt`
  ADD PRIMARY KEY (`receipt_no`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`staff_id`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`supplier_id`);

--
-- Indexes for table `supplyorder`
--
ALTER TABLE `supplyorder`
  ADD PRIMARY KEY (`SupplyOrder_ID`),
  ADD KEY `staff_id` (`staff_id`),
  ADD KEY `supplier_id` (`supplier_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `inventory_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `Order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `receipt`
--
ALTER TABLE `receipt`
  MODIFY `receipt_no` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `staff_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `supplier_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `supplyorder`
--
ALTER TABLE `supplyorder`
  MODIFY `SupplyOrder_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `inventory_ibfk_2` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`supplier_id`),
  ADD CONSTRAINT `inventory_ibfk_3` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`staff_id`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`);

--
-- Constraints for table `receipt`
--
ALTER TABLE `receipt`
  ADD CONSTRAINT `receipt_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  ADD CONSTRAINT `receipt_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `order` (`Order_id`);

--
-- Constraints for table `supplyorder`
--
ALTER TABLE `supplyorder`
  ADD CONSTRAINT `supplyorder_ibfk_1` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`staff_id`),
  ADD CONSTRAINT `supplyorder_ibfk_2` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`supplier_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
