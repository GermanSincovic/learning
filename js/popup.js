class Popup{
	constructor(data){
		this.data = data;
		let	popupElem = document.createElement("div");
			popupElem.id = "popup";
			popupElem.appendChild(document.createElement("div"));
			popupElem.firstChild.className = "popup-container shadow";
		
			if(typeof(this.data) == 'string'){
				popupElem.firstChild.appendChild(document.createElement("p"));
				popupElem.firstChild.firstChild.innerHTML = this.data;
			}
			if(typeof(this.data) == 'object'){
				let form = document.createElement("form")
					form.setAttribute("onsubmit", "new Booking(this); return false;");
					form.appendChild(this.addFormItem('tel','phone',null,'+380123456789'));
					form.appendChild(this.addFormItem('time','time'));
					form.appendChild(this.addFormItem('date','date'));
					form.appendChild(this.addFormItem('hidden','number',this.data[0]));
					form.appendChild(this.addFormItem('submit',null,'Подтвердить'));
				popupElem.firstChild.appendChild(form);
			}
			
			popupElem.firstChild.appendChild(document.createElement("span"));
			popupElem.firstChild.lastChild.className = "popup-close";
			popupElem.firstChild.lastChild.innerText = '×';
			popupElem.firstChild.lastChild.addEventListener('click', function(){
				popupElem.remove();
			});
			document.body.appendChild(popupElem);
	}
	addFormItem(type, name, value=null, placeholder=null){
		var elem = document.createElement('input');
			elem.type = type;
			elem.name = name;
			if(value){elem.value = value;}
			if(placeholder){elem.placeholder = placeholder;}
		return elem;
	}
}