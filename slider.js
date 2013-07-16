$(document).ready(function(){
  
	function preload(imgArray) {
		$(imgArray).each(function(){
			(new Image()).src = this;
		});
	}
	
	// Usage:
	
	preload([
		'images/artists/ashley-jordan.jpg','images/artists/dressed-for-the-occasion.jpg','images/artists/sarah-blacker.jpg','images/artists/jacob-heal-pic.jpg','images/artists/nemes.jpg', 'images/artists/frank-viele.jpg','images/artists/sarah-borrello.jpg','images/artists/transitshop.jpg'
	]);
	
	$("#next").click(function(){
		swapN();
	});
	$("#previous").click(function(){
		swapP();
	});
	
	var i = 0;
	var j=1;
	var k=2;
	var l=3;
	var m = 4;
	var n = 5;
	var o = 6;
	var currPic;
	
	var imgArray = new Array('images/artists/ashley-jordan.jpg','images/artists/dressed-for-the-occasion.jpg','images/artists/sarah-blacker.jpg','images/artists/jacob-heal-pic.jpg','images/artists/nemes.jpg', 'images/artists/frank-viele.jpg','images/artists/sarah-borrello.jpg','images/artists/transitshop.jpg');
	var titleArray = new Array('Ashley Jordan','Dressed for the Occasion','Sarah Blacker','Jacob Heal','Nemes','Frank Vielle','Sarah Borrello','Transitshop');
	var addressArray = new Array(
		'<a href="http://www.ashleyjordanmusic.com/home.cfm">www.ashleyjordanmusic.com</a>',
		'<a href="http://www.dftomusic.com/">www.dftomusic.com</a>',
		'<a href="http://www.sarahblacker.com/music/">www.sarahblacker.com/music</a>',
		'<a href="http://www.jacobheal.com/">www.jacobheal.com</a>',
		'<a href="http://nemesband.com/">nemesband.com</a>',
		'<a href="http://www.frankvielemusic.com/">www.frankvielemusic.com</a>',
		'<a href="http://www.sarahborrellomusic.com/">www.sarahborrellomusic.com</a>',
		'<a href="http://transitshop.net/site/">transitshop.net/site</a>'
	);
	var arrayLength = imgArray.length;
	
	
	$("#fig1_pic").append("<img id='fig1a' class='aimg' src='" + imgArray[0] + "' alt='" + titleArray[0] + "' >");
	$("#fig2_pic").append("<img id='fig2a' class='aimg' src='" + imgArray[1] + "' alt='" + titleArray[1] + "' >");
	$("#fig3_pic").append("<img id='fig3a' class='aimg' src='" + imgArray[2] + "' alt='" + titleArray[2] + "' >");
	$("#fig4_pic").append("<img id='fig4a' class='aimg' src='" + imgArray[3] + "' alt='" + titleArray[3] + "' >");
	$("#fig5_pic").append("<img id='fig5a' class='aimg' src='" + imgArray[4] + "' alt='" + titleArray[4] + "' >");
	$("#fig6_pic").append("<img id='fig6a' class='aimg' src='" + imgArray[5] + "' alt='" + titleArray[5] + "' >");
	$("#fig7_pic").append("<img id='fig7a' class='aimg' src='" + imgArray[6] + "' alt='" + titleArray[6] + "' >");
	
	$("#fig1_title").append(titleArray[0] );
	$("#fig2_title").append(titleArray[1] );
	$("#fig3_title").append(titleArray[2] );
	$("#fig4_title").append(titleArray[3] );
	$("#fig5_title").append(titleArray[4] );
	$("#fig6_title").append(titleArray[5] );
	$("#fig7_title").append(titleArray[6] );
	
	$("#fig1_address").append(addressArray[0] );
	$("#fig2_address").append(addressArray[1] );
	$("#fig3_address").append(addressArray[2] );
	$("#fig4_address").append(addressArray[3] );
	$("#fig5_address").append(addressArray[4] );
	$("#fig6_address").append(addressArray[5] );
	$("#fig7_address").append(addressArray[6] );
	
	function swapN(){
		i++;
		if (i==arrayLength){
			i=0;	
		}
		if(i<0){i=0}
		/*$("#fig1").css({'background':'url(' + imgArray[i] + ')'});
		
		$('#fig1').fadeTo('slow', 1, function()
			{
				$(this).css('background', 'url(' + imgArray[i] + ')');
			});

		});*/
		
		$("#fig1").find("img").stop(true,true).animate({marginLeft: "300px"}, 400);
		$("#fig1").find("img").stop(true,true).attr({"src":imgArray[i],"alt":titleArray[i]}).animate({marginLeft: "0px"}, 200);
		$("#fig1_title").html(titleArray[i]);
		$("#fig1_address").html(addressArray[i]);
		
		
		j++;
		if (j==arrayLength){
			j=0;	
		}
		if(j<0){j=0}
		
		$("#fig2").find("img").stop(true,true).animate({marginLeft: "300px"}, 400);
		$("#fig2").find("img").stop(true,true).attr({"src":imgArray[j],"alt":titleArray[j]}).animate({marginLeft:"0px"}, 200);
		$("#fig2_title").html(titleArray[j]);
		$("#fig2_address").html(addressArray[j]);
		
		
		k++;
		if (k==arrayLength){
			k=0;	
		}
		if(k<0){k=0}
		
		$("#fig3").find("img").stop(true,true).animate({marginLeft: "300px"}, 400);
		$("#fig3").find("img").stop(true,true).attr({"src":imgArray[k],"alt":titleArray[k]}).animate({marginLeft: "0px"}, 200);
		$("#fig3_title").html(titleArray[k]);
		$("#fig3_address").html(addressArray[k]);
		
		
		l++;
		if (l==arrayLength){
			l=0;	
		}
		if(l<0){l=0}
		
		$("#fig4").find("img").stop(true,true).animate({marginLeft: "300px"}, 400);
		$("#fig4").find("img").stop(true,true).attr({"src":imgArray[l],"alt":titleArray[l]}).animate({marginLeft: "0px"}, 200);
		$("#fig4_title").html(titleArray[l]);
		$("#fig4_address").html(addressArray[l]);
		
		
		m++;
		if (m==arrayLength){
			m=0;	
		}
		if(m<0){m=0}
		
		$("#fig5").find("img").stop(true,true).animate({marginLeft: "300px"}, 400);
		$("#fig5").find("img").stop(true,true).attr({"src":imgArray[m],"alt":titleArray[m]}).animate({marginLeft: "0px"}, 200);
		$("#fig5_title").html(titleArray[m]);
		$("#fig5_address").html(addressArray[m]);
		
		
		n++;
		if (n==arrayLength){
			n=0;	
		}
		if(n<0){n=0}
		
		$("#fig6").find("img").stop(true,true).animate({marginLeft: "300px"}, 400);
		$("#fig6").find("img").stop(true,true).attr({"src":imgArray[n],"alt":titleArray[n]}).animate({marginLeft: "0px"}, 200);
		$("#fig6_title").html(titleArray[n]);
		$("#fig6_address").html(addressArray[n]);
		
		
		o++;
		if (o==arrayLength){
			o=0;	
		}
		if(o<0){o=0}
		
		$("#fig7").find("img").stop(true,true).animate({marginLeft: "300px"}, 400);
		$("#fig7").find("img").stop(true,true).attr({"src":imgArray[o],"alt":titleArray[o]}).animate({marginLeft: "0px"}, 200);
		$("#fig7_title").html(titleArray[o]);
		$("#fig7_address").html(addressArray[o]);
		
	}
	
	function swapP(){
		i--;
		if (i<0){
			i = arrayLength-1;	
		}
		if(i==arrayLength){i=0;}
		
		$("#fig1").find("img").stop(true,true).animate({marginLeft:"-300px"}, 400);
		$("#fig1").find("img").stop(true,true).attr({"src":imgArray[i],"alt":titleArray[i]}).animate({marginLeft:"0px"}, 200);
		$("#fig1_title").html(titleArray[i]);
		$("#fig1_address").html(addressArray[i]);
		
		
		j--;
		if (j<0){
			j = arrayLength-1;	
		}
		if(j==arrayLength){j=0;}
		
		$("#fig2").find("img").stop(true,true).animate({marginLeft:"-300px"}, 400);
		$("#fig2").find("img").stop(true,true).attr({"src":imgArray[j],"alt":titleArray[j]}).animate({marginLeft:"0px"}, 200);
		$("#fig2_title").html(titleArray[j]);
		$("#fig2_address").html(addressArray[j]);	
		
		
		k--;
		if (k<0){
			k = arrayLength-1;	
		}
		if(k==arrayLength){k=0;}
		
		$("#fig3").find("img").stop(true,true).animate({marginLeft:"-300px"}, 400);
		$("#fig3").find("img").stop(true,true).attr({"src":imgArray[k],"alt":titleArray[k]}).animate({marginLeft:"0px"}, 200);
		$("#fig3_title").html(titleArray[k]);
		$("#fig3_address").html(addressArray[k]);
		
		
		l--;
		if (l<0){
			l = arrayLength-1;	
		}
		if(l==arrayLength){l=0;}
		
		$("#fig4").find("img").stop(true,true).animate({marginLeft:"-300px"}, 400);
		$("#fig4").find("img").stop(true,true).attr({"src":imgArray[l],"alt":titleArray[l]}).animate({marginLeft:"0px"}, 200);
		$("#fig4_title").html(titleArray[l]);
		$("#fig4_address").html(addressArray[l]);
		
		
		m--;
		if (m<0){
			m = arrayLength-1;	
		}
		if(m==arrayLength){m=0;}
		
		$("#fig5").find("img").stop(true,true).animate({marginLeft:"-300px"}, 400);
		$("#fig5").find("img").stop(true,true).attr({"src":imgArray[m],"alt":titleArray[m]}).animate({marginLeft:"0px"}, 200);
		$("#fig5_title").html(titleArray[m]);
		$("#fig5_address").html(addressArray[m]);
		
		
		n--;
		if(n<0){
			n = arrayLength-1;	
		}
		if(n==arrayLength){m=0;}
		
		$("#fig6").find("img").stop(true,true).animate({marginLeft:"-300px"}, 400);
		$("#fig6").find("img").stop(true,true).attr({"src":imgArray[n],"alt":titleArray[n]}).animate({marginLeft:"0px"}, 200);
		$("#fig6_title").html(titleArray[n]);
		$("#fig6_address").html(addressArray[n]);
		
		
		o--;
		if(o<0){
			o = arrayLength-1;	
		}
		if(o==arrayLength){o=0;}
		
		$("#fig7").find("img").stop(true,true).animate({marginLeft:"-300px"}, 400);
		$("#fig7").find("img").stop(true,true).attr({"src":imgArray[o],"alt":titleArray[o]}).animate({marginLeft:"0px"}, 200);
		$("#fig7_title").html(titleArray[o]);
		$("#fig7_address").html(addressArray[o]);
		
	}

	});
