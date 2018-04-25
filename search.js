$(document).ready(function(){

    $('#username').keyup(function(e){
        let username =e.target.value;

        $.ajax({
            url: 'https://api.github.com/search/users?q='+username,

            data:{
                client_id : '960da4e143966c69cf46',
                client_secret : '99db2939dba7a24f62a83fa14c45d0f562394e65'
            }
        }).done(function(userData){
            $.ajax({
                url: 'https://api.github.com/search/users?q='+username,
                // Returns JSON data about repositories
                data:{
                    client_id : '960da4e143966c69cf46',
                    client_secret : '99db2939dba7a24f62a83fa14c45d0f562394e65',

                }

            });

            $('#searchResult').empty();
            for(var i=0; i<userData.items.length;i++) {
                var html_element = `
            <div class="panel panel-default" style="margin-top:10px;">
                <div class="panel-heading">
                   <a href="${userData.items[i].html_url}" target="_blank"> <h4 class='text-danger'>${userData.items[i].login}<img class="thumbnail" src="${userData.items[i].avatar_url}" alt="Profile Photo" 
                    style=" max-width:5%; text-align:center;"> </h4></a>
                    </div>
                    </div>
`;
                $('#searchResult').append(html_element);
                var element = $('#searchResult').children().first();
                element.find("h4").css("background-color", "cornflowerblue");



            }
        });
    });



});