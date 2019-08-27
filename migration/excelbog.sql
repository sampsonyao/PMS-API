-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2019 at 10:28 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `excelbog`
--

-- --------------------------------------------------------

--
-- Table structure for table `sms_table`
--

CREATE TABLE `sms_table` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `branch` varchar(500) NOT NULL,
  `amount` text NOT NULL,
  `phone_number` text NOT NULL,
  `sent_date` datetime NOT NULL,
  `status` enum('pending','delivered','Not_delivered','') NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sms_table`
--

INSERT INTO `sms_table` (`id`, `name`, `branch`, `amount`, `phone_number`, `sent_date`, `status`) VALUES
(1, 'Name', 'Branch', 'customerID ', 'Number', '2019-08-09 09:18:46', 'Not_delivered'),
(2, 'Elijah Armah', 'Osu', '1000', '0209530095 / 0243732082', '2019-08-09 09:18:46', 'Not_delivered'),
(3, 'Armah Elijah', 'Osu', '1000', '0240245937 / 0244613976', '2019-08-09 09:18:46', 'Not_delivered'),
(4, 'Armah Jnr', 'Osu', '1000', '0572629666', '2019-08-09 09:18:46', 'pending'),
(5, 'Gibson Annor-antwi', 'Osu', '1000', '0273181588', '2019-08-09 09:18:46', 'pending'),
(6, 'Name', 'Branch', 'customerID ', 'Number', '2019-08-09 09:19:35', 'pending'),
(7, 'Elijah Armah', 'Osu', '1000', '0209530095 / 0243732082', '2019-08-09 09:19:35', 'pending'),
(8, 'Armah Elijah', 'Osu', '1000', '0240245937 / 0244613976', '2019-08-09 09:19:35', 'pending'),
(9, 'Armah Jnr', 'Osu', '1000', '0572629666', '2019-08-09 09:19:35', 'pending'),
(10, 'Gibson Annor-antwi', 'Osu', '1000', '0273181588', '2019-08-09 09:19:35', 'pending'),
(11, 'Name', 'Branch', 'customerID ', 'Number', '2019-08-09 09:21:44', 'pending'),
(12, 'Elijah Armah', 'Osu', '1000', '0209530095 / 0243732082', '2019-08-09 09:21:44', 'pending'),
(13, 'Armah Elijah', 'Osu', '1000', '0240245937 / 0244613976', '2019-08-09 09:21:44', 'pending'),
(14, 'Armah Jnr', 'Osu', '1000', '0572629666', '2019-08-09 09:21:44', 'pending'),
(15, 'Gibson Annor-antwi', 'Osu', '1000', '0273181588', '2019-08-09 09:21:44', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `table_1`
--

CREATE TABLE `table_1` (
  `COL 1` varchar(2853) DEFAULT NULL,
  `COL 2` varchar(614) DEFAULT NULL,
  `COL 3` varchar(41) DEFAULT NULL,
  `COL 4` varchar(189) DEFAULT NULL,
  `COL 5` varchar(15) DEFAULT NULL,
  `COL 6` varchar(13) DEFAULT NULL,
  `COL 7` varchar(18) DEFAULT NULL,
  `COL 8` varchar(18) DEFAULT NULL,
  `COL 9` varchar(23) DEFAULT NULL,
  `COL 10` varchar(14) DEFAULT NULL,
  `COL 11` varchar(34) DEFAULT NULL,
  `COL 12` varchar(13) DEFAULT NULL,
  `COL 13` varchar(23) DEFAULT NULL,
  `COL 14` varchar(10) DEFAULT NULL,
  `COL 15` varchar(17) DEFAULT NULL,
  `COL 16` varchar(39) DEFAULT NULL,
  `COL 17` varchar(16) DEFAULT NULL,
  `COL 18` varchar(382) DEFAULT NULL,
  `COL 19` varchar(219) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_info`
--

CREATE TABLE `tbl_info` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sms_table`
--
ALTER TABLE `sms_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_info`
--
ALTER TABLE `tbl_info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sms_table`
--
ALTER TABLE `sms_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `tbl_info`
--
ALTER TABLE `tbl_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
