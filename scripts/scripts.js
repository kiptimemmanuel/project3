function fn() {
  let nameInput = document.getElementById("name").value;
  let emailInput = document.getElementById("email").value;
  let commentInput = document.getElementById("comment").value;
  console.log(nameInput, emailInput, commentInput);
  alert(
    nameInput +
      " we have received your message. Thank you for reaching out to us"
  );
}
$(document).ready(function () {
  $(".p-design").click(function () {
    console.log("clicked");
    $(".design-hidden").toggle();
    $(".design-showing").toggle();
  });
});
$(document).ready(function(){
    $(".pdevelop").click(function(){
        console.log("clicked")
        $(".develop-hidden").toggle();
        $(".develop-showing").toggle();
    })
})
$(document).ready(function(){
    $(".product").click(function(){
        console.log("clicked")
        $(".product-hidden").toggle()
        $(".product-showing").toggle()
    })
})
