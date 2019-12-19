function convertToRoman(num) {
 let roman = '';
 if(num / 1000 >= 1) {
     let temp = Math.floor(num / 1000);
	 for(let i = 0; i < temp; i++) {
	 	roman += 'M';
    }
    return roman + convertToRoman(num % 1000);
 } else if(num / 500 >= 1) {
     let temp = Math.floor(num / 500);
     if(num >= 900) {
     	roman = "CM";
        return roman + convertToRoman(num % 900);
     } else {
     	for(let i = 0; i < temp; i++) {
         	roman += 'D';
     	}
        return roman + convertToRoman(num % 500);
     }
 } else if(num / 100 >= 1) {
     let temp = Math.floor(num / 100);
     if(temp === 4) {
     	roman = "CD";
     } else {
	     for(let i = 0; i < temp; i++) {
	         roman += 'C';
	     }
	 }
     return roman + convertToRoman(num % 100);
 } else if(num / 50 >= 1) {
     let temp = Math.floor(num / 50);
     if(num >= 90) {
     	roman = 'XC';
        return roman + convertToRoman(num % 90);
     } else {
	     for(let i = 0; i < temp; i++) {
	         roman += 'L';
	     }
         return roman + convertToRoman(num % 50);
	 }
 } else if(num / 10 >= 1) {
     let temp = Math.floor(num / 10);
     if(temp === 4) {
     	roman = 'XL';
     } else {
	     for(let i = 0; i < temp; i++) {
	         roman += 'X';
	     }
	 }
     return roman + convertToRoman(num % 10);
 } else if(num / 5 >= 1) {
     let temp = Math.floor(num / 5);
     if(num / 5 == 1.8) {
     	roman = "IX";
        return roman;
     } else {
	     for(let i = 0; i < temp; i++) {
	         roman += 'V';
	   }
        return roman + convertToRoman(num % 5);
	 }
 } else {
 	 if(num === 4) {
 	 	roman = 'IV';
 	 } else {
         for(let i = 0; i < num; i++) {
             roman += 'I';
         }
     }
     return roman;
 }
}