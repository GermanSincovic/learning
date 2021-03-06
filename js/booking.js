function Booking(form){
	
	this.reserveTable = function(key, value){
		localStorage.setItem(key, value);
		new Popup('Столик №' + this.number + ' успешно забронирован на ' + this.time + '<br>Спасибо!<br><small>(Бронь допускает задержку в 15 минут)</small>');
	}
	this.closeForm = function(){
		document.getElementById('popup').getElementsByClassName('popup-close')[0].click();
	}
	this.checkPhone = function(){
		if(!this.phone.match(/([+][\d]{12})/)){
			this.valid = false;
			new Popup('Номер телефона должен быть в международном формате: +380123456789');
		}
	}
	this.checkTime = function(){
		for (var i = 0; i < localStorage.length; i++) {
			var record = JSON.parse(localStorage[localStorage.key(i)]);
			if(this.number == record.number){
				if (this.timestamp < +new Date()){
					this.valid = false;
					new Popup('К сожалению, мы можем бронировать столики только в будущем ;-)');
					break;
				}
				if (this.timestamp + this.duration < record.timestamp){
					this.valid = false;
					new Popup('К сожалению, к этому времени слишком близка следующая бронь');
					break;
				}
				if (this.timestamp >= record.timestamp && this.timestamp < record.timestamp + record.duration){
					this.valid = false;
					new Popup('К сожалению, в это время столик занят');
					break;
				}
				if (this.time.localeCompare('10:00') < 0 || this.time.localeCompare('23:30') > 0){
					this.valid = false;
					new Popup('К сожалению, это время противоречит нашему графику работы<br><small>(10:00 - 00:00)</small>');
					break;
				}

			}

		}
	}
	this.number = form.number.value;
	this.time = form.time.value;
	this.date = form.date.value;
	this.timeUTC = new Date(this.date + "T" + this.time + ":00");
	this.timestamp = + new Date(this.date + "T" + this.time + ":00");
	this.phone = form.phone.value;
	this.duration = 1 * 60 * 60 * 1000;
	this.valid = true;

	this.checkPhone();
	this.checkTime();
	
	if(this.valid){
		this.closeForm();
		this.reserveTable(+new Date(), JSON.stringify(this));	
	}
}