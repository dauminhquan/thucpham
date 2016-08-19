var express = require('express');
var path = require('path');
var thucpham = express.Router();
thucpham.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../web', 'thucpham.html'));
});
thucpham.post('/', function (req, res){
    var idanh = req.body.id;
    var html = "<div class=\"col-sm-6\" onclick=\"thongtinchitietthucpham()\">";
    html += "<a href=thongtinthucpham.html target=\"_blank\">";
    html += "<br>";
    html += "<img src=\"image/" + idanh + ".jpg\"class=\"img-rounded\" style=\"width:100%\"></a>";
    html += "</div>";
    html += "<div class=\"col-sm-6\">";
    html += "<br>";
    html += "<div class=\"well\"><p class=\"text-info\">Thành phần dinh dưỡng gồm có:";
    html += "100g chứa 28g protein cùng rất nhiều B12, B6, khoáng chất cacnitin, kali, kẽm, magie, sắt...";
    html += "</p></div>";
    html += "<div class=\"well\"><p class=\"text-info\">Thành phần dinh dưỡng gồm có:";
    html += "100g chứa 28g protein cùng rất nhiều B12, B6, khoáng chất cacnitin, kali, kẽm, magie, sắt...";
    html += "</p></div>";
    html += "<div class=\"well\"><p class=\"text-info\">Thành phần dinh dưỡng gồm có:";
    html += "100g chứa 28g protein cùng rất nhiều B12, B6, khoáng chất cacnitin, kali, kẽm, magie, sắt...";
    html += "</p></div>";
    res.send(html);
})
module.exports = thucpham;