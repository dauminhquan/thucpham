$(document).ready(function (){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    var h = today.getHours();
    var m = today.getMinutes();
    var time = h + ':' + m;
    var today = dd + '/' + mm + '/' + yyyy;
    
    $('h5#time').html ('<b>Quan</b> | ' + today+ ' '+time);
})