$(document).ready(function(){
				$('.menu-toggle').click(function(){
					$('nav ul').slideToggle('400');
					$('.menu-toggle').toggleClass('active')

				})
			})