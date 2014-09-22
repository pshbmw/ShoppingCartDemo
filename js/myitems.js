/**
 * Created by SJ9083 on 2014/9/15.
 */
function itemController($scope) {
    $scope.fName = '';
    $scope.price = '';
    $scope.count = '';
    $scope.countAll = '';
    $scope.items = [
        {id:1, fName:'Apple',  price:4, "image":"img/01.png", "description":"image 01" },
        {id:2, fName:'Banana',   price:3, "image":"img/02.jpg", "description":"image 02" },
        {id:3, fName:'Orange',   price:4, "image":"img/03.jpg", "description":"image 03" },
        {id:4, fName:'Car',  price:12, "image":"img/04.jpg", "description":"image 04" },
        {id:5, fName:'Lenovo',  price:8, "image":"img/05.jpg", "description":"image 05" },
        {id:6, fName:'Sony', price:1, "image":"img/06.jpg", "description":"image 06" }
    ];
    $scope.edit = true;
    $scope.priceEdit= true;
    $scope.countAllEdit=true;

    $scope.edititem = function(id) {

        if (id == 'clear') {
            $scope.edit = true;
            $scope.fName = '';
            $scope.price = '';
            $scope.count = '';
            $scope.countAll = 0;

        } else {
            $scope.edit = false;
            $scope.fName = $scope.items[id-1].fName;
            $scope.price = $scope.items[id-1].price;
            $scope.count = 1;
            $scope.countAll = $scope.items[id-1].price*$scope.count;
        }
    };

    $scope.$watch('count',function() {
        $scope.countAll=$scope.price*$scope.count;
    });
    $scope.$watch('fName',selectf);
    $scope.$watch('countAll',discountf);

    function discountf(newValue,oldValue,scope){
        $scope.discount=newValue>100? 20:0;
        $scope.afterdiscount=$scope.countAll-$scope.discount;
    }   

    function selectf(newValue,oldValue,scope){
        for (var i=0,len=$scope.items.length;i<len;i++) {
            if(newValue==$scope.items[i].fName)
            {
                $scope.price=$scope.items[i].price;
                $scope.count=1;
            };   
         }
    }

}
