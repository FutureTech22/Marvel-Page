jQuery(function() {


    $.ajax({
        url: 'https://gateway.marvel.com:443/v1/public/characters?limit=30&apikey=d3e1f14903d8f864fcdbfeeebccff240',
        success: function(response) {

            response.data.results.forEach(function(comic) {
                $('#comics').append(`
		<div class="comic col-md-4"> 
		${comic.name})
	<img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
	<button class='descriptBtn'>Info</button>
	<p class='hide description'>${comic.description}</p>
	</div>`)
            })
        }
    })

    $.ajax({
        url: 'https://gateway.marvel.com:443/v1/public/comics?limit=3&apikey=d3e1f14903d8f864fcdbfeeebccff240',
        success: function(response) {

            response.data.results.forEach(function(comic) {
                console.log(comic);
                $('#character').append(`
		<div class="comic col-md-4"> 
		${comic.title})
	<img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" />
	</div>`)
            })
        }
    });


    $("body").on('click','button',function(){
    	$(this).parent().find('.description').toggleClass('hide');
    })

});
