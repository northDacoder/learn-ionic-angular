$http({
 method: 'jsonp',
 url: 'http://api.rottentomatoes.com/api/public/v1.0/movies',
 params: {
     apikey: '88a8qpv9kwg657jxb97ma5nn',
     q: 'The Hobbit',
     page_limit: '5',
     callback: 'JSON_CALLBACK'
 }
}).then(function(promise) {
 for (var i = 0; i < promise.data.movies.length; i++) {
     $scope.titles.push(promise.data.movies[i].title);
 }
});