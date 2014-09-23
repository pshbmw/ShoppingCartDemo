/**
 * Created by SJ9083 on 2014/9/15.
 */
function itemController($scope) {
    $scope.fName = '';
    $scope.price = '';
    $scope.count = '';
    $scope.countAll = '';
    $scope.items = [
        {id:1, fName:'Apple',  price:4, image:"img/01.png", description:"image 01",active:false },
        {id:2, fName:'Banana',   price:3, image:"img/01.png", description:"image 02",active:false },
        {id:3, fName:'Orange',   price:4, image:"img/01.png", description:"image 03" ,active:false},
        {id:4, fName:'Car',  price:12, image:"img/01.png", description:"image 04" ,active:false},
        {id:5, fName:'Lenovo',  price:8, image:"img/01.png", description:"image 05" ,active:false},
        {id:6, fName:'Sony', price:1, image:"img/01.png", description:"image 06" ,active:false}
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
            for (var i=0,len=$scope.items.length;i<len;i++) {
                    $scope.items[i].active=false;
             }
            $scope.items[id-1].active=true;
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
