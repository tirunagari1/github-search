$(document).ready(function(){

    $('#username').keyup(function(e){
        let username =e.target.value;

        $.ajax({
            url: 'https://api.github.com/users/'+username,

            data:{
                client_id : '960da4e143966c69cf46',
                client_secret : '99db2939dba7a24f62a83fa14c45d0f562394e65'
            }
        }).done(function(userData){
            $.ajax({
                url: 'https://api.github.com/users/'+username,
                // Returns JSON data about repositories
                data:{
                    client_id : '960da4e143966c69cf46',
                    client_secret : '99db2939dba7a24f62a83fa14c45d0f562394e65',

                }

            });



            $('#searchResult').html(`
            <div class="panel panel-default" style="margin-top:10px;">
                <div class="panel-heading">

                   <a href="${userData.html_url}" target="_blank"> <h4 class='text-danger'>${userData.name}<img class="thumbnail" src="${userData.avatar_url}" alt="Profile Photo" 
                    style=" max-width:5%; text-align:center;"> </h4></a>
                    </div>
                    </div>
`);
        });
    });



});
