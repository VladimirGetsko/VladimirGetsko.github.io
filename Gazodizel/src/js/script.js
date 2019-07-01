$(document).scroll(function(){
	$('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
});

$(window).scroll(function () {
	if ($(this).scrollTop() > $(this).height()) {
		$('.button__top').addClass('active');
	} else {
		$('.button__top').removeClass('active');
	}
});
$('.button__top').click(function () {
	$('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
});



$(document).ready(function() {

	$("form.callback").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.contacts__success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.contacts__success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});

$(window).on('load', function () {
	$('.preloader').delay(1000).fadeOut('slow');
});


/////   Characters   /////
const newsTexts = $('.min-text');

const arr = Array.prototype.map.call(newsTexts, el => {
	let a = el.innerText.split('');
	if (a.length < 150) return el.innerText;
	let newA = a.slice(0, 150);
	let index = newA.lastIndexOf(' ');
	return newA.slice(0, index).join('') + '...';
});

Array.prototype.forEach.call(newsTexts, (el, idx) => {
	el.innerText = arr[idx];
});

/////   Pagination   /////

var numberOfItems = $('#page .news-sheet__box').length; // Get total number of the items that should be paginated
var limitPerPage = 5; // Limit of items per each page
$('#page .news-sheet__box:gt(' + (limitPerPage - 1) + ')').hide(); // Hide all items over page limits (e.g., 5th item, 6th item, etc.)
var totalPages = Math.round(numberOfItems / limitPerPage); // Get number of pages
$(".pagination").append("<li class='current-page page-item active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>"); // Add first page marker

// Loop to insert page number for each sets of items equal to page limit (e.g., limit of 4 with 20 total items = insert 5 pages)
for (var i = 2; i <= totalPages; i++) {
  $(".pagination").append("<li class='current-page page-item'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>"); // Insert page number into pagination tabs
}

// Add next button after all the page numbers  
$(".pagination").append("<li class='page-item' id='next-page'><a class='page-link' href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");

// Function that displays new items based on page number that was clicked
$(".pagination li.current-page").on("click", function() {
  // Check if page number that was clicked on is the current page that is being displayed
  if ($(this).hasClass('active')) {
    return false; // Return false (i.e., nothing to do, since user clicked on the page number that is already being displayed)
  } else {
    var currentPage = $(this).index(); // Get the current page number
    $(".pagination li").removeClass('active'); // Remove the 'active' class status from the page that is currently being displayed
    $(this).addClass('active'); // Add the 'active' class status to the page that was clicked on
    $("#page .news-sheet__box").hide(); // Hide all items in loop, this case, all the list groups
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page number that was clicked on

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .news-sheet__box:eq(" + i + ")").show(); // Show items from the new page that was selected
    }
  }

});

// Function to navigate to the next page when users click on the next-page id (next page button)
$("#next-page").on("click", function() {
  var currentPage = $(".pagination li.active").index(); // Identify the current active page
  // Check to make sure that navigating to the next page will not exceed the total number of pages
  if (currentPage === totalPages) {
    return false; // Return false (i.e., cannot navigate any further, since it would exceed the maximum number of pages)
  } else {
    currentPage++; // Increment the page by one
    $(".pagination li").removeClass('active'); // Remove the 'active' class status from the current page
    $("#page .news-sheet__box").hide(); // Hide all items in the pagination loop
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .news-sheet__box:eq(" + i + ")").show(); // Show items from the new page that was selected
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
  }
});

// Function to navigate to the previous page when users click on the previous-page id (previous page button)
$("#previous-page").on("click", function() {
  var currentPage = $(".pagination li.active").index(); // Identify the current active page
  // Check to make sure that users is not on page 1 and attempting to navigating to a previous page
  if (currentPage === 1) {
    return false; // Return false (i.e., cannot navigate to a previous page because the current page is page 1)
  } else {
    currentPage--; // Decrement page by one
    $(".pagination li").removeClass('active'); // Remove the 'activate' status class from the previous active page number
    $("#page .news-sheet__box").hide(); // Hide all items in the pagination loop
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .news-sheet__box:eq(" + i + ")").show(); // Show items from the new page that was selected
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
  }
});

///   Magnific Popup    /////

$('.news-item__gallery--item').magnificPopup({
  type:'image',
  gallery: {
    enabled: true
  },
  removalDelay: 300,
  mainClass: 'mfp-fade'
});