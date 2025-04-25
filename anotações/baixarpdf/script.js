function baixarPdf(){
    const link = document.createElement('a');
    link.href = 'Relatório CEBAS Educação 5.0 - Ponteduca.pdf';
    link.download = 'Relatório CEBAS Educação 5.0 - Ponteduca';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}