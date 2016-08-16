'use strict';

export default ['$rootScope', '$scope', '$timeout', '$state',
    ($rootScope, $scope, $timeout, $state) => {
        $scope.viewName = 'IndexController';
        $scope.currentViewName = '';

        var initSwaper = () => {
            new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                pagination: '.swiper-pagination',
            });
        };

        $scope.setBanners = (banners) => {
            $scope.banners = banners.sort((a, b) => a.index - b.index);
            $timeout(initSwaper);
        };

        $scope.initIndex = () => {
            $scope.$parent.banners = $scope.allBanners.filter(banner => !banner.public).sort((a, b) => a.index - b.index);
            $scope.banners = [];
            return $scope.initDataPromise;
        };

        $scope.initIndex();
    }];