function cartController() {
    if ((sessionStorage.getItem('cart') != null) && (JSON.parse(sessionStorage.getItem('cart')).length > 0)) {
        var products = JSON.parse(sessionStorage.getItem('cart'));
        var total = JSON.parse(sessionStorage.getItem('total'));

        var cartSource = $('#cartTemplate').html();
        var cartTemplate = Handlebars.compile(cartSource);

        var cartHTML = cartTemplate({ item: products });
        $('main').html(cartHTML);
        $('#totalCost').text(total);


        $('input.changeQuantity').on('change', function () {
            var cartItemId = $(this).closest('tr').attr('id');
            var newQuantity = $(this).val();
            cartStorage.changeCartItem(cartItemId, newQuantity);
            cartController();
        });


        $('.deleteItem').on('click', function () {
            var cartItemId = $(this).closest('tr').attr('id');
            cartStorage.removeCartItem(cartItemId);
            cartController();
        });


        $('#purchaseBut').on('click', function () {
            var user = JSON.parse(sessionStorage.getItem('loggedUser'));

            for (var i = 0; i < products.length; i++) {
                var data = { "product_name": products[i].product[0].product_name, "quantity": products[i].quantity }

                sendRequest('count', 'GET', data, function showResponse(response) {
                   
                    if (response[0].count_available > 0) {
                        user.orders += (response[0].product_name + " ");

                        sessionStorage.setItem("userOrders", user.orders);
                        var q = Number(response[0].count_available - response[0].quantity);
                 
                        var d = { "product_name": response[0].product_name, "quantity": q };
                        sendRequest('purchase', 'PUT', d, function showResponse(r) {
                            alert('Вашата поръчка е осъществена успешно!');
                            cartStorage.emptyCart();

                            location.replace('#home');
                        })
                    } else {
                        alert("Този продукт е временно изчерпан!");
                    }
                })

                //tuk response e undefined
            }
        });

        $('.items').on('click', function () {
            var title = $(this).closest('tr').children().eq(1).children().eq(0).text();
            itemController(title);
        });

    } else {
        var emptyCartText = ' <p style="font-size:25px; position:relative; top:160px; left:480px">Вашата количка е празна!</p>\n' +
            '        <button style="float:right; position:relative; top:130px" onclick="(function(){location.replace(\'#home\')})();">\n' +
            '            Разгледайте нашите продукти\n' +
            '        </button>';
    
        $('main').html(emptyCartText);
    }
}