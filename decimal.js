
decimal(number,length){
  	var s = number.toString();
	if (s.indexOf('.') == -1) s += '.';
	while (s.length < s.indexOf('.') + length) s += '0';
}