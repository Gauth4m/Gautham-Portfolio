function updateTimestamp() {
    const timestampElement = document.getElementById('timestamp');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTimestamp = now.toLocaleDateString('en-US', options);
    timestampElement.textContent = formattedTimestamp;
}

{
setInterval(updateTimestamp, 1000);

updateTimestamp();

setInterval(updateTimestamp, 1000);

updateTimestamp();

}

window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}


    const button = document.getElementById('about-img'); 
    const image = document.querySelector('.about-img img');

    button.addEventListener('click', function () {
        if (image.style.display === 'none' || image.style.display === '') {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

