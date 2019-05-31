<!DOCTYPE html>
<html>
	<head>
		<title>MAESTRO Restaurant</title>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="http://maestro.loc/css/style.css">
		<meta name="keywords" content="">
		<meta name="description" content="">
		<!-- <link rel="stylesheet" media="screen and (max-width:1024px)" type="text/css" href="css/mobile.css">
		<link rel="stylesheet" media="screen and (min-width:1025px)" type="text/css" href="css/desktop.css"> -->
	</head>
	<body>
		<header class="shadow">
			<a href="/" class="nav-link">
				<img class="nav-logo" src="http://maestro.loc/logo.png" alt="Restaurant">
			</a>
			<nav class="nav-bar">
				<a href="/menu" class="nav-link">Наше меню</a>
				<a href="/gallery" class="nav-link">Галерея</a>
				<a href="/booking" class="nav-link">Бронирование столика</a>
				<a href="/contacts" class="nav-link">Контакты</a>
			</nav>
			<div class="burger-menu">
				<div class="burger">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div class="burger-link-list">
					<a href="/menu" class="nav-link">Наше меню</a>
					<a href="/gallery" class="nav-link">Галерея</a>
					<a href="/booking" class="nav-link">Бронирование столика</a>
					<a href="/contacts" class="nav-link">Контакты</a>
				</div>
			</div>
		</header>
		<form id="search" onsubmit="location.href = '/search#' + this.query.value; return false;">
			<input class="shadow-lowleft" type="text" name="query" placeholder="Поиск">
			<input class="shadow-lowright" type="submit" value="&#10148;">
		</form>
		<main>
			<div class="error">404</div>
		</main>
	</body>
</html>