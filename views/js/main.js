

$(document).ready(function(){

    $('.menuIcon').on("click", function(){

        if($('.menuList').attr('class') != undefined){
        $('.menuList').show();
        $('.menuList').animate({
            left : "0%"
        }, 1000,function(){
            if($(this).attr("class").match("menuList")){
                $(this).attr("class", "revMenuList");
            }else{

                $(this).attr("class", "menuList");
            }
        })
    }else{

        $('.revMenuList').fadeOut();
        $('.revMenuList').attr("class", "menuList");

        $('.menuList').show();
        $('.menuList').animate({
            left : "-80%"
        }, 1000,function(){
           
        })
    }
    })


    
})


 