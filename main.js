// theme + localStorage + matchMedia
const themeCheckbox = document.getElementById('themeCheckbox');
	const bodyElement = document.body;
	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	const savedTheme = localStorage.getItem('theme');

	if (savedTheme) {
		bodyElement.setAttribute('data-theme', savedTheme);
		themeCheckbox.checked = savedTheme === 'dark';
	} else if (systemTheme === 'dark') {
		bodyElement.setAttribute('data-theme', 'dark');
		themeCheckbox.checked = true;
	}

	themeCheckbox.addEventListener('change', function() {
		if (this.checked) {
			bodyElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		} else {
			bodyElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}
	});

// jsPDF
function printBlock(printContent) {
	const blockToPrint = document.getElementById(printContent);

	const opt = {
		margin: [8, 0, 0, 0],
		filename: 'resume.pdf',
		image: { type: 'jpeg', quality: 1.0 },
		html2canvas: { scale: 10, logging: true, dpi: 960, letterRendering: true },
		jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
		jsPDFEditor: { removeTitle: true, removePrint: true, removeLogo: true, logoImage: 'data:image/png;base64,...' },
	};
	
	html2pdf().set(opt).from(blockToPrint).save();
}
