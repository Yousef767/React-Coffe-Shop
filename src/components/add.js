import audioSrc from '../images/pop.mp3'
export const addItem = (e) => {
    let parentId = e.target.parentElement.parentElement.parentElement.id;
    let all = document.querySelectorAll(`#${parentId}`);
    if ( all.length < 2) {
        let cart = document.getElementById('added-items');
        let total = document.getElementById('total');
        let count = document.getElementById('count');
        let img = e.target.parentElement.parentElement.parentElement.childNodes[0].src;
        let itemPrice = e.target.parentElement.childNodes[0].innerHTML;
        let itemName = e.target.parentElement.parentElement.childNodes[0].innerHTML;
        cart.innerHTML += `
        <div class='added-item' id=${parentId}>
            <img src=${img} alt=''/>
            <div class="item-info">
                <span>${itemName}</span>
                <span>${itemPrice}</span>
            </div>
            <div class="quantity">
                <span onclick="plusItem(this)">+</span>
                <span>1</span>
                <span onclick="minusItem(this)">-</span>
            </div>
        <i class="fa-light fa-trash" onclick="removeItem(this)"></i>
        </div>
    `;
        count.innerHTML = +count.innerHTML + 1;
        total.innerHTML = +total.innerHTML + +itemPrice;
        let audio = new Audio(audioSrc);
        audio.play();
    } else {
        let alertInner = document.createElement('div');
        alertInner.classList.add('alertInner');
        let alert = document.createElement('div');
        alert.classList.add('alert');
        alert.innerHTML = 'Item Alreay Added';
        alertInner.appendChild(alert)
        document.body.appendChild(alertInner)
        setTimeout(() => { alertInner.remove() }, 2500);
    }
}
