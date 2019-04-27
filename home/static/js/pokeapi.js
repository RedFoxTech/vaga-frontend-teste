console.log('hello again');

$('form').on('submit', function(e) {
    e.preventDefault();

    let types = $('input[type=text]').val().replace(' ' , '');
    types = type.split(',');
    console.log(types);
    let trainerTypes = types.map(function(type) {
        return $.ajax({
            url: 'http://pokeapi.co/api/v2/type/' + type,
            dataType: 'json',
            method: 'GET'
        });    
    });

    console.log(trainerTypes)
});