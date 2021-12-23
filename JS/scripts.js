<!-- Titre glissant -->
var ic = 0; 
var str = document.title;
var tilen = str.length;
var go;
var c = 0;
function ts() { 
til(); 
if(c < tilen) { 
clearTimeout(go); } 
c++; 
go = setTimeout("ts();",10) } 
function til() { 
var dti = str.substring((tilen - ic - 1),tilen); 
document.title = dti; 
ic++; } 
ts(); 



<!-- jquery animations -->
					
$(document).ready(function(){


	if ((typeof(window.orientation) == 'undefined') && (navigator.userAgent.indexOf('IEMobile') == -1))
		{
		$('#scroll').cycle(
			{fx:'custom',next:'#scroll',speed: 1000,timeout:10000,cssBefore:{left:100,top:0,width:850,height:100,opacity:0,bottom:20,display:'block'}
				,animOut:{opacity:0}
				,animIn:{left:0,top:0,width:850,height: 100,bottom:20, opacity:1}
				,cssAfter:{left:0,zIndex: 0,opacity: 0},delay:-10 , pause: 1, random: 1}
		);
		
		$('.lslideshow').cycle({
			fx: 'fade',
			speed:3000,
			delay:-3000,
			pause: 1,
			timeout: 10,
			random: 1
		});



		var anchoractuelle=0;
		$('#Divmasque').height($('#onglet' + anchoractuelle).height());
		$('#Bkground').height($('#onglet' + anchoractuelle).height() +10 );
		$('#Divmasque').scrollTo($("#onglet0"), 0);	
		
		$('#href0').click(function(event){
		
			switch(anchoractuelle){
			case 0:
			   break;
			 
			 default:
				$('#Divmasque').height($('#onglet0').height());
				$('#Bkground').animate({'height':$('#onglet0').height()+10},{queue:false, duration:500});
				$('#Divmasque').scrollTo($("#onglet0"), 600);	
				
				var ongletdesactive = document.getElementById('a' + anchoractuelle);
				ongletdesactive.className='ongleta';
				var ongletactive = document.getElementById('a0');
				ongletactive.className='ongletaactif';
				var ongletdesactive = document.getElementById('href' + anchoractuelle);
				ongletdesactive.className='ongletli';
				var ongletactive = document.getElementById('href0');
				ongletactive.className='ongletliactif';
				break;
			}
			anchoractuelle=0;
			
		});

		$('#href1').click(function(event){
		
			switch(anchoractuelle){
			case 1:
			break;
			 
			 default:
				$('#Divmasque').height($('#onglet1').height());
				$('#Bkground').animate({'height':$('#onglet1').height()+10},{queue:false, duration:500});
				$('#Divmasque').scrollTo($("#onglet1"), 600);	

				var ongletdesactive = document.getElementById('a' + anchoractuelle);
				ongletdesactive.className='ongleta';
				var ongletactive = document.getElementById('a1');
				ongletactive.className='ongletaactif';
				var ongletdesactive = document.getElementById('href' + anchoractuelle);
				ongletdesactive.className='ongletli';
				var ongletactive = document.getElementById('href1');
				ongletactive.className='ongletliactif';
				  break;
			}
			anchoractuelle=1;
			
		});
		
		$('#href2').click(function(event){

			
			switch(anchoractuelle){
			case 2:
			   break;
			 
			 default:
				$('#Divmasque').height($('#onglet2').height());
				$('#Bkground').animate({'height':$('#onglet2').height()+10},{queue:false, duration:500});
				$('#Divmasque').scrollTo($("#onglet2"), 600);	
				
				var ongletdesactive = document.getElementById('a' + anchoractuelle);
				ongletdesactive.className='ongleta';
				var ongletactive = document.getElementById('a2');
				ongletactive.className='ongletaactif';
				var ongletdesactive = document.getElementById('href' + anchoractuelle);
				ongletdesactive.className='ongletli';
				var ongletactive = document.getElementById('href2');
				ongletactive.className='ongletliactif';
				break;
			}
			anchoractuelle=2;
		});

		
		$('#href3').click(function(event){
			
			switch(anchoractuelle){
			case 3:
			   break;
			 
			 default:			
				$('#Divmasque').height($('#onglet3').height());
				$('#Bkground').animate({'height':$('#onglet3').height()+10},{queue:false, duration:500});
				$('#Divmasque').scrollTo($("#onglet3"), 600);	
				
				var ongletdesactive = document.getElementById('a' + anchoractuelle);
				ongletdesactive.className='ongleta';
				var ongletactive = document.getElementById('a3');
				ongletactive.className='ongletaactif';
				var ongletdesactive = document.getElementById('href' + anchoractuelle);
				ongletdesactive.className='ongletli';
				var ongletactive = document.getElementById('href3');
				ongletactive.className='ongletliactif';		 
				 break;
			}
			anchoractuelle=3;
		});

		
		$('#href4').click(function(event){

			switch(anchoractuelle){
			case 4:
			   break;
			 
			 default:
				$('#Divmasque').height($('#onglet4').height());
				$('#Bkground').animate({'height':$('#onglet4').height()+10},{queue:false, duration:500});
				$('#Divmasque').scrollTo($("#onglet4"), 600);	
			   
				var ongletdesactive = document.getElementById('a' + anchoractuelle);
				ongletdesactive.className='ongleta';
				var ongletactive = document.getElementById('a4');
				ongletactive.className='ongletaactif';
				var ongletdesactive = document.getElementById('href' + anchoractuelle);
				ongletdesactive.className='ongletli';
				var ongletactive = document.getElementById('href4');
				ongletactive.className='ongletliactif';
				break;
			}
			anchoractuelle=4;
		});

		
		$('#href5').click(function(event){

			switch(anchoractuelle){
			case 5:
			   break;
			 
			 default:

				$('#Divmasque').height($('#onglet5').height());
				$('#Bkground').animate({'height':$('#onglet5').height()+10},{queue:false, duration:500});
				$('#Divmasque').scrollTo($("#onglet5"), 600);	
			
				var ongletdesactive = document.getElementById('a' + anchoractuelle);
				ongletdesactive.className='ongleta';
				var ongletactive = document.getElementById('a5');
				ongletactive.className='ongletaactif';
				var ongletdesactive = document.getElementById('href' + anchoractuelle);
				ongletdesactive.className='ongletli';
				var ongletactive = document.getElementById('href5');
				ongletactive.className='ongletliactif';		   
			   break;
			}
			anchoractuelle=5;
		});
		
		$('#href6').click(function(event){

			switch(anchoractuelle){
			case 6:
			   break;
			 
			 default:

				$('#Divmasque').height($('#onglet6').height());
				$('#Bkground').animate({'height':$('#onglet6').height()+10},{queue:false, duration:500});
				$('#Divmasque').scrollTo($("#onglet6"), 600);	
			
				var ongletdesactive = document.getElementById('a' + anchoractuelle);
				ongletdesactive.className='ongleta';
				var ongletactive = document.getElementById('a6');
				ongletactive.className='ongletaactif';
				var ongletdesactive = document.getElementById('href' + anchoractuelle);
				ongletdesactive.className='ongletli';
				var ongletactive = document.getElementById('href6');
				ongletactive.className='ongletliactif';		   
			   break;
			}
			anchoractuelle=6;
		});		
		$('#href7').click(function(event){
			
			switch(anchoractuelle){
			case 7:
			   break;
			 
			 default:			
				$('#Divmasque').height($('#onglet7').height());
				$('#Bkground').animate({'height':$('#onglet7').height()+10},{queue:false, duration:500});
				$('#Divmasque').scrollTo($("#onglet7"), 600);	
				
				var ongletdesactive = document.getElementById('a' + anchoractuelle);
				ongletdesactive.className='ongleta';
				var ongletactive = document.getElementById('a7');
				ongletactive.className='ongletaactif';
				var ongletdesactive = document.getElementById('href' + anchoractuelle);
				ongletdesactive.className='ongletli';
				var ongletactive = document.getElementById('href7');
				ongletactive.className='ongletliactif';		 
				 break;
			}
			anchoractuelle=7;
		});
	}
 });