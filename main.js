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
document.getElementById('printButton').addEventListener('click', function() {
    const pdf = new jsPDF();
    const content = document.getElementById('printBlock').innerHTML;
  
    pdf.fromHTML(content, 15, 15, {
      width: 180
    }, function() {
      pdf.save('your_generated_pdf.pdf');
    });
  });
  
