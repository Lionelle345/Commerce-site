const createNav = () => {
  let nav = document.querySelector('.navbar');

  nav.innerHTML = `
        <div class="nav">
            <img src="img/namme.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box"id="myInput" onkeyup="myFunction()" placeholder="search brand, product">
                    <button class="search-btn" onclick="window.location.href='search.html';">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="skirt.html" class="link">women</a></li>
            <li class="link-item"><a href="canvas.html" class="link">men</a></li>
            <li class="link-item"><a href="jeans.html" class="link">kids</a></li>
            <li class="link-item"><a href="watch.html" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();