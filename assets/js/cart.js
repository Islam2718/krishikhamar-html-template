// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function () {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];

  // Constructor
  function Item(name, id, discount, img, price, count) {
    this.name = name;
    this.id = id;
    this.discount = discount;
    this.img = img;
    this.price = price;
    this.count = count;
  }

  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }


  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};

  // Add to cart
  obj.addItemToCart = function (id, discount, name, img, price, count) {
    for (var item in cart) {
      if (cart[item].id === id) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, id, discount, img, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function (id, count) {
    for (var i in cart) {
      if (cart[i].id === id) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.addItemFromCart = function (id) {
    for (var item in cart) {
      if (cart[item].id === id) {
        cart[item].count++;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  }
  // Remove item from cart
  obj.removeItemFromCart = function (id) {
    for (var item in cart) {
      if (cart[item].id === id) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function (id) {
    for (var item in cart) {
      if (cart[item].id === id) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add-to-cart').click(function (event) {
  event.preventDefault();
  var name = $(this).data('name');
  var id = $(this).data('id');
  var discount = $(this).data('discount');
  var img = $(this).data('img');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(id, discount, name, img, price, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function () {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for (var i in cartArray) {
    output += "<tr>"
      + "<td  class='min-w-100p'> <img src='" + cartArray[i].img + "' style='height: 100px; width: 100px; '></td>"
      + "<td class='min-w-180p'>" + cartArray[i].name + "</td>"
      + "<td class='min-w-100p'>" + cartArray[i].id + "</td>"
      + "<td class='min-w-100p'>(" + cartArray[i].price + ")</td>"
      + "<td class='min-w-100p'>" + cartArray[i].discount + "</td>"
      + "<td class='min-w-250p'><div class='input-group'><button class='minus-item input-group-addon btn btn-theme' data-id=" + cartArray[i].id + ">-</button>"
      + "<input type='number' class='item-count form-control' data-id='" + cartArray[i].id + "' value='" + cartArray[i].count + "'>"
      + "<button class='plus-item btn btn-theme input-group-addon' data-id=" + cartArray[i].id + ">+</button></div></td>"
      + "<td class='min-w-100p'><button class='delete-item btn btn-theme' data-id=" + cartArray[i].id + ">X</button></td>"
      + " = "
      + "<td  class='min-w-100p'>" + cartArray[i].total + "</td>"
      + "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
  var name = $(this).data('id')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function (event) {
  var name = $(this).data('id')
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function (event) {
  var name = $(this).data('id')
  shoppingCart.addItemFromCart(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
  var name = $(this).data('id');
  var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();