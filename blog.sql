-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-01-2022 a las 23:07:05
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(3, '2022_01_24_194824_crear_tabla_posts', 1),
(4, '2022_01_24_212631_nuevo_campo_post', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `titulo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contenido` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `titulo`, `contenido`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'Possimus est saepe ipsum mollitia.', 'Reiciendis voluptate dolorem reiciendis a exercitationem est placeat numquam. Repellat cumque sit similique. Voluptatibus non sit iure hic et. Ut nostrum aperiam minima.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 1),
(2, 'Temporibus deserunt nostrum blanditiis repudiandae laudantium labore nihil.', 'Quia molestiae vero fuga enim est dolor libero. Fugiat delectus veniam non non voluptatum est. Ipsum dolores quo placeat vel a. Eum et qui est odit.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 4),
(3, 'Vero sed incidunt aut et velit.', 'Qui sit aliquam nihil ex. Et dignissimos mollitia quia ut. Saepe ut sed amet laudantium laudantium aut dignissimos accusantium. Pariatur sequi quibusdam ea. Repudiandae et itaque impedit.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 2),
(4, 'Dicta qui et natus aspernatur ducimus officia.', 'Molestiae fugiat quo mollitia id. Aspernatur quis nostrum asperiores corporis. Odit aliquid quos magni eaque eos. Sit vel non in.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 4),
(5, 'Et ut ut ratione sint qui.', 'Id dolor non nulla pariatur consequatur odio dolorem. Temporibus modi consequatur dolorem recusandae. Enim natus sit sint mollitia amet.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 2),
(6, 'Dolore sit qui autem et quo qui corrupti.', 'Cumque eveniet explicabo sed occaecati ut et. Accusantium quis delectus laboriosam ipsam voluptas et. Molestiae nihil impedit quo quia quia incidunt eum repellendus.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 3),
(7, 'Totam repellat quas voluptate.', 'Ullam sit veniam ut in alias nostrum. Nesciunt unde sed dolores assumenda alias ad culpa dignissimos. Eius quasi consequatur eveniet voluptatem dolorem quia. Saepe et cumque nobis modi.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 4),
(8, 'Molestiae id quos voluptatem earum non odio dolore quae.', 'Placeat porro et aut enim. Aliquam sed et ut eum. Unde hic voluptatem tempore dolorem.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 2),
(9, 'Error velit consequatur nihil velit voluptatum itaque.', 'Quos numquam voluptas eligendi laboriosam sapiente. Eum modi eveniet et aut. Dignissimos dolores labore ipsam.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 4),
(10, 'Debitis eveniet quidem similique aut.', 'Officia explicabo excepturi tenetur non rem voluptatem dolore. Quia ut assumenda ut reiciendis. Reiciendis soluta voluptatem eos modi et iusto. Officiis quae consequatur porro perferendis.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 2),
(11, 'Neque tempora nesciunt commodi nemo rem ut.', 'Dicta blanditiis quia cumque corrupti assumenda et aspernatur. Consequatur qui necessitatibus accusamus et eveniet.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 1),
(12, 'Saepe ab illum doloribus eos nam voluptatem.', 'Ea beatae ab sit minima delectus perspiciatis dolores. Eveniet asperiores necessitatibus similique impedit.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 1),
(13, 'Praesentium unde sint deleniti rem quaerat vero dolor.', 'Et dolor enim delectus perspiciatis. Officia at natus quae et. Iusto in quia et maxime aspernatur sapiente sit. Dolor aut accusamus officiis ut ut ex.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 5),
(14, 'A dolor inventore itaque iure.', 'Id laboriosam fugit sit cum quam repudiandae. Animi similique asperiores enim vero distinctio quidem aut.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 2),
(15, 'Impedit placeat est temporibus enim iusto quisquam rerum.', 'Reiciendis ut est temporibus magni voluptatum amet. Aut deserunt maxime sit recusandae aut quod.', '2022-01-24 21:03:49', '2022-01-24 21:03:49', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `login` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `created_at`, `updated_at`) VALUES
(1, 'illo', '1234', '2022-01-24 21:03:49', '2022-01-24 21:03:49'),
(2, 'eum', '1234', '2022-01-24 21:03:49', '2022-01-24 21:03:49'),
(3, 'tempore', '1234', '2022-01-24 21:03:49', '2022-01-24 21:03:49'),
(4, 'veritatis', '1234', '2022-01-24 21:03:49', '2022-01-24 21:03:49'),
(5, 'dolorem', '1234', '2022-01-24 21:03:49', '2022-01-24 21:03:49');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_login_unique` (`login`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
