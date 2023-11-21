$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "main.json",
        dataType: "json",
        success: function (data) {
            $("#testname1").text(data[1].name);  
            $("#testname2").text("年齡:"+data[1].age);  
            $("#testname3").text("出生地:"+data[1].address.country);

            data.forEach(function(element){
                console.log(element.name+" "+element.age +"歲 "+"住在"+element.address.country);
            });
        },
        error:function(){
            console.error("發生錯誤");
        },
    });


});

