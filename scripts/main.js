window.addEventListener('DOMContentLoaded', () => {
	'use stcrict';


	// menu
	const menu = () => {
		const menuIcon = document.querySelector('.icon-menu'),
			menu = document.querySelector('.menu'),
			scrollBtn = document.querySelectorAll('li.menu__item>a');

		const toggleMenu = () => {
			menuIcon.classList.toggle('active');
			menu.classList.toggle('active');
			document.body.classList.toggle('lock');
		};

		menuIcon.addEventListener('click', toggleMenu);

		const smoothScroll = target => {
			const href = target.getAttribute('href');
			const element = document.querySelector(href);
			window.scrollTo({
				left: 0,
				top: element.offsetTop,
				behavior: 'smooth'
			});
		};

		scrollBtn.forEach(link => {
			link.addEventListener('click', event => {
				event.preventDefault();
				smoothScroll(link);
				if (screen.width <= 992) {
					toggleMenu();
				}
			});
		});
	};

	menu();

	const togglePopup = () => {
		const btn = document.querySelector('.hero__btn'),
			popup = document.querySelector('.popup');


		document.addEventListener('click', event => {
			const target = event.target;

			const popupBody = target.closest('.popup__body');

			if (target.matches('.hero__btn')) {
				popup.classList.add('open');
				document.body.classList.add('lock');
			} else if (popup.classList.contains('open') && !popupBody) {
				popup.classList.remove('open');
				popup.classList.add('hide');
				document.body.classList.remove('lock');
				setTimeout(() => {
					popup.classList.remove('hide');
				}, 300);

			}
		});
	};

	togglePopup();
});