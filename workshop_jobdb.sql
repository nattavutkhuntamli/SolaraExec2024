-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 13, 2023 at 07:37 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `workshop_jobdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id` int NOT NULL,
  `username` varchar(150) NOT NULL COMMENT 'username',
  `password` varchar(255) NOT NULL,
  `fullname` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(13) NOT NULL,
  `create_at` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_education`
--

CREATE TABLE `tbl_education` (
  `edu_id` mediumint NOT NULL COMMENT 'รหัสของข้อมูล',
  `resume_id` mediumint NOT NULL COMMENT 'รหัสของ resume ที่เชื่อมโยงกัน',
  `level` varchar(100) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ระดับการศึกษา',
  `academy` varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ชื่อสถานบันการศึกษา',
  `major` varchar(150) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'สาขาวิชาที่ศึกษา'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='tbl_education .ใช้เก็บข้อมูลประวัติการศึกษา';

-- --------------------------------------------------------

--
-- Table structure for table `tbl_experience`
--

CREATE TABLE `tbl_experience` (
  `exp_id` mediumint NOT NULL COMMENT 'รหัสของข้อมูลในแถวนั้น',
  `resume_id` mediumint NOT NULL COMMENT 'รหัสของ resume ที่เชื่อมกับ tbl_resume',
  `position` varchar(150) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ตำแหน่งงานที่เคยทำ',
  `workplace` varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ชื่อหน่วยงานที่เคยทำ',
  `period` varchar(30) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'ระยะเวลาที่เคยทำ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='tbl_experience ใช้เก็บข้อมูลประสบกาณ์ทำงาน ';

-- --------------------------------------------------------

--
-- Table structure for table `tbl_image`
--

CREATE TABLE `tbl_image` (
  `resume_id` mediumint NOT NULL COMMENT 'รหัสของ resume',
  `img_content` varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'เก็บชื่อรูปภาพ'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='tbl_image เก็บชื่อรูปภาพ';

-- --------------------------------------------------------

--
-- Table structure for table `tbl_jobs`
--

CREATE TABLE `tbl_jobs` (
  `job_id` int NOT NULL,
  `position` varchar(150) NOT NULL COMMENT 'ตำแหน่งงาน',
  `quantity` bigint NOT NULL DEFAULT '0' COMMENT 'จำนวน(อัตรา) ที่รับ',
  `description` text NOT NULL COMMENT 'รายละเอียดของงาน',
  `status` varchar(20) NOT NULL COMMENT 'สถานะที่เปิด หรือ ปิด',
  `date_post` date NOT NULL COMMENT 'วันเดือนปีที่ประกาศ',
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_jobs`
--
ALTER TABLE `tbl_jobs`
  ADD PRIMARY KEY (`job_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_jobs`
--
ALTER TABLE `tbl_jobs`
  MODIFY `job_id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
