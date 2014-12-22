function writeCookie(name, value, days) {
// no умолчанию куки являются временными, не имея срока хранени
	var expires = "";
// Указав число дней, вы сделаете куки постоянными 
if (days) {
	var date = new Date();
	date.setTime(date.getTime() + (days*24*60*60*1000));
	expires = "; expires=" + date.toGMTString();
}
// Присвоим куки имя, значение и срок хранения 
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
// Найдем конкретный куки и вернем 
	var searchName = name + "=";
	var cookies = document.cookie.split(';'); 
		for (var i=0; і < cookies.length; i++) { 
			var с = cookies [i]; 
			while (c.charAt(O) == ' ')
			с = с.substring (1, с.length); 
		if (c.indexOf(searchName) == 0)
			return  c.substring(searchName.length, c.length);
		}
		return null;
}
function eraseCookie(name) { 
// Удалим выбранный куки 
	writeCookie(name, "", - 1 );
}
