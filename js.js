//classwork 1
// for (let i-1; i <= 20; i++) {
// if (i % 2 ==0) {
//     alert(i);
// }
// }


//#2 variant
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (let i = 0; i<20; i++) {
// if(i%2===1){

//document.write(`${array[i]} <br>`);
// }  
//}



//class work 2
// let longWords = ["Penelope", "Johny", "Aubumayang", "Czechoslovakia", "Slovenia"]
// let longest = prompt("ведите слова больше 10 букв ");
// for (let i = 0; i < longWords.length; i++) {
// if (longest < longWords[i].length) {
//     longest = longWords[i];
//   }
// }
// document.write(longest);



//class work 3

// let ar= ['Max', 'Janat', 'Elnura', 'Anara', 'Elzada', 'Saule', 'Yrys', 'Jiidegul'];

// 	for(let i=0;i<ar.length+1; i++){
// 		alert(`Удаляю ${ar[i]}`)
// 		let t=ar.slice(i,ar.length)	
// 		document.write(t+"<br>");
// 	}


//home work 1
//a
// let uncorrect (`является ли она палиндромом?`)

// function poly(arr){
// let uncorrect=''
// for(let i = 0; i<arr.length; i++){
// uncorrect+=arr[(arr.length-1)-i]
// console.log(uncorrect);
// 	}
// 	if (arr===uncorrect){
// 	return 'polyndrom'
// 	}else{
// 	return 'is not polyndrom'
// 	}
// }
// console.log(poly('anna'),'anna')
// console.log(poly('civic'),'civic')
// console.log(poly('level'),'level')
// console.log(poly('hanna'),'hanna')


//b
// let incorrect = '';
// arr = prompt('Poly')
// let poly = arr;
        
// for(let i = 0; i<arr.length; i++){
//     incorrect+=arr[(arr.length-1)-i]
                
// }
// if (arr===incorrect){
// document.write('Polyndrom: ' + poly);
// }else{
// document.write('Is not polyndrom: ' + poly);
// }


//home work2

//a
// for(let i = 1; i <10; i++){
// 	for(let j = 1; j<10; j++){
// 		document.write(`${i}*${j}=${i*j}<br>`);
// 	}
// }


//b
document.write("<h1>Таблица умножения</h1>"); 
 
for (let i = 1; i <= 10; i++){  
document.write("<div style='float: left; width: 70px;'>"); 
for (let j = 1; j <=10; j++)  
{ 
	document.write(`${i}*${j}=${i*j}<br>`);	
//document.write(i + "*" + j + "=" +(i*j) + "<br>"); 
 
}  
document.write ("</div>"); 
 
} 


//c
// let doc=document.querySelector('.item')

// for(let i = 1; i <10; i++){
// 	for(let j = 1; j<10; j++){
// 		doc.innerHTML+=`${i}*${j}=${i*j}<br>`
// 	}
// }


//e
// let doc=document.querySelector('.item')

// for(let i = 1; i <10; i++){
// for(let j = 1; j<10; j++){
// doc.innerHTML+=`${i}*${j}=${i*j}<br>`
// 	}
// }

