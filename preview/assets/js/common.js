var zf = zf || {};

/* FUNCTIONS
--------------------------------------------------------------------------------------------------------------------------------------*/

/*********** PLACEHOLDER SUPPORT **********/

zf.placeholderSupport = function(){
	var i = document.createElement('input');
	return 'placeholder' in i;
};

/*********** EQUAL HEIGHT ELEMENTS **********/

zf.equalHeight = function(group){
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
};

/* INIT
--------------------------------------------------------------------------------------------------------------------------------------*/

zf.init = function(){
	$('body').addClass('js');

	// Placeholder fallback
	if(!zf.placeholderSupport()){
		$('[placeholder]').each(function(i, el){
			if ($(el).attr('value') == null ||  $(el).attr('value') == "") {
				el.defaultValue = $(el).attr('placeholder');
				$(el).attr('value', el.defaultValue);
			}
		}).focus(function(){
			if($(this).attr('value') == this.defaultValue) $(this).attr('value', '');
		}).blur(function(){
			if($.trim(this.value) == '') this.value = (this.defaultValue ? this.defaultValue : '');
		});
	}

	// Blank links
	$('a[rel=external]').click(function(){
		window.open($(this).attr('href'));
		return false;
	});

	if ($(".fancybox")[0]){
		$('.fancybox').fancybox({
			'width':360,
            'height':160,
            'autoSize' : false
        });
	}

	// zf.$txtarea=$("#txtarea");
	// $("#sug li").click(function(){
	// 	var myText = $(this).text();
	// 	myText = myText.slice(1);
	// 	myText = myText.slice(0,-1);
	// 	zf.$txtarea.val(myText);
	// 	$(this).addClass('current').siblings().removeClass('current');
	// });
	zf.$txtarea=$(".txtarea");
	$("#sug li").click(function(){
		zf.$txtarea.val($(this).text());
        console.log($(this).text());
		$(this).addClass('current').siblings().removeClass('current');
	});

	/*if ($("input[type=file]")[0]){
		$("input[type=file]").filestyle({
		     image: "/assets/toyota/img/input-file.png",
		     imageheight : 24,
		     imagewidth : 92,
		     width : 100
	 	});
	}*/

	if(($('#animation').length > 0) && (window.Animation !== undefined)) {
		var animation = new Animation();
	}
};

/* DOM READY
--------------------------------------------------------------------------------------------------------------------------------------*/

$(document).ready(zf.init);
