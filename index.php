<!DOCTYPE html>
<html>
	<head>
		<title>MAESTRO Restaurant</title>
		<meta charset="utf-8">
		<meta name="keywords" content="">
		<meta name="description" content="">
		<link rel="stylesheet" media="screen and (max-width:1024px)" type="text/css" href="http://maestro.loc/css/mobile.css">
		<link rel="stylesheet" media="screen and (min-width:1025px)" type="text/css" href="http://maestro.loc/css/style.css">
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
			</div>
		</header>
		<div class="burger-link-list">
			<ul>
				<li><a href="/menu" class="nav-link">Наше меню</a></li>
				<li><a href="/gallery" class="nav-link">Галерея</a></li>
				<li><a href="/booking" class="nav-link">Бронирование столика</a></li>
				<li><a href="/contacts" class="nav-link">Контакты</a></li>
			</ul>
		</div>
		<form id="search" onsubmit="location.href = '/search#' + this.query.value; return false;">
			<input class="shadow-lowleft" type="text" name="query" placeholder="Поиск">
			<input class="shadow-lowright" type="submit" value="&#10148;">
		</form>
		<?
			if(!$_GET['page'] || $_GET['page'] == '') {
				include('view/main.html');
			} else {
				include('view/'.$_GET['page'].'.html');
			}
		?>
		<script type="text/javascript" src="http://maestro.loc/js/popup.js"></script>
		<script type="text/javascript">
			document.getElementsByClassName('burger-menu')[0].addEventListener('click',function(){
				switch (this.className){
					case 'burger-menu':{
						this.className = 'burger-menu-open';
						this.parentNode.nextElementSibling.className = 'burger-link-list-open'; 
					}; break;
					case 'burger-menu-open':{
						this.className = 'burger-menu';
						this.parentNode.nextElementSibling.className = 'burger-link-list'; 
					}; break;
				}
			});
		</script>
	</body>
</html>