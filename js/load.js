function loadFunction() {

    function preloadImages(array) {
        if (!preloadImages.list) {
            preloadImages.list = [];
        }
        var list = preloadImages.list;
        for (var i = 0; i < array.length; i++) {
            var img = new Image();
            img.onload = function() {
                var index = list.indexOf(this);
                if (index !== -1) {
                    list.splice(index, 1);
                }
            }
            list.push(img);
            img.src = array[i];
        }
    }
    
    preloadImages(["../img/w10.jpg", "../img/w20.jpg", "../img/w30.jpg", "../img/w40.jpg"]);

}