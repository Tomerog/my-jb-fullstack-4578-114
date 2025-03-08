-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 05, 2025 at 01:56 PM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ikea`
--
CREATE DATABASE IF NOT EXISTS `ikea` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `ikea`;

-- --------------------------------------------------------

--
-- Table structure for table `furniture`
--

CREATE TABLE `furniture` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `type_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `dimension` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `furniture`
--

INSERT INTO `furniture` (`id`, `type_id`, `size`, `color`, `price`, `created_at`, `updated_at`) VALUES
('604af5b2-f9c9-11ef-bd0d-0242ac110002', 'df6f5e3c-f9c8-11ef-bd0d-0242ac110002', '11x50x10', 'yellow', 2, '2025-03-05 13:51:16', '2025-03-05 13:51:16'),
('604afc17-f9c9-11ef-bd0d-0242ac110002', 'df6f5e3c-f9c8-11ef-bd0d-0242ac110002', '20x30', 'purple', 200, '2025-03-05 13:51:16', '2025-03-05 13:51:16'),
('604b016e-f9c9-11ef-bd0d-0242ac110002', 'df6f5e3c-f9c8-11ef-bd0d-0242ac110002', '50x60x90', 'green', 1231, '2025-03-05 13:51:16', '2025-03-05 13:51:16'),
('604b060f-f9c9-11ef-bd0d-0242ac110002', 'df6f53c8-f9c8-11ef-bd0d-0242ac110002', '30x60', 'white', 5, '2025-03-05 13:51:16', '2025-03-05 13:51:16'),
('604b0a98-f9c9-11ef-bd0d-0242ac110002', 'df6f59cc-f9c8-11ef-bd0d-0242ac110002', '20x90x100', 'black', 80, '2025-03-05 13:51:16', '2025-03-05 13:51:16'),
('604b0f18-f9c9-11ef-bd0d-0242ac110002', 'df6f628d-f9c8-11ef-bd0d-0242ac110002', '60x90', 'red', 600, '2025-03-05 13:51:16', '2025-03-05 13:51:16');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `type` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `type`, `created_at`, `updated_at`) VALUES
('df6f53c8-f9c8-11ef-bd0d-0242ac110002', 'desk', '2025-03-05 13:50:01', '2025-03-05 13:50:01'),
('df6f59cc-f9c8-11ef-bd0d-0242ac110002', 'chair', '2025-03-05 13:50:01', '2025-03-05 13:50:01'),
('df6f5e3c-f9c8-11ef-bd0d-0242ac110002', 'couch', '2025-03-05 13:50:01', '2025-03-05 13:50:01'),
('df6f628d-f9c8-11ef-bd0d-0242ac110002', 'closet', '2025-03-05 13:50:01', '2025-03-05 13:50:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `furniture`
--
ALTER TABLE `furniture`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_id` (`type_id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `furniture`
--
ALTER TABLE `furniture`
  ADD CONSTRAINT `furniture_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `types` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
