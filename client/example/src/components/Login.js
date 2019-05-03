function loginRegisterController(){

    $(function(){

        $('main').html($('#loginTemplate').html());
        $('#registerDiv').hide();
        $('#regButton').css('border-bottom', 'none');

        $('#loginButton').on('click', function(){
            $('#loginDiv').show(100);
            $('#registerDiv').hide(100);
            $('#loginButton').css('border-bottom', '2px ridge #9d0052');
            $('#regButton').css('border-bottom', 'none');
        });

        $('#regButton').on('click', function(){
            $('#registerDiv').show(100);
            $('#loginDiv').hide(100);
            $('#loginButton').css('border-bottom', 'none');
            $('#regButton').css('border-bottom', '2px ridge #9d0052');
        });


        $('#logIn').on('click', function(){
            
            var user = $('#user').val();
            var pass = $('#pass').val();

            data = {'name': user, 'password':pass}
            sendRequest( 'customer' , 'POST', data , function showResponse(response){
            if(response==false){
                location.replace('#home');
                var profile = $('<a href="#settings">&nbsp;<img src="assets/images/profileIcon.png"/><br/><span class="normalWhite">МОЯТ ПРОФИЛ</span></a>');
                $('#profile').html(profile);
                sessionStorage.setItem("loggedUser", JSON.stringify(user));
            } else {
                alert('Невалидно потребителско име/парола!');
                return;
            }  })  
        })


        $('#register').on('click', function(event){
            event.preventDefault();
            var user = $('#regUser').val();
            if (user == "") {
                alert("Не сте въвели име!");
                return;
            }
            var password = $('#regPass').val();
            if (password == "") {
                alert("Не сте въвели парола!");
                return;
            }
            var conditionsAccepted = $("input[id='conditionCheckbox']:checked").length;
           
           
           
            data = {'name': user, 'password':password}
            sendRequest( 'customer' , 'POST', data , function showResponse(response){
             if(response==true){
                if(conditionsAccepted==0){
                    alert("Не сте приели условията!");
                    return;
                }

                alert('Вие се регистрирахте успешно!');
                $('#loginDiv').show(100);
                $('#registerDiv').hide(100);
                $('#regUser').val('');
                $('#regPass').val('');
                $('#loginButton').css('border-bottom', '2px ridge #9d0052');
                $('#regButton').css('border-bottom', 'none');

            }else{
                alert('Това потребителско име вече е заето!');
                $('#regUser').val('');
                $('#regPass').val('');
                return;
            }
    
            } ) ;    
        })


        updateUserInSession = (user) => {
            sessionStorage.setItem("loggedUser", JSON.stringify(user))
        }
    })
}
