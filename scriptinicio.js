document.addEventListener("DOMContentLoaded", function() {
    let cart = [];
    
    // Alternar visibilidade do cardápio
    document.getElementById("toggle-cardapio").addEventListener("click", function(event) {
        event.preventDefault();
        let menuSection = document.getElementById("cardapio");
        menuSection.classList.toggle("hidden");
    });

    // Adicionar itens ao carrinho
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            let itemName = this.getAttribute("data-name");
            let itemPrice = parseFloat(this.getAttribute("data-price"));

            cart.push({ name: itemName, price: itemPrice });
            updateCart();
        });
    });

    // Atualizar carrinho
    function updateCart() {
        let cartList = document.getElementById("cart-items");
        let totalPrice = 0;
        cartList.innerHTML = "";

        cart.forEach((item, index) => {
            totalPrice += item.price;
            let li = document.createElement("li");
            li.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)} <button onclick="removeItem(${index})">❌</button>`;
            cartList.appendChild(li);
        });

        document.getElementById("total-price").textContent = `R$ ${totalPrice.toFixed(2)}`;
    }

    // Remover item do carrinho
    window.removeItem = function(index) {
        cart.splice(index, 1);
        updateCart();
    };

    // Esvaziar carrinho
    document.getElementById("clear-cart").addEventListener("click", function() {
        cart = [];
        updateCart();
    });
});

