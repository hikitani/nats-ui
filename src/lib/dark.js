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
		return false;
	}

	return (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	);
};

export const toogleDarkMode = () => {
	if (!browser) {
		return false;
	}

	if (isDark()) {
		localStorage.theme = 'light';
	} else {
		localStorage.theme = 'dark';
	}
	updateDarkMode();
	return isDark();
};
