$(document).ready(function() {
   $("#el1").draggable();
   $("#el1").resizable();
   $("#sort1").sortable();

    $("#el2").draggable({stack:"#drop1"});
   $("#el3").draggable({stack:"#drop1",revert:true});
   $("#drop1").droppable({
      accept:"#el2",
      over:function(){
         $("#el2").css("background-color","#d7fa99");
         $("#drop1").css("background-color","#d7fa99");
      },
      drop:function(){
         $("#el2").css("display","none");
         $("#drop1").css("background-color","#c4f66f");
         $("#drop1").html("Перемещение завершено успешно.");
      }
   });

})