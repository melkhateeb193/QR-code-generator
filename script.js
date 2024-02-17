document.addEventListener('DOMContentLoaded', () => {
    const inputId = document.getElementById('inputId');
    const qrBtn = document.querySelector('.qrBtn');
    const qrCodeOutput = document.querySelector('.QrcodeOutput');
    const qrImg = document.querySelector('.qrImg .outPut span');
    const firstDiv = document.getElementById('firstDiv');
    const downloadBtn = document.getElementById('downloadBtn')

console.log(firstDiv)
    qrBtn.addEventListener('click', () => {
        const inputValue = inputId.value.trim();

        if (inputValue !== "") {
            let qrCode = new QRCode(qrImg, {
                text: inputValue,
                width:200,
                height:200,
           
            });

            qrCodeOutput.classList.remove('d-none');
            firstDiv.classList.replace('d-flex' , 'd-none');
        }
    });




    downloadBtn.addEventListener("click" , ()=>{
        const qrCodeDataURL = qrImg.querySelector('canvas').toDataURL('image/png');
        downloadTextFile(qrCodeDataURL , "qrcode.png") 

    })

    function downloadTextFile(content , fileName) {
        const link = document.createElement('a');
        link.href = content;
        link.download = fileName;
        link.click()
    }

    
});
