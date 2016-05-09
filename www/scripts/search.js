app.controller('searchController', function($scope){
	$scope.zydahSmall = '../assets/images/zydah_small.png';
	$scope.filtersAreShowing = false;
	$scope.searchQuery = '';
	$scope.searchFilters = {
		'genres': [
			{ 'name': 'Action', 'value': false },
			{ 'name': 'Comedy', 'value': false },
			{ 'name': 'Drama', 'value': false },
			{ 'name': 'Fantasy', 'value': false },
			{ 'name': 'Horror', 'value': false },
			{ 'name': 'Romance', 'value': false }
		]
	};

	$scope.toggleFilters = toggleFilters;
	$scope.search = search;

	function toggleFilters() {
		$scope.filtersAreShowing = !$scope.filtersAreShowing;
	}

	function search() {
		
	}
});