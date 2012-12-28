var contentVisible = true;

$(document).ready(function() {
	contentVisible = false;
	$('.content > div').css({'opacity': '0.0'});
	setTimeout(function() {
		if (!contentVisible) {
			contentVisible = true;
			$('.content > div').animate({'opacity': '1.0'}, 300);
		}
	}, 700);

	var x = 0, y = 0;

	if (document.cookie) {
		var cookies = document.cookie.split('; ');
		for (var i = 0; i < cookies.length; i++) {
			// expected format position=x,y
			if (cookies[i].substring(0, cookies[i].indexOf('=')) != 'position') {
				continue;
			}
			x = parseInt(cookies[i].substring(cookies[i].indexOf('=') + 1, cookies[i].indexOf(',')));
			y = parseInt(cookies[i].substring(cookies[i].indexOf(',') + 1));
		}
	}

	if (x > 0 || y > 0) {
		scrollTo(x, y);
		var retry = 0;
		while (y != window.pageYOffset && retry < 100) {
			$('.content').append('<br/>');
			scrollTo(x, y);
			retry++;
		}
	}
});

$(window).load(function() {
	if (!contentVisible) {
		contentVisible = true;
		$('.content > div').animate({'opacity': '1.0'}, 300);
	}

	$('.thistogglenext').each(function() {
		$(this).text('→ ' + $(this).text());
		$(this).css('cursor', 'pointer');
		$(this).on('click', function() {
			$(this).next().toggle();
			if ($(this).next().is(':hidden')) {
				$(this).text('→ ' + $(this).text().substr(2));
			} else {
				$(this).text('↓ ' + $(this).text().substr(2));
			}
		});
		$(this).next().toggle();
	});
});

$(window).unload(function() {
	var x = window.pageXOffset;
	var y = window.pageYOffset;
	document.cookie = 'position=' + x + ',' + y;
});
