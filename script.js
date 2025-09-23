document.addEventListener('DOMContentLoaded', () => {
	// Navbar appearance on scroll
	const nav = document.getElementById('mainNav');
	const togglerIcon = () => {
		if (!nav) return;
		const btnIcon = nav.querySelector('.navbar-toggler i');
		if (!btnIcon) return;
		btnIcon.classList.toggle('text-white', !nav.classList.contains('scrolled'));
		btnIcon.classList.toggle('text-dark', nav.classList.contains('scrolled'));
	};
	const onScroll = () => {
		if (!nav) return;
		if (window.scrollY > 10) {
			nav.classList.add('scrolled');
		} else {
			nav.classList.remove('scrolled');
		}
		togglerIcon();
	};
	window.addEventListener('scroll', onScroll);
	onScroll();

	// Reveal on scroll
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(e => {
			if (e.isIntersecting) {
				e.target.classList.add('show');
				observer.unobserve(e.target);
			}
		});
	}, { threshold: 0.15 });
	document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

	// Active year
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();
});
