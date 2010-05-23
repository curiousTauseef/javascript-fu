/*************** AUTOGENERATED @ 1274578380889 ***************
    WARNING: THIS FILE WAS AUTOGENERATED BY THE FORMAT BUILD SCRIPT
    MODIFYING THIS FILE IS FINE, BUT YOU REALLY SHOULD BE MODIFYING 
    THE LIBRARY DIRECTLY AND REGENERATING THIS FILE USING BUILD.js!!!!
    format.js - Written by Marak Squires
 
*/
var format = {};
format.version = "0.0.1";
format.types = {};
format.types.isDefined = function ( objecty ){
  if(typeof objecty == 'undefined'){
    return false;
  }
  if(objecty == null || objecty == 'null'){
    return false;
  }
  if(objecty.toString() == 'NaN'){
    return false;  
  }
};

format.types.isNumber = function ( numbery ){
  if(numbery.toString() == 'NaN'){
    return false;  
  }
  if(numbery instanceof Number){
    return true; 
  }
  else{
    return false;
  }
};

format.types.isString = function ( stringy ){
  return (stringy instanceof String);
};

format.types.isText = function ( texty ){

};

format.types.isDate = function ( datey ){
  return (datey instanceof Date);
};

format.types.isTime = function ( timey ){
  
};

format.types.isArray = function (){
  
};

format.types.isInflector = function (){
  
};

format.types.isJSON = function (){
  
};

format.types.isObject = function (){
  
};

format.string = {};
format.string.toString = function ( stringy ){
  return (stringy.toString());
};

format.string.wordWrap = function ( m, b, c ){
  
      var i, j, l, s, r;
      if(m < 1)
          return this;
      for(i = -1, l = (r = this.split("\n")).length; ++i < l; r[i] += s)
          for(s = r[i], r[i] = ""; s.length > m; r[i] += s.slice(0, j) + ((s = s.slice(j)).length ? b : ""))
              j = c == 2 || (j = s.slice(0, m + 1).match(/\S*(\s)?$/))[1] ? m : j.input.length - j[0].length
              || c == 1 && m || j.input.length + (j = s.slice(m).match(/^\S*/)).input.length;
      return r.join("\n");
  
};

format.string.trim = function ( str ){
  return str;
};

format.string.left = function ( str, n ){
  return str;
};

format.string.right = function ( str, n ){
  return str;
};

format.string.toQueryParams = function ( str ){
  return str;
};

format.string.toLink = function ( str ){
  return str.replace(/(^|\s)((?:f|ht)tps?:\/\/[^\s]+)/g, replacement || '$1<a href="$2">$2</a>');;
};

format.number = {};
format.number.toNumber = function (numbery){

  // currently not using parseFloat, parseInt, or toFixed
  var n = numbery;
  n = n.toString();
  n = n.replace( /\,/g, '' );
  n = n.replace( /\$/g, '' ); // replace with format.currency.toCurrency call
  var number = new Number(n);

  if(number.toString() == 'NaN'){
    // since we failed at getting a number, we can try to extract the digits out of the input
    //number = fu.getNumbers(number);
    return false;
  }
  else{
    return n;
    
  }
};

format.number.toPercent = function (number){
  // TODO: add more stripping and formatting logic
  return number;
};

format.number.toBase = function ( number ){
  
  Number.prototype.toBase = function(b, c){
      var s = "", n = this;
      if(b > (c = (c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").split("")).length || b < 2) return "";
      while(n)
          s = c[n % b] + s, n = Math.floor(n / b);
      return s;
  };
  String.prototype.parseInt = function(b, c){
      var s = 0, n, l = (n = this.split("")).length, i = 0;
      if(b > (c = c || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").length || b < 2) return NaN;
      while(l--)
          s += c.indexOf(n[i++]) * Math.pow(b, l);
      return s;
  };
  
};

format.inflector = {};
format.inflector.toCamel = function (str) {
  return exports.toTitle(str).replace(/[^\w]/, '');
};

format.inflector.toDash = function (str) {
  str = str.replace(/_/g, '-');
  return str;
};

format.inflector.toHuman = function (str) {
  str = str.replace(/_id$/, "").replace(/_/, " ");
  return str.charAt(0).toUpperCase() + str.slice(1);
};

format.inflector.toOrdinal = function (str) {
  str = str.toString();
  var num = parseInt(str, 10),
      mod100 = num % 100,
      mod10 = num % 10;
  
  switch(mod100){
    case 11:
    case 12:
    case 13:
      return str + "th";
  }
  
  switch(mod10){
    case 1:
      return str + "st";
    case 2:
      return str + "nd";
    case 3:
      return str + "rd";
  }
  
  return str + "th";
};

format.inflector.toTitle = function (str) {

  str = exports.toUnderscore(str);
  str = exports.toHuman(str);
  
	var parts = str.split(/\b('?[a-z])/);
	str = '';

	for (var i = 0; i < parts.length; i = i + 1) {
		if ((i % 2) === 0) {
			str = str + parts[i];
		} else {
			str = str + parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
		}
	};

	return str;
};

format.inflector.toParam = function (str){
  var separator = '-';
  str = str.replace(/[^a-z0-9\-_]+/ig, separator)
  if(separator.length){
  
    str = str.replace(/-{2,}/g, separator);
    str = str.replace(/^-|-$/ig, '');
  }
  
  return str.toLowerCase();
};

format.inflector.toUnderscore = function (str) {
	str = str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2');
	str = str.replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/-/g, "_");
	str = str.toLowerCase();
	return str;
};

format.inflector.toPlural = function (str) {
	for (var i = inflections.uncountables.length - 1; i >= 0; i--) {
		if (str.match(inflections.uncountables[i])) return str;
	};

	var pairs = inflections.plurals,
		pair = [];

	//go from the end of the array to the front so the last pairs have priority
	for (i = pairs.length - 1; i >= 0; i--) {
		pair = pairs[i];
		var result = str.replace(pair[0], pair[1]);
		if (result === str) {
			continue;
		} else return result;
	};

	return str.replace(/([^s])$/i, '$1s');
};

format.inflector.toSingle = function (str) {
	for (var u = inflections.uncountables.length - 1; u >= 0; u--) {
		if (str.match(inflections.uncountables[u])) return str;
	};

	var pairs = inflections.singulars,
		pair = [];

	//go from the end of the array to the front so the last pairs have priority
	for (var i = pairs.length - 1; i >= 0; i--) {
		pair = pairs[i];
		var result = str.replace(pair[0], pair[1]);
		if (result === str) {
			continue;
		} else return result;
	};

	return str.replace(/s$/i, '');
};

format.date = {};
format.date.toDate = function (datey){
  // TODO: add more stripping and formatting logic
  return timey;
};

format.date.getDate = function (timey){
    return timey;
  };

format.date.getTime = function (timey){
  return timey;
};

format.date.toTime = function (timey){
  // TODO: add more stripping and formatting logic
  return timey;
};

format.date.toSeconds = function (timey){
    // TODO: add more stripping and formatting logic
    return timey;
  };

format.date.toMinutes = function (timey){
    // TODO: add more stripping and formatting logic
    return timey;
  };

format.date.toHours = function (timey){
    // TODO: add more stripping and formatting logic
    return timey;
  };

format.date.toDays = function (timey){
    // TODO: add more stripping and formatting logic
    return timey;
  };

format.date.toMonths = function (timey){
    // TODO: add more stripping and formatting logic
    return timey;
  };

format.date.toYears = function (timey){
    // TODO: add more stripping and formatting logic
    return timey;
  };

format.date.getDay = function (timey){
    return timey;
  };

format.date.getFullYear = function (timey){
    return timey;
  };

format.date.getHours = function (timey){
    return timey;
  };

format.date.getMilliseconds = function (timey){
    return timey;
  };

format.date.getMinutes = function (timey){
    return timey;
  };

format.date.getMonth = function (timey){
    return timey;
  };

format.date.getSeconds = function (timey){
    return timey;
  };

format.currency = {};
format.currency.toDollars = function (money){
  // TODO: add more stripping and formatting logic
  return money;
};

format.currency.toPennies = function (money){
    // TODO: add more stripping and formatting logic
    return money;
  };

format.currency.toNickels = function (money){
    // TODO: add more stripping and formatting logic
    return money;
  };

format.currency.toDimes = function (money){
    // TODO: add more stripping and formatting logic
    return money;
  };

format.currency.toQuarters = function (money){
    // TODO: add more stripping and formatting logic
    return money;
  };

format.currency.toEuros = function (money){
  // TODO: add more stripping and formatting logic
  return money;
};

format.currency.toCanadian = function (money){
  // TODO: add more stripping and formatting logic
  return money;
};
if(typeof exports != "undefined"){for(var prop in format){exports[prop] = format[prop];}}