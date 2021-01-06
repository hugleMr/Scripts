
decimal(number,length){
  	let s = number.toString();
    if(s.indexOf(".") == -1) s += ".";
    let index = s.indexOf(".") + length;
    if(s.length >= index){
        s = s.slice(0,index);
    }else{
        while(s.length < index) s += "0";
    }
    return s;
}