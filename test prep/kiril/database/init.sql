-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 08, 2025 at 01:37 PM
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
-- Database: `kiril`
--
CREATE DATABASE IF NOT EXISTS `kiril` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `kiril`;

-- --------------------------------------------------------

--
-- Table structure for table `attractions`
--

CREATE TABLE `attractions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `region_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `price_adult` decimal(10,0) NOT NULL,
  `price_child` decimal(10,0) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `attractions`
--

INSERT INTO `attractions` (`id`, `name`, `description`, `region_id`, `price_adult`, `price_child`, `created_at`, `updated_at`) VALUES
('647fcb3f-fc1b-11ef-ab6a-0242ac110002', 'Hermon', 'snowy mountain', 'efce6081-fc1a-11ef-ab6a-0242ac110002', 20, 10, '2025-03-08 12:44:44', '2025-03-08 12:44:44'),
('647fd133-fc1b-11ef-ab6a-0242ac110002', 'kayakim', 'kayakim in the river', 'efce6081-fc1a-11ef-ab6a-0242ac110002', 50, 40, '2025-03-08 12:44:44', '2025-03-08 12:44:44'),
('647fd5d8-fc1b-11ef-ab6a-0242ac110002', 'metsuda', 'metsuda from the bible or smthing', 'efce70a4-fc1a-11ef-ab6a-0242ac110002', 15, 10, '2025-03-08 12:44:44', '2025-03-08 12:44:44'),
('647fda6e-fc1b-11ef-ab6a-0242ac110002', 'safari', 'see animals', 'efce6b13-fc1a-11ef-ab6a-0242ac110002', 60, 50, '2025-03-08 12:44:44', '2025-03-08 12:44:44'),
('647fe02a-fc1b-11ef-ab6a-0242ac110002', 'central station tel aviv', 'we lost some people there during a class trip. not advisable', 'efce6b13-fc1a-11ef-ab6a-0242ac110002', 0, 0, '2025-03-08 12:44:44', '2025-03-08 12:44:44');

-- --------------------------------------------------------

--
-- Table structure for table `regions`
--

CREATE TABLE `regions` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `regions`
--

INSERT INTO `regions` (`id`, `name`, `created_at`, `updated_at`) VALUES
('efce6081-fc1a-11ef-ab6a-0242ac110002', 'north', '2025-03-08 12:43:14', '2025-03-08 12:43:14'),
('efce6b13-fc1a-11ef-ab6a-0242ac110002', 'center', '2025-03-08 12:43:14', '2025-03-08 12:43:14'),
('efce70a4-fc1a-11ef-ab6a-0242ac110002', 'south', '2025-03-08 12:43:14', '2025-03-08 12:43:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attractions`
--
ALTER TABLE `attractions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `region_id` (`region_id`);

--
-- Indexes for table `regions`
--
ALTER TABLE `regions`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attractions`
--
ALTER TABLE `attractions`
  ADD CONSTRAINT `attractions_ibfk_1` FOREIGN KEY (`region_id`) REFERENCES `regions` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
