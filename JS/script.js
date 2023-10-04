function openResume(){
    var resumUrl = 'https://drive.google.com/file/d/1U7Z-Ob_7Byz1VqFdlo_IdISE2lWfKV0q/view?usp=drive_link';

    window.open(resumeUrl, '_blank');

    var downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/file/d/1U7Z-Ob_7Byz1VqFdlo_IdISE2lWfKV0q/view?usp=drive_link';
    downloadLink.download = 'Mohit-Chaudhari-Resume.pdf';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}