-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Čtv 04. pro 2025, 16:22
-- Verze serveru: 10.4.32-MariaDB
-- Verze PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `orderdatabase`
--
CREATE DATABASE IF NOT EXISTS `orderdatabase` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `orderdatabase`;

-- --------------------------------------------------------

--
-- Struktura tabulky `product`
--

CREATE TABLE IF NOT EXISTS  `product` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `unit_price` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `product`
--

INSERT INTO `product` (`id`, `description`, `name`, `unit_price`) VALUES
(1, 'Stylový keramický hrnek s motivem kočky, vhodný do kanceláře i domova.', 'Keramický hrnek Kočka', 189),
(2, 'Malá aroma svíčka s vůní levandule pro příjemné večery.', 'Aroma svíčka Levandule', 79),
(3, 'Elegantní zápisník s tvrdými deskami a kvalitním papírem.', 'Zápisník Elegant', 149),
(4, 'Bavlněné ponožky s barevným puntíkovým motivem, balení 3 ks.', 'Ponožky Puntíky', 129),
(5, 'Malá pokojová rostlina v keramickém květináči.', 'Mini rostlina', 249),
(6, 'Nerezová láhev na vodu s 500ml objemem.', 'Láhev na vodu', 329),
(7, 'Dekorativní polštář s geometrickým vzorem.', 'Polštář Geometrie', 299),
(8, 'Sada tří ručně malovaných talířů.', 'Talíře Sada 3', 459),
(9, 'Dřevěný stojan na tužky, ruční výroba.', 'Stojan na tužky', 99),
(10, 'Měkká deka z mikrovlákna, ideální na chladné večery.', 'Deka Mikrovlákno', 349),
(11, 'Parfémovaná svíčka s jemnou vanilkovou vůní.', 'Parfémovaná svíčka Vanilka', 179),
(12, 'Lehká sportovní kapsa vhodná na běhání nebo do posilovny.', 'Sportovní kapsa', 159),
(13, 'Sada pěti čajových hrnků s originálním designem.', 'Čajové hrnky Sada 5', 399),
(14, 'Ručně vyráběný náramek z korálků.', 'Náramek Korálky', 89),
(15, 'Sada deseti pohlednic s autorskými ilustracemi přírody.', 'Pohlednice Příroda', 129);




/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
