// Your code here ...

$( () => {

  const $loadMore = $("#js-btn-action-more");

  $loadMore.on("click", (e) => {
    console.log("clicked");
    e.preventDefault();
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
      console.log(data);
      }
    });
  });



});