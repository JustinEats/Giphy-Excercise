const $form = $('#giphy-form');
const $input = $('#giphy-input');
const $buttonRemove = $('#remove-all');
const $giphyHere = $('#giphy-append');
const $image = $('img');

async function searchGiphy(searchGif) {
	searchGif = $input.val();
	try {
		const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
			params: { q: searchGif, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' }
		});
		imageInput(res); //Pass in the request inside to invoke appending
	} catch (e) {
		console.log('Search cannot be found');
	}
}
function imageInput(response) {
	//Create a function to seperate DOM manipluation
	const { data } = response.data;
	const $image = $('<img>');
	$image.attr({
		src: data[0].images.original.url,
		class: 'w-50 text-center rounded'
	});
	$giphyHere.append($image);
	console.log(data[0].images.original.url);
}

$form.on('submit', function(e) {
	e.preventDefault();
	searchGiphy($input.val()); //pass in request here with the value input as argument
	$input.val(''); //empty the value after submitted
});

$buttonRemove.on('click', function() {
	$giphyHere.empty();
});
