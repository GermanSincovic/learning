var menu_data = [
	{
		"name":"italiano",
		"title":"Итальянская кухня",
		"keywords":"Настощая итальянская кухня",
		"description":"Итальянское меню ресторана Маестро",
		"role":"category",
		"parent":"menu",
		"ingredients":"",
		"price":"",
		"img": "img/noimg.png"
	},
	{
		"name":"steaks",
		"title":"Мясные стейки",
		"keywords":"Настощая итальянские стейки",
		"description":"Итальянские мясные стейки ресторана Маестро",
		"parent":"italiano",
		"role":"category",
		"ingredients":"",
		"price":"",
		"img": "img/noimg.png"
	},
	{
		"name":"Стейк «Джотто»",
		"title":"Стейк «Джотто»",
		"keywords":"",
		"description":"",
		"parent":"steaks",
		"role":"item",
		"ingredients":[ "Шейный отруб", "Запеченне овощи", "Перечным соусом" ],
		"price":"220$",
		"img": "img/noimg.png"
	},
	{
		"name":"Стейк «Ти-бон»",
		"title":"Стейк «Ти-бон»",
		"keywords":"",
		"description":"",
		"parent":"steaks",
		"role":"item",
		"ingredients":[ "TOP SECRET" ],
		"price":"290$",
		"img": "img/noimg.png"
	},
	{
		"name":"pizza",
		"title":"Пицца",
		"keywords":"Настощая итальянская пицца",
		"description":"Итальянская пицца ресторана Маестро",
		"parent":"italiano",
		"role":"category",
		"ingredients":"",
		"price":"",
		"img":"img/food/1.jpeg"
	},
	{
	    "name": "4 СЫРА",
	    "title": "4 СЫРА",
	    "keywords": "",
	    "description": "",
	    "parent": "pizza",
	    "role": "item",
	    "ingredients": ["Сыр “гауда”","сыр “моцарелла”","сыр “горгонзола”","сыр “пармезан”","сливочный соус"],
	    "price": "75.00 грн",
	    "img": "img/food/1.jpeg"
	},
	{
		"name": "АМЕРИКАНО “DE LUXE”",
		"title": "АМЕРИКАНО “DE LUXE”",
		"keywords": "",
		"description": "",
		"parent": "pizza",
		"role": "item",
		"ingredients": ["Прошутто котто ди Полло","прошутто котто ди Манзо","филе куриное копченое","бекон","салями ланчмит","свежие томаты","сыр “моцарелла”","соус “BBQ”"],
		"price": "69.00 грн",
		"img": "img/food/2.jpeg"
	},
	{
		"name": "АФФУМИКАТА",
		"title": "АФФУМИКАТА",
		"keywords": "",
		"description": "",
		"parent": "pizza",
		"role": "item",
		"ingredients": ["Копченое филе курицы","прошутто котто","кукуруза","перец сладкий","соус “песто”","сыр “моцарелла”"],
		"price": "88.00 грн",
		"img": "img/food/3.jpeg"
	},
	{
		"name": "ДЕЛЬ НОННО",
		"title": "ДЕЛЬ НОННО",
		"keywords": "",
		"description": "",
		"parent": "pizza",
		"role": "item",
		"ingredients": ["Бастурма","прошутто котто","шампиньоны","маслины","сыр “моцарелла”","сыр “горгонзола”","сыр “пармезан”","базилик","соус “маринара”"],
		"price": "78.00 грн",
		"img": "img/food/4.jpeg"
	},
	{
		"name": "ДИАБЛО",
		"title": "ДИАБЛО",
		"keywords": "",
		"description": "",
		"parent": "pizza",
		"role": "item",
		"ingredients": ["Бекон","салями ланчмит","прошутто котто","свежие томаты","перец острый “рeperoni”","сыр “моцарелла”","соус “чили”","соус “маринара”"],
		"price": "88.00 грн",
		"img": "img/food/5.jpeg"
	},
	{
		"name": "ДОМАШНЯЯ",
		"title": "ДОМАШНЯЯ",
		"keywords": "",
		"description": "",
		"parent": "pizza",
		"role": "item",
		"ingredients": ["Домашняя колбаса","свиной балык","балык с итальянскими травами","лук","свежие помидоры","сыр “моцарелла”","соус “маринара”"],
		"price": "75.00 грн",
		"img": "img/food/6.jpeg"
	},
	{
		"name": "ИТАЛЬЯНО “DE LUXE”",
		"title": "ИТАЛЬЯНО “DE LUXE”",
		"keywords": "",
		"description": "",
		"parent": "pizza",
		"role": "item",
		"ingredients": ["Прошутто котто","бекон","прошутто котто ди Манзо","сосиски охотничьи","салями ланчмит","свежие томаты","сыр “моцарелла”","соус “маринара”"],
		"price": "84.00 грн",
		"img": "img/food/7.jpeg"
	},
	{
		"name": "КАРБОНАРА",
		"title": "КАРБОНАРА",
		"keywords": "",
		"description": "",
		"parent": "pizza",
		"role": "item",
		"ingredients": ["Прошутто котто","бекон","яйца перепелиные","лук маринованный","свежие томаты","сыр “моцарелла”","сливочный соус"],
		"price": "79.00 грн",
		"img": "img/food/8.jpeg"
	},
	{
		"name": "КАСАБЛАНКА",
		"title": "КАСАБЛАНКА",
		"keywords": "",
		"description": "",
		"parent": "pizza",
		"role": "item",
		"ingredients": ["4 вида мяса: прошутто котто ди Манзо","прошутто котто","филе куриное копченое","бекон","шампиньоны","свежие томаты","сладкий перец","сыр “моцарелла”","соус “маринара”"],
		"price": "76.00 грн",
		"img": "img/food/9.jpeg"
	},
	{
		"name": "ПЕППЕРОНИ",
		"title": "ПЕППЕРОНИ",
		"keywords": "",
		"description": "",
		"parent": "pizza",
		"role": "item",
		"ingredients": ["Бекон","салями ланчмит","прошутто котто","свежие томаты","шампиньоны","перец острый “рeperoni”","сыр “моцарелла”","соус “маринара”"],
		"price": "79.00 грн",
		"img": "img/food/10.jpeg"
	},
	{
		"name": "РАНЧО",
		"title": "РАНЧО",
		"keywords": "",
		"description": "",
		"parent": "pizza",
		"role": "item",
		"ingredients": ["Филе куриное копченое","филе куриное томленое в специях","прошутто котто ди Полли","свежие томаты","шампиньоны","сладкий перец","сыр “моцарелла”","соус “маринара”"],
		"price": "78.00 грн",
		"img": "img/food/11.jpeg"
	},
	{
		"name": "САН СИРО",
		"title": "САН СИРО",
		"keywords": "",
		"description": "",
		"parent": "pizza",
		"role": "item",
		"ingredients": ["Прошутто котто","сосиски охотничьи","филе куриное копченое","шампиньоны","маринованный лук","свежие помидоры","сыр “моцарелла”","соус “маринара”"],
		"price": "72.00 грн",
		"img": "img/food/12.jpeg"
	},
	{
		"name": "ТЕРРА МАРЕ",
		"title": "ТЕРРА МАРЕ",
		"keywords": "",
		"description": "",
		"parent": "pizza",
		"role": "item",
		"ingredients": ["С морепродуктами и овощами гриль: рапаны","лосось","шампиньоны","запеченные баклажаны и цуккини","сыр “моцарелла”","соус “маринара”"],
		"price": "69.00 грн",
		"img": "img/food/13.jpeg"
	},
	{
		"name": "ТОРРО",
		"title": "ТОРРО",
		"keywords": "",
		"description": "",
		"parent": "pizza",
		"role": "item",
		"ingredients": ["Прошутто котто ди Манзо","салями ланчмит","прошутто котто","сладкий перец","свежие томаты","сыр “моцарелла”","соус “маринара”"],
		"price": "75.00 грн",
		"img": "img/food/14.jpeg"
	},
	{
		"name":"japan",
		"title":"Японская кухня",
		"keywords":"Настощая японская кухня",
		"description":"Японское меню ресторана Маестро",
		"parent":"menu",
		"role":"category",
		"ingredients":"",
		"price":"",
		"img": "img/noimg.png"
	},
	{
		"name":"sushi",
		"title":"Суши",
		"keywords":"Настощие японские суши",
		"description":"Японские суши ресторана Маестро",
		"parent":"japan",
		"role":"category",
		"ingredients":"",
		"price":"",
		"img": "img/noimg.png"
	},	
	{
		"name":"Филадельфия с лососем Терияки",
		"title":"Филадельфия с лососем Терияки",
		"keywords":"",
		"description":"",
		"parent":"sushi",
		"role":"item",
		"ingredients":[ "Рис", "нори", "крем-сыр", "лосось терияки", "огурец" ],
		"price":"88$",
		"img": "img/noimg.png"
	},
	{
		"name":"Токио",
		"title":"Токио",
		"keywords":"",
		"description":"",
		"parent":"sushi",
		"role":"item",
		"ingredients":[ "Рис", "нори", "крем-сыр", "ананас", "лосось", "угорь" ],
		"price":"109$",
		"img": "img/noimg.png"
	}
]