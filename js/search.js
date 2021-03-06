function Search(query){

	this.query = new RegExp(decodeURIComponent(query),'i');
	this.counter = 0;
	var mainBlock = document.getElementsByTagName('main')[0];
	mainBlock.innerHTML = '';

	this.renderItem = function(data){
		var div = document.createElement('div');
		div.className = 'menu-item-food shadow';
		div.innerHTML += '<img src="' + window.location.origin + '/' + data.img + '">';
		div.innerHTML += `<div class="info"><h3>` + data.title + `</h3>` +
						 `<p>Ингредиенты: ` + data.ingredients.join(', ') + `</p>` +
						 `<span>Цена: ` + data.price + `</span></div>`;

		mainBlock.appendChild(div);
	}
	this.renderCount = function(count){
		var div = document.createElement('div');
			div.innerText = 'Найдено ' + this.counter + ' элем.';
		mainBlock.prepend(div);
	}
	if(query != ''){
		for (var key in menu_data){
			for (var innerkey in menu_data[key]){
				if(menu_data[key]['role'] == "item"){
					if(typeof(menu_data[key][innerkey]) == 'string' && innerkey != "img" && innerkey != "price"){
						if(menu_data[key][innerkey].match(this.query)){
							this.renderItem(menu_data[key]);
							this.counter ++;
							break;
						}
					}
					if(typeof(menu_data[key][innerkey]) == 'object'){
						if(menu_data[key][innerkey].join(',').match(this.query)){
							// console.log(menu_data[key]);
							this.renderItem(menu_data[key]);
							this.counter ++;
							break;
						}
					}
				}
			}
		}
	}
	this.renderCount(this.counter);
}