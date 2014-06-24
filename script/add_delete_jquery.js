 add_delete_jquery =
{

    addElements:function (value){
        var newItem = $("<div></div>").text(value).addClass("inputTxt");
        var deleteButton = $("<input></input>").addClass("delete").attr("type","image").attr("src","pic/delete2.jpg");
        newItem.appendTo("#inputMessages");
        deleteButton.appendTo(newItem);
    },
    deleteItem:function (){
        $(".delete").click(function(){
            $(this).parent('.inputTxt').remove();
        });
    },
    addWhenLoad:function (arr) {

     $.each(arr, function (key, val) {
         add_delete_jquery.addElements(val);
         add_delete_jquery.deleteItem();
     });
    },
   add: function () {
       $("#add").click(function () {
           var item = $("#info").val();
           this.addElements(item);
           this.deleteItem();

       });
   }
};