function Menu(list){

		var mainBlock = document.getElementsByTagName('main')[0];
		var breadcrumbs = document.getElementById('breadcrumbs');

		this.list = list;
		this.path = window.location.pathname.split('/');
		this.path.shift();
		this.activeCat = this.path[this.path.length-1];

		this.renderItem = function(data){
			var div = document.createElement('div');
			div.className = 'menu-item-food shadow';
			div.innerHTML += '<img src="' + window.location.origin + '/' + data.img + '">';
			div.innerHTML += `<div class="info"><h3>` + data.title + `</h3>` +
							 `<p>Ингредиенты: ` + data.ingredients.join(', ') + `</p>` +
							 `<span>Цена: ` + data.price + `</span></div>`;

			mainBlock.appendChild(div);
		}

		this.renderCategory = function(data){
			var a = document.createElement('a');
				a.href = window.location.pathname + '/' + data.name;
				a.className = 'menu-item shadow';
				a.innerHTML = '<img src="' + window.location.origin + '/' + data.img + '">' + data.title; 
			mainBlock.appendChild(a);
		}

		this.renderBreadcrumbs = function(){
			var tmparr = this.path;
			for(var key in this.list){
				if(this.list[key].name == tmparr[tmparr.length-1]){
					var a = document.createElement('a');
						a.href = '/' + tmparr.join('/');
						a.innerText = this.list[key].title + ' > ';
						breadcrumbs.prepend(a);
				}
			}
			tmparr.pop();
			if (tmparr.length != 0) {
				this.renderBreadcrumbs();
			} else {
				var a = document.createElement('a');
						a.href = '/menu';
						a.innerText = 'Наше меню > ';
						breadcrumbs.prepend(a);
			}
			
		}

		for(var key in this.list){
			if(this.list[key].name == this.activeCat){
				document.title += ' | ' + this.list[key].title;
				document.getElementsByTagName('meta')[1].content = this.list[key].keywords;
				document.getElementsByTagName('meta')[2].content = this.list[key].description;
			}
			if(this.list[key].parent == this.activeCat){
				switch (this.list[key].role){
					case 'category': this.renderCategory(this.list[key]); break;
					case 'item': this.renderItem(this.list[key]); break;
				}
			}
		}
		this.renderBreadcrumbs();
}