$(document).ready(function(){
    var arr = ['Qiu Juntao', 'Jia Wei', 'Shen Tong'];
    var exitedItem;

    function addElements(value){
        var newitem = $("<div></div>").text(value).addClass("inputTxt");
        var deleteButton = $("<input></input>").addClass("delete").attr("type","image").attr("src","delete2.jpg");
        newitem.appendTo("#inputMessages");
        deleteButton.appendTo(newitem);
    }
    function deleteItem(){
        $(".delete").click(function(){
            $(this).parent('.inputTxt').remove();
        });
    }
    $.each(arr, function(key,val) {
        addElements(val);
        deleteItem();
    });

    $("#add").click(function(){
        var item = $("#info").val();
        addElements(item);
        deleteItem();

    });
});