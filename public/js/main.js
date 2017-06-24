// Your code here ...

$( () => {

  const renderMembers = function(names, photos, emails){
    return `
      <div class="row">
        <div class="col s12 m7">
          <div class="card small">
            <div class="card-image">
              <img src="${photos[0]}">
            </div>
            <div class="card-content">
              <p>${names[0]}</p>
              <p>${emails[0]}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  const $loadMore = $("#js-btn-action-more");


  $loadMore.on("click", (e) => {
    // const $content = $("#content");
    console.log("clicked");
    e.preventDefault();
    $.ajax({
      url: 'https://randomuser.me/api/?results=5',
      dataType: 'json',
      success: function(data) {
      console.log(data);
      const firstNames = [];
      const photos = [];
      const emails = [];

      data.results.forEach((m) => {
        console.log(m.name.first);
        firstNames.push(m.name.first);
      });

      data.results.forEach((m) => {
        console.log(m.picture.thumbnail);
        photos.push(m.picture.medium);
      });

      data.results.forEach((m) => {
        console.log(m.email);
        emails.push(m.email);
      });

      console.log("this is the list: " + firstNames);
      const resultBlock = renderMembers(firstNames, photos, emails);
      console.log("this is result block" + resultBlock);

      $("#members").append(resultBlock);
      console.log($("#members").html());
      }
    });
  });

});