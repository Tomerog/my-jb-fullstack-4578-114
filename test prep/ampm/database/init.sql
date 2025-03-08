-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 07, 2025 at 05:05 PM
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
-- Database: `ampm`
--
CREATE DATABASE IF NOT EXISTS `ampm` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `ampm`;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
('245ae6fa-fb4a-11ef-affa-0242ac110002', 'beverages', '2025-03-07 11:48:43', '2025-03-07 11:48:43'),
('245aed14-fb4a-11ef-affa-0242ac110002', 'snacks', '2025-03-07 11:48:43', '2025-03-07 11:48:43'),
('f642c691-fb49-11ef-affa-0242ac110002', 'dairy', '2025-03-07 11:47:09', '2025-03-07 11:47:09'),
('f642cbf0-fb49-11ef-affa-0242ac110002', 'meat', '2025-03-07 11:47:09', '2025-03-07 11:47:09');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `production_time` datetime NOT NULL,
  `expiration_time` datetime NOT NULL,
  `category_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `production_time`, `expiration_time`, `category_id`, `price`, `created_at`, `updated_at`) VALUES
('b11f9c57-fb4a-11ef-affa-0242ac110002', 'pepsi max', '2025-03-07 11:49:29', '2025-03-07 11:49:29', '245ae6fa-fb4a-11ef-affa-0242ac110002', 9, '2025-03-07 11:49:29', '2025-03-07 11:49:29'),
('b11fa1a9-fb4a-11ef-affa-0242ac110002', 'milk', '2025-03-07 11:49:29', '2025-03-07 11:49:29', 'f642c691-fb49-11ef-affa-0242ac110002', 4, '2025-03-07 11:49:29', '2025-03-07 11:49:29'),
('b11faaba-fb4a-11ef-affa-0242ac110002', 'tapuchipes', '2025-03-07 11:49:29', '2025-03-07 11:49:29', '245aed14-fb4a-11ef-affa-0242ac110002', 4, '2025-03-07 11:49:29', '2025-03-07 11:49:29'),
('b11faf3c-fb4a-11ef-affa-0242ac110002', 'susig', '2025-03-07 11:49:29', '2025-03-07 11:49:29', 'f642cbf0-fb49-11ef-affa-0242ac110002', 6, '2025-03-07 11:49:29', '2025-03-07 11:49:29'),
('b11fb43a-fb4a-11ef-affa-0242ac110002', 'haburgur with da foot lettuc', '2025-03-07 11:49:29', '2025-03-07 11:49:29', 'f642cbf0-fb49-11ef-affa-0242ac110002', 420, '2025-03-07 11:49:29', '2025-03-07 11:49:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
