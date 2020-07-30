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
		imageInput(res); //Pass in the request inside to invoke
	} catch (e) {
		console.log('Search cannot be found');
	}
}
function imageInput(response) {
	const { data } = response.data;
	const $image = $('<img>');
	$image.attr({
		src: data[0].images.original.url,
		class: 'w-50'
	});
	$giphyHere.append($image);
	console.log(data[0].images.original.url);
}

function randomIndex(random) {
	const randomIdx = random.length;
	Math.floor(Math.random() * randomIdx);
}

$form.on('submit', function(e) {
	e.preventDefault();
	searchGiphy($input.val());
	$input.val('');
});
