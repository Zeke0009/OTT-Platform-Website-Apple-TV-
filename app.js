angular.module('appleTVApp', [])
.controller('TVController', function($scope, $interval) {
    // Menu state
    $scope.isMenuOpen = false;
    $scope.isSearchOpen = false;
    
    // Toggle menu
    $scope.toggleMenu = function() {
        $scope.isMenuOpen = !$scope.isMenuOpen;
    };
    
    // Close menu
    $scope.closeMenu = function() {
        $scope.isMenuOpen = false;
    };
    
    // Toggle search
    $scope.toggleSearch = function() {
        $scope.isSearchOpen = !$scope.isSearchOpen;
    };
    
    // Hero carousel - Updated with local image paths
    $scope.currentSlide = 0;
    $scope.heroSlides = [
        {
            image: "Posters/serv.jpg",
            title: "Serverance",
            description: "The groundbreaking series returns with more mysteries and adventures."
        },
        {
            image: "Posters/nap.jpg",
            title: "Napoleon",
            description: "A look at the military commander's origins and his swift, ruthless climb to Emperor"
        },
        {
            image: "Posters/ted.jpg",
            title: "Ted Lasso",
            description: "Based on the award-winning novels by Isaac Asimov."
        }
    ];
    
    // Go to specific slide
    $scope.goToSlide = function(index) {
        $scope.currentSlide = index;
    };
    
    // Auto-advance slides
    var slideInterval = $interval(function() {
        $scope.currentSlide = ($scope.currentSlide + 1) % $scope.heroSlides.length;
    }, 5000);
    
    // Clean up interval when scope is destroyed
    $scope.$on('$destroy', function() {
        $interval.cancel(slideInterval);
    });
    
    // Content rows - Updated with local image paths
    $scope.contentRows = [
        {
            title: "Apple Originals",
            items: [
                { title: "Ted Lasso", poster: "Posters/Ted-Lasso.jpg", info: "Comedy • 3 Seasons" },
                { title: "Severance", poster: "Posters/Severance.jpg", info: "Drama • 2 Seasons" },
                { title: "The Studio", poster: "Posters/The-Studio.jpg", info: "Drama • 3 Seasons" },
                { title: "Silo", poster: "Posters/Silo.jpg", info: "Thriller • 2 Seasons" },
                { title: "MurderBot", poster: "Posters/MurderBot.jpg", info: "Sci-fi • 1 Seasons" },
                { title: "Dark Matter", poster: "Posters/Darkmatter.jpg", info: "Mystery • 1 Season" },
                { title: "Presumed Innocent", poster: "Posters/Presumed-Innocent.jpg", info: "Mystery • 1 Season" },
            ]
        },
        {
            title: "Popular Movies",
            items: [
                { title: "The Gorge", poster: "Posters/thegeorge.jpg", info: "Action/Horror • 2025" },
                { title: "Ghosted", poster: "Posters/Ghosted.jpg", info: "Action/Comedy • 2023" },
                { title: "Wolfs", poster: "Posters/wolfs.jpg", info: "Thriller/Suspense • 2024" },
                { title: "The Family Plan", poster: "Posters/the-family-plan.jpg", info: "Action/Comedy • 2023" },
                { title: "Napoleon", poster: "Posters/Napoleon.jpg", info: "War • 2024" },
                { title: "Argylle", poster: "Posters/Argylle.jpg", info: "Action/Comedy • 2024" },
                { title: "F1", poster: "Posters/F1.jpg", info: "Action/Sports • 2025" },
            ]
        },
        {
            title: "Kids & Family",
            items: [
                { title: "Kick Buttowski", poster: "Posters/kick.jpg", info: "Animation • 2022" },
                { title: "Ben 10", poster: "Posters/ben10.jpg", info: "Animation • 2 Seasons" },
                { title: "Beyblade Metal Fusion", poster: "Posters/beyblade-metal-fusion.jpg", info: "Animation • 2 Seasons" },
                { title: "Tom & Jerry", poster: "Posters/tom.jpg", info: "Kids • 2 Seasons" },
                { title: "Mr. Bean", poster: "Posters/bean.jpg", info: "Kids • 2 Seasons" },
                { title: "Invincible", poster: "Posters/invin.jpg", info: "Kids • 3 Seasons" },
                { title: "IronMan", poster: "Posters/iron.jpg", info: "Kids • 3 Seasons" }
            ]
        }
    ];
});