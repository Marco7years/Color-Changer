function colorChanger() {

    let body = document.body;
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    body.style.backgroundColor = color;

    para = document.querySelector('.pWrapper');
    console.log(para)
    para.innerText = 'Background Color: ' + color;
}