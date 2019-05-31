function Sorter(){

	var mainBLock = document.getElementsByTagName('main')[0];
	var list = document.getElementsByClassName('menu-item-food');

	var div = document.createElement('div');
		div.id = 'sorter-container';

	var button = document.createElement('button');
		button.innerText = 'А - Я';
		button.className = "shadow-highleft";
		button.addEventListener('click', function(){
			var tmparr = [];
			for (var i = 0; i < list.length; i++) {
				tmparr.push(list[i]);
				tmparr.sort(function(a,b){
					return a.getElementsByTagName('h3')[0].innerText.localeCompare(b.getElementsByTagName('h3')[0].innerText);
				});
			}
			for (var i = 0; i < tmparr.length; i++) {
				mainBLock.appendChild(tmparr[i]);
			}
		});
	div.appendChild(button);

	var button = document.createElement('button');
		button.innerText = 'Я - А';
		button.className = "shadow-highleft";
		button.addEventListener('click', function(){
			var tmparr = [];
			for (var i = 0; i < list.length; i++) {
				tmparr.push(list[i]);
				tmparr.sort(function(a,b){
					return a.getElementsByTagName('h3')[0].innerText.localeCompare(b.getElementsByTagName('h3')[0].innerText);
				});
			}
			tmparr.reverse();
			for (var i = 0; i < tmparr.length; i++) {
				mainBLock.appendChild(tmparr[i]);
			}
		});
	div.appendChild(button);

	var button = document.createElement('button');
		button.innerText = '0 - 1';
		button.className = "shadow-highright";
		button.addEventListener('click', function(){
			var tmparr = [];
			for (var i = 0; i < list.length; i++) {
				tmparr.push(list[i]);
				tmparr.sort(function(a,b){
					return +a.getElementsByTagName('span')[0].innerText.split(' ')[1] - +b.getElementsByTagName('span')[0].innerText.split(' ')[1];
				});
			}
			for (var i = 0; i < tmparr.length; i++) {
				mainBLock.appendChild(tmparr[i]);
			}
		});
	div.appendChild(button);

	var button = document.createElement('button');
		button.innerText = '1 - 0';
		button.className = "shadow-highright";
		button.addEventListener('click', function(){
			var tmparr = [];
			for (var i = 0; i < list.length; i++) {
				tmparr.push(list[i]);
				tmparr.sort(function(a,b){
					return +a.getElementsByTagName('span')[0].innerText.split(' ')[1] - +b.getElementsByTagName('span')[0].innerText.split(' ')[1];
				});
			}
			tmparr.reverse();
			for (var i = 0; i < tmparr.length; i++) {
				mainBLock.appendChild(tmparr[i]);
			}
		});
	div.appendChild(button);
	
	mainBLock.prepend(div);
}