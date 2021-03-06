
// 实例一个模块，用来专门管理所有的控制器
angular.module('Controllers', [])

.controller('DemoController', ['$scope', function ($scope) {
	// console.log('启动了');
}])

// 导航菜单
.controller('NavController', ['$scope', function ($scope) {
	// 导航数据
	$scope.navs = [
		{link: '#/today', text: '今日一刻', icon: 'icon-home'},
		{link: '#/older', text: '往期内容', icon: 'icon-file-empty'},
		{link: '#/author', text: '热门作者', icon: 'icon-pencil'},
		{link: '#/category', text: '栏目浏览', icon: 'icon-menu'},
		{link: '#/favourite', text: '我的喜欢', icon: 'icon-heart'},
		{link: '#/setting', text: '设置', icon: 'icon-cog'}
	];
}])

// 今日一刻
.controller('TodayController', ['$scope', '$http', '$filter', '$rootScope', function ($scope, $http, $filter, $rootScope) {
	// 获得计算机时间
	var today = $filter('date')(new Date, 'yyyy-MM-dd');

	$rootScope.title = '今日一刻';
	$rootScope.index = 0;
	$rootScope.loaded = false;

	$http({
		url: './api/today.php', // 请求地址，解决跨域问题
		method: 'get',
		params: {today: today}
	}).success(function (info) {

		$rootScope.loaded = true;

		// console.log(info);
		// 日期
		$scope.date = info.date;
		// 文章数据
		$scope.posts = info.posts;
	});

}])

// 往期内容
.controller('OlderController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
	
	$rootScope.title = '往期内容';
	$rootScope.index = 1;
	$rootScope.loaded = false;

	// 
	$http({
		url: './api/older.php', // 
	}).success(function (info) {

		$rootScope.loaded = true;

		console.log(info);

		$scope.date = info.date;
		$scope.posts = info.posts;
	});
}])

// 热门作者
.controller('AuthorController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
	// 
	$rootScope.index = 2;
	$rootScope.title = '热门作者';
	$rootScope.loaded = false;

	$http({
		url: './api/author.php'
	}).success(function (info) {
		$rootScope.loaded = true;

		$scope.rec = info.rec;
		$scope.all = info.all;
	});
}])

// 栏目浏览
.controller('CategoryController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
	// 
	$rootScope.index = 3;
	$rootScope.title = '栏目浏览';
	$rootScope.loaded = false;

	$http({
		url: './api/category.php'
	}).success(function (info) {
		$rootScope.loaded = true;

		$scope.columns = info.columns;
	});
}])

//我的喜欢
.controller('FavouriteController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
	// 
	$rootScope.index = 4;
	$rootScope.title = '我的喜欢';
	$rootScope.loaded = true;

	// $http({
	// 	url: './api/favourite.php'
	// }).success(function (info) {
	// 	$rootScope.loaded = true;

	// 	// $scope.columns = info.columns;
	// });
}])

//设置
.controller('SettingController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
	// 
	$rootScope.index = 5;
	$rootScope.title = '设置';
	$rootScope.loaded = true;

}])