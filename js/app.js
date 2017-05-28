/*
*dato el proyecto catclicker declarar una variable cat 
con los atributos name, photo, voteup, votedown
asignar blas los valores del modelo datos a la estructura 
html e implementar los eventos clik para el incremento 
o decremento de los votos
*/
var arrayGatos=[
cat = {
	name: 'Gato-Bengalí',
	photo:'img/cats/10.jpg',
	selector1:'0',
	selector2:'01',
	selector3:'02',
	voteup:7,
	votedown:12
},
cat1={
	name: 'Meouph',
	selector1:'1',
	selector2:'11',
	selector3:'12',
	photo:'img/cats/1.jpg',
	voteup:10,
	votedown:12
},
cat2 = {
	name: 'Michi',
	photo:'img/cats/8.jpg',
	selector1:'2',
	selector2:'21',
	selector3:'22',
	voteup:5,
	votedown:7
},
cat3 = {
	name: 'Ruli',
	photo:'img/cats/7.jpg',
	selector1:'3',
	selector2:'31',
	selector3:'32',
	voteup:11,
	votedown:19
},
cat4 = {
	name: 'Garfield',
	photo:'img/cats/6.png',
	selector1:'4',
	selector2:'41',
	selector3:'42',
	voteup:14,
	votedown:13
},
cat5 = {
	name: 'luli',
	photo:'img/cats/5.jpg',
	selector1:'5',
	selector2:'51',
	selector3:'52',
	voteup:10,
	votedown:23
},
cat6 = {
	name: 'Pirata',
	photo:'img/cats/4.jpg',
	selector1:'6',
	selector2:'61',
	selector3:'62',
	voteup:5,
	votedown:20
},
cat7 = {
	name: 'Caza-Rata',
	photo:'img/cats/3.jpg',
	selector1:'7',
	selector2:'71',
	selector3:'72',
	voteup:6,
	votedown:14
},
cat8 = {
	name: 'Bravo',
	photo:'img/cats/2.jpg',
	selector1:'8',
	selector2:'81',
	selector3:'82',
	voteup:9,
	votedown:25
},
cat9 = {
	name: 'Champi',
	photo:'img/cats/1.jpg',
	selector1:'9',
	selector2:'91',
	selector3:'92',
	voteup:2,
	votedown:24
},
cat10 = {
	name: 'Chefe',
	photo:'img/cats/9.jpg',
	selector1:'10',
	selector2:'101',
	selector3:'102',
	voteup:17,
	votedown:28
}
];/*
init(arrayGatos[0]);
init(arrayGatos[1]);
init(arrayGatos[2]);
init(arrayGatos[3]);
init(arrayGatos[4]);
init(arrayGatos[5]);
init(arrayGatos[6]);
init(arrayGatos[7]);
init(arrayGatos[8]);
init(arrayGatos[9]);
init(arrayGatos[10]);
*/
function init(cat){
	showData(cat);
}

function showData(cat){
	

$('#todo').append($('<span>').append('<h1 class="'+cat.name+'"></h1>'+
					'<div class="avatar">'+
						'<img src="" id="'+cat.selector1+'" class="img-responsive">'+
					'</div>'+
					'<div class="row">'+
						'<div class="col-xs-6">'+
							'<div class="cliker1" id="'+cat.selector2+'">'+
								'<span class="up"></span>'+
							'</div>'+
						'</div>'+
						'<div class="col-xs-6">'+
							'<div class="cliker2" id="'+cat.selector3+'">'+
								'<span class="down"></span>'+
							'</div>'+
						'</div>'+
					'</div>').append('</span><br>'));
				
		$('.'+cat.name).text(cat.name);
		$('#'+cat.selector1).attr('src',cat.photo);
		$('#'+cat.selector2+' span').text(cat.voteup);
		$('#'+cat.selector3+' span').text(cat.votedown);

}



arrayGatos.forEach(function(e){
	init(arrayGatos[e.selector1]);
	bindEvent(e);
});
function bindEvent(e){
	$('#'+e.selector2).on('click',function clickUp(){
	e.voteup++;
	console.log('hola');
$('#'+e.selector2+' span').text(e.voteup);
});
	$('#'+e.selector3).on('click',function clickDown(){
	e.votedown++;
$('#'+e.selector3+' span').text(e.votedown);
});
}




































































/*
Blas Ariel Quintana

*/