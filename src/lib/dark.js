import { browser } from '$app/environment';

const updateDarkMode = () => {
	if (!browser) {
		return;
	}

	if (isDark()) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
};

export const isDark = () => {
	if (!browser) {
		return;
	}

	return (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	);
};

export const toogleDarkMode = () => {
	if (!browser) {
		return;
	}

	localStorage.theme = 'dark';
	updateDarkMode();
};

export const toogleLightMode = () => {
	if (!browser) {
		return;
	}

	localStorage.theme = 'light';
	updateDarkMode();
};
