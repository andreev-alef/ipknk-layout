
(function($){
	$(document).ready(function() {
		var options = {};
	
		function callback(sb,sc,si) {
			if (sb.css('display') == 'none') {
				sc.css({'margin-bottom' : '10px'});
				si.attr({'src' : 'http://ipknk.ru/wp-content/plugins/wp-special-textboxes/images/show.png', 'title' : 'Показать'});
								sc.css({'-webkit-border-bottom-left-radius' : '5px', 
						'-webkit-border-bottom-right-radius' : '5px', 
						'-moz-border-radius-bottomleft' : '5px', 
						'-moz-border-radius-bottomright' : '5px',
            'border-bottom-left-radius' : '5px', 
						'border-bottom-right-radius' : '5px'});
							}
			else {
				si.attr({'src' : 'http://ipknk.ru/wp-content/plugins/wp-special-textboxes/images/hide.png', 'title' : 'Скрыть'});
			}
		
			$(this).parent().parent().children('#caption').css({'margin-bottom' : '10px'});
			return false;
		}
	
		$(".stb-tool").bind("click", function() {
			id = $(this).attr('id').split('-');
      idn = id[2];
      sb = $('#stb-body-box-'+idn);
			sc = $('#stb-caption-box-'+idn);
      si = $('#stb-toolimg-'+idn);
			if (sb.css('display') != 'none')	{				
				sb.hide('blind',options,500, function() {callback(sb,sc,si);});
			}
			else {
				sb.show('blind',options,500,function() {callback(sb,sc,si);});
				sc.css({'margin-bottom' : '0px'});			
								sc.css({'-webkit-border-bottom-left-radius' : '0px', 
						'-webkit-border-bottom-right-radius' : '0px', 
						'-moz-border-radius-bottomleft' : '0px', 
						'-moz-border-radius-bottomright' : '0px',
            'border-bottom-left-radius' : '0px', 
						'border-bottom-right-radius' : '0px'});
							}
			return false;
		});
		return false;
	});
})(jQuery)