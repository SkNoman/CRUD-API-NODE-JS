-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2023 at 12:19 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `carlist`
--

CREATE TABLE `carlist` (
  `id` int(10) NOT NULL,
  `carId` int(10) NOT NULL,
  `carName` varchar(100) NOT NULL,
  `carType` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `carlist`
--

INSERT INTO `carlist` (`id`, `carId`, `carName`, `carType`) VALUES
(1, 1, 'Audi', 'Sedan'),
(2, 2, 'BMW', 'Avant'),
(3, 3, 'Chevrolet', 'Pickup'),
(4, 4, 'Dutson', 'Racing'),
(5, 5, 'Elentra', 'Sedan'),
(6, 6, 'Ford', 'Sedan'),
(7, 7, 'G.M', 'Off Road'),
(8, 8, 'Honda', 'Sport'),
(9, 9, 'Infinity', 'Sedan'),
(10, 10, 'Jaguar', 'Sedan'),
(11, 11, 'KIA', 'Sedan'),
(12, 12, 'Lexus', 'Luxary Sedan');

-- --------------------------------------------------------

--
-- Table structure for table `maintenanceinfo`
--

CREATE TABLE `maintenanceinfo` (
  `inMaintenance` tinyint(1) NOT NULL DEFAULT 0,
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `maintenanceinfo`
--

INSERT INTO `maintenanceinfo` (`inMaintenance`, `startTime`, `endTime`) VALUES
(0, '2023-01-27 15:36:49', '2023-01-27 15:36:49');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `phone` int(11) NOT NULL,
  `password` varchar(8) NOT NULL,
  `username` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `phone`, `password`, `username`) VALUES
(1, 1718228277, '123456', 'Atik'),
(2, 1717227277, '123456', 'Baqi'),
(3, 171722727, '123456', 'Chinmoy'),
(4, 171722727, '123456', 'DK'),
(5, 171722727, '123456', 'Enni'),
(6, 171722727, '123456', 'Farin'),
(7, 171722727, '123456', 'Gian'),
(8, 17172272, '123456', 'Himel'),
(9, 17172272, '123456', 'Ian'),
(10, 17172272, '123456', 'Jerin'),
(11, 1718228244, '123456', 'Koly');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carlist`
--
ALTER TABLE `carlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carlist`
--
ALTER TABLE `carlist`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
