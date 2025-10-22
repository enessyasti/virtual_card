document.getElementById('vcard-btn').addEventListener('click', ()=>{
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:<!-- Your Name -->
ORG:<!-- Your Organization or leave empty -->
EMAIL:<!-- Your Email -->
TEL:<!-- Your Phone Number -->
END:VCARD`;

  const blob = new Blob([vCardData], {type: 'text/vcard'});
  const url = URL.createObjectURL(blob);

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(isIOS){
    window.open(url, '_blank');
  } else {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'YourName.vcf';
    link.click();
  }
});
