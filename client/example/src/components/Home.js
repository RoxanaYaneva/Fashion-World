import React, { Component } from 'react';
import "./Main.css"

const cardStyle = {
    width: '18rem',
};

const containerStyle = {
    padding: '140px 20px 200px 20px',
}

class Home extends Component {

    render() {
        return (
            <div class="row" style={containerStyle}>
                <div class="col-sm-3">
                    <div class="card text-center" style={cardStyle} >
                        <div class="card-header">
                            Рокли
                        </div>
                        <img class="card-img-top" src="/images/home/white_dress.png" alt="dresses"/>
                        <a href="/women/dresses" class="btn btn-primary">Разгледай</a>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card text-center" style={cardStyle} >
                        <div class="card-header">
                            Мъжки тениски
                        </div>
                        <img class="card-img-top" src="/images/home/men_tshirt.jpg" alt="men_tshirts"/>
                        <a href="/men/shirts" class="btn btn-primary">Разгледай</a>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card text-center" style={cardStyle} >
                        <div class="card-header">
                            Дамски дънки
                        </div>
                        <img class="card-img-top" src="/images/home/women_jeans.jpg" alt="women_jeans"/>
                        <a href="/women/jeans" class="btn btn-primary">Разгледай</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;


// function homeController() {
//     $(function () {
        
//         window.onload=function(){
//             window.location.hash='home';
//         }
        
//         var main = $('#mainDiv').html();
//         $('main').html(main);

//         var selectionsTemplate = $('#itemsTemplate').text();
//         var selectionsPage = Handlebars.compile(selectionsTemplate);
        
      

       
//             sendRequest('allproducts', 'GET', {}, function showResponse(response){
//                 var items;
//                items=response.filter(i=>{
//                    return i[5]=='m';
//                });
               
//                 for(var i=0; i<items.length; i++){
//                     var img=items[i][5];
//                     items[i].url=img;
//                 }

//                 $('#actualSelections div').eq(1).append($(selectionsPage({ items: items })));
            

//                 items=response.filter(i=>{
//                     return i[5]=='f';
//                 });
                
 
//                  for(var i=0; i<items.length; i++){
//                      var img=items[i][5];
//                      items[i].url=img;
//                  }

 
//                  $('#actualSelections div').eq(0).append($(selectionsPage({ items: items })));
             
//                  localStorage.setItem("products", JSON.stringify(response));

//                 $('.items').on('click', function () {
//                     var title = $(this).children().eq(1).text();
                 
//                     data = {'product_name': title}
                   
//                     sendRequest('product', 'GET', data , function showResponse(response){
                       
                     
//                        location.replace('#item='+response);
                    
                        
                        
//                        var itemTemplate = $('#itemTemplate').text();
//                        var itemPage = Handlebars.compile(itemTemplate);
//                        $('main').html(itemPage(response));
                        
//                        $('#containter').html($('div.description').text());
                   
//                        $('#desc button').on('click', function(){
//                                event.preventDefault();
                   
//                                var buttonClass=$(this).attr('class');
//                                $('#containter').html($('div.'+buttonClass).text());
//                        })


//                        $('#addToCart').on('click', function (event) {
                            
//                         event.preventDefault();
                        
//                         var quantity = parseInt($('#productQuantity').val());
                  
//                         if (sessionStorage.getItem('loggedUser') != null) {
//                             var user = JSON.parse(sessionStorage.getItem('loggedUser'));
                            
//                             cartStorage.addCartItem(response, quantity);
//                         } else {
//                             alert('Трябва да се логнете, за да добавите продукт в кошницата!');
//                             location.replace('#loginRegister');
//                         }
//                     });

                    
//                     })});
                
//             });

//     })

// }


// function itemController(title) {
    
//      var product = productStorage.findItem(title);
//      location.replace('#item='+product.name);
 
//      var itemTemplate = $('#itemTemplate').text();
//      var itemPage = Handlebars.compile(itemTemplate);
//      $('main').html(itemPage(product));
 
//      $('#containter').html($('div.description').text());
 
//      $('#desc button').on('click', function(){
//              event.preventDefault();
 
//              var buttonClass=$(this).attr('class');
//              $('#containter').html($('div.'+buttonClass).text());
//      })


//     //adding to cart

//     $('#addToCart').on('click', function (event) {
        
//         event.preventDefault();
//         var quantity = parseInt($('#productQuantity').val());
      
//         if (sessionStorage.getItem('loggedUser') != null) {
//             var userId = JSON.parse(sessionStorage.getItem('loggedUser')).id;
//             cartStorage.addCartItem(product, quantity);
//         } else {
//             alert('Трябва да се логнете, за да добавите продукт в кошницата!');
//             location.replace('#loginRegister');
//         }
//     });

// }



