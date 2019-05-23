// Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
var $submitBtn = $(".submitOffer");
var $delteBtn = $(".deleteDeal");
var $completeBtn = $(".completeDeal")
// var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveDeal: function (deal) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/deals",
      data: JSON.stringify(deal)
    });
  },

  updateDeal: function (id) {
    return $.ajax({
      url: "api/deals",
      type: "PUT",
      data: {id: id}
    });
  },

  deleteDeal: function (id) {
    return $.ajax({
      url: "api/delete/" + id,
      type: "DELETE"
    });
  }

};

// empties input form
var refreshInputs = function () {
  $('#offered').val('');
  $('#offeredQTY').val('');
  $('#offeredUnits').val('');
  $('#asked').val('');
  $('#askedQTY').val('');
  $('#askedUnits').val('');
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  console.log('submitted')
  //TODO replace userID with the users' ID
  var newObj = {
    UserId: 1,
    offered: $('#offered').val(),
    offeredQTY: $('#offeredQTY').val(),
    asked: $('#asked').val(),
    askedQTY: $('#askedQTY').val(),
    status: 'open'
  };

  API.saveDeal(newObj).then(function () {
    console.log('deal saved!');
    refreshInputs();
    //TODO add modal to let user know the deal was saved
  });
};

var deleteOffer = function (event) {
  event.preventDefault();
  console.log('deleting...');

  // Get the ID from the button.
  // This is shorthand for $(this).attr("data-planid")
  var id = $(this).data("dealid");

  API.deleteDeal(id).then(()=>{
    console.log('deal deleted!');
  })
}

var completeOffer = function (event) {
  console.log('updating...');

  var id = $(this).data("dealid");

  API.updateDeal(id).then(() => {
    console.log('deal updated!');
  })
}

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function () {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function () {
//     refreshInput();
//   });
// };

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$delteBtn.on("click", deleteOffer);
$completeBtn.on("click", completeOffer);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
