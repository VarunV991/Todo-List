$("ul").on("click","li",function(){
	$(this).toggleClass("done");
})

$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todoText="<li>"+"<span><i class='fa fa-trash' aria-hidden='true'></i></span>"+$(this).val()+"</li>";
		$("ul").append(todoText);
		$(this).val("");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").slideToggle(500);
})