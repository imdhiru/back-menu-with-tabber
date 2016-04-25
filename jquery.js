$(function() {

     /** 
      * Mobile Nav
      *
      * Toggle Side Menu - Left or Right
 	 */

	// Prepend a mobile icon to the header
	$(".custom-menu-primary").after('<a class="mobile-icon"><i class="fa fa-bars"></i></a>');
	 
    // Append a child-trigger icon
    $('.custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"></div>'); 
     
	// Prepend a close icon to the menu
	//$(".custom-menu-primary .hs-menu-flow-horizontal>ul").before('<a class="close-icon"><span></span></a>');
	
    $(".custom-menu-primary .hs-menu-flow-horizontal>ul").before('<div class="mm-header"><a class="mm-prev" style="display: none;"></a><span class="mm-title"></span><a class="mm-next" style="display: none;"></a></div>');
    
	// Add body class on mobile icon click
	$(".mobile-icon, .close-icon,#btn-menu").click(function(){
	$("body").toggleClass("show-mobile-nav ");
	});
	 
	// Set the menu height to 100% of the document
	function setMenuHeight(){
	   var height = $(document).outerHeight(true);
	   $(".custom-menu-primary").height(height);
	}
	setMenuHeight();
	
	// Wrap body contents with a div so the transforms will work
    $('body> div').find('script:not(script[type="IN/Share"])').remove().end().wrapAll('<div id="site-wrapper"></div>');
    
    $('#trigger-header-search').click(function( e ){
        e.preventDefault();
        $('.custom-header-search').toggleClass("active");
    });
    
    $('.custom-menu-primary .hs-menu-wrapper ul ul .child-trigger').click(function(){
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);    
        return false;
    });
    $('.mm-prev').click(function(){
        $('ul ul li.clicked').find('.hs-menu-children-wrapper').slideUp(250);    
        return false;
    });
    $('.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        //$(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });
    $('.child-trigger').click(function() {                 
        $(this).parent().siblings('.hs-item-has-children').removeClass('clicked');
        $(this).parent().parent().parent().siblings().removeClass('custom-child-open');
        $(this).parent().parent().parent().addClass('custom-child-open');
        $(this).parent().toggleClass('clicked');
        $('.mm-header').show();
        $('.mm-prev').slideDown();
        $('body').addClass('hide-li');   
        getChildTitle();
        return false;
    }); 
    
    $('a.mm-prev').click(function() {          
        //$(this).slideToggle();
        $('.custom-menu-primary .hs-menu-wrapper').removeClass('custom-child-open');
        $('.custom-menu-primary .hs-menu-wrapper ul > li').removeClass('clicked');
        $('body').removeClass('hide-li'); 
        getChildTitle();
    });
        
});


function getChildTitle(){
   if( $('.custom-menu-primary .hs-menu-wrapper').hasClass( "custom-child-open" ) ){
        var title;
        if($('.custom-child-open > ul > li.clicked > ul > li').hasClass('clicked')) {
            title = $('.custom-child-open > ul > li.clicked > ul > li.clicked > a').text();
        } else {
            title = $('.custom-child-open > ul > li.clicked > a').text();
        }
        $('.mm-header > .mm-title').html(title);
    } 
    else {
        $('.mm-header').toggle();
        $('.mm-prev').slideUp();
    }
};


// A $( document ).ready() block.
$( document ).ready(function() {
 
$('.footer-container-wrapper').after('<a id="backtotop" href="#top"><span>Terug naar boven</span></a>');
$("#backtotop").hide();

$(window).scroll(function(){
    if ($(window).scrollTop()>100){
        $("#backtotop").fadeIn(500);
    }
    else
    {
        $("#backtotop").fadeOut(500);
    }
    });
    //back to top
    $("#backtotop").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
});


$(document).ready(function(){
$('.hs-item-has-children').click(function() {
$(this).siblings().removeClass('click');
$(this).toggleClass('click');
});

});


$(function () {
   $('.mobile-icon').click(function () {
       $('div#tab1').toggleClass('active');
       
   });
   
 
});
$('.tab2').click(function () {
       $('#tab1.active').hide();
     
   });
   
   $(function () {
   $('.tab1.active').click(function () {
       $('div#tab2').hide();
     
   });
   
 
});
   
   
 $(document).ready(function(){
		$(".tab_content").hide(); 
		$("ul.tabs li:first").addClass("active").show();
		$(".tab_content:first").show(); 
		$("ul.tabs li").click(function() {
			$("ul.tabs li").removeClass("active");
			$(this).addClass("active");
			$(".tab_content").hide();
			var activeTab = $(this).find("a").attr("href");
			$(activeTab).fadeIn(500); 
			//$(activeTab).animate({ opacity:'toggle',height:'toggle'},1000); //Fade in the active content
			return false;
		});
	});
