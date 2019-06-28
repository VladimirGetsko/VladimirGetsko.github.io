"use strict";

$(document).scroll(function () {
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
  $('html, body').stop().animate({
    scrollTop: 0
  }, 'slow', 'swing');
});
$(document).ready(function () {
  $("form.callback").submit(function () {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      //Change
      data: th.serialize()
    }).done(function () {
      $(th).find('.contacts__success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function () {
        $(th).find('.contacts__success').removeClass('active').fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });
});
$(window).on('load', function () {
  $('.preloader').delay(1000).fadeOut('slow');
}); /////   Characters   /////

var newsTexts = $('.min-text');
var arr = Array.prototype.map.call(newsTexts, function (el) {
  var a = el.innerText.split('');
  if (a.length < 150) return el.innerText;
  var newA = a.slice(0, 150);
  var index = newA.lastIndexOf(' ');
  return newA.slice(0, index).join('') + '...';
});
Array.prototype.forEach.call(newsTexts, function (el, idx) {
  el.innerText = arr[idx];
}); /////   Pagination   /////

var numberOfItems = $('#page .news-sheet__box').length; // Get total number of the items that should be paginated

var limitPerPage = 5; // Limit of items per each page

$('#page .news-sheet__box:gt(' + (limitPerPage - 1) + ')').hide(); // Hide all items over page limits (e.g., 5th item, 6th item, etc.)

var totalPages = Math.round(numberOfItems / limitPerPage); // Get number of pages

$(".pagination").append("<li class='current-page page-item active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>"); // Add first page marker
// Loop to insert page number for each sets of items equal to page limit (e.g., limit of 4 with 20 total items = insert 5 pages)

for (var i = 2; i <= totalPages; i++) {
  $(".pagination").append("<li class='current-page page-item'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>"); // Insert page number into pagination tabs
} // Add next button after all the page numbers  


$(".pagination").append("<li class='page-item' id='next-page'><a class='page-link' href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>"); // Function that displays new items based on page number that was clicked

$(".pagination li.current-page").on("click", function () {
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
}); // Function to navigate to the next page when users click on the next-page id (next page button)

$("#next-page").on("click", function () {
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
}); // Function to navigate to the previous page when users click on the previous-page id (previous page button)

$("#previous-page").on("click", function () {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJzY3JvbGwiLCJ0b2dnbGVDbGFzcyIsInNjcm9sbFRvcCIsImhlaWdodCIsIndpbmRvdyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsInN0b3AiLCJhbmltYXRlIiwicmVhZHkiLCJzdWJtaXQiLCJ0aCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsInNlcmlhbGl6ZSIsImRvbmUiLCJmaW5kIiwiY3NzIiwiaGlkZSIsImZhZGVJbiIsInNldFRpbWVvdXQiLCJmYWRlT3V0IiwidHJpZ2dlciIsIm9uIiwiZGVsYXkiLCJuZXdzVGV4dHMiLCJhcnIiLCJBcnJheSIsInByb3RvdHlwZSIsIm1hcCIsImNhbGwiLCJlbCIsImEiLCJpbm5lclRleHQiLCJzcGxpdCIsImxlbmd0aCIsIm5ld0EiLCJzbGljZSIsImluZGV4IiwibGFzdEluZGV4T2YiLCJqb2luIiwiZm9yRWFjaCIsImlkeCIsIm51bWJlck9mSXRlbXMiLCJsaW1pdFBlclBhZ2UiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsInJvdW5kIiwiYXBwZW5kIiwiaSIsImhhc0NsYXNzIiwiY3VycmVudFBhZ2UiLCJncmFuZFRvdGFsIiwic2hvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsTUFBWixDQUFtQixZQUFVO0FBQzVCRixFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFHLFdBQWIsQ0FBeUIsVUFBekIsRUFBcUNILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksU0FBUixLQUFzQkosQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhSyxNQUFiLEVBQTNEO0FBQ0EsQ0FGRDtBQUlBTCxDQUFDLENBQUNNLE1BQUQsQ0FBRCxDQUFVSixNQUFWLENBQWlCLFlBQVk7QUFDNUIsTUFBSUYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxTQUFSLEtBQXNCSixDQUFDLENBQUMsSUFBRCxD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QkFBK0JzRCxDQUEvQixHQUFtQyxHQUFwQyxDQUFELENBQTBDSSxJQUExQyxHQUQyRCxDQUNUO0FBQ25EOztBQUVEMUQsSUFBQUEsQ0FBQyxDQUFDLHFDQUFxQ3dELFdBQVcsR0FBRyxDQUFuRCxJQUF3RCxHQUF6RCxDQUFELENBQStEakQsUUFBL0QsQ0FBd0UsUUFBeEUsRUFYSyxDQVc4RTtBQUNwRjtBQUNGLENBbEJEIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcblx0JCgnLm5hdmJhcicpLnRvZ2dsZUNsYXNzKCdzY3JvbGxlZCcsICQodGhpcykuc2Nyb2xsVG9wKCkgPiAkKCcubmF2YmFyJykuaGVpZ2h0KCkpO1xyXG59KTtcclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG5cdGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gJCh0aGlzKS5oZWlnaHQoKSkge1xyXG5cdFx0JCgnLmJ1dHRvbl9fdG9wJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcuYnV0dG9uX190b3AnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0fVxyXG59KTtcclxuJCgnLmJ1dHRvbl9fdG9wJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdCQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAnc2xvdycsICdzd2luZycpO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG5cdCQoXCJmb3JtLmNhbGxiYWNrXCIpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuXHRcdHZhciB0aCA9ICQodGhpcyk7XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR0eXBlOiBcIlBPU1RcIixcclxuXHRcdFx0dXJsOiBcIm1haWwucGhwXCIsIC8vQ2hhbmdlXHJcblx0XHRcdGRhdGE6IHRoLnNlcmlhbGl6ZSgpXHJcblx0XHR9KS5kb25lKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoKS5maW5kKCcuY29udGFjdHNfX3N1Y2Nlc3MnKS5hZGRDbGFzcygnYWN0aXZlJykuY3NzKCdkaXNwbGF5JywgJ2ZsZXgnKS5oaWRlKCkuZmFkZUluKCk7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCh0aCkuZmluZCgnLmNvbnRhY3RzX19zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmZhZGVPdXQoKTtcclxuXHRcdFx0XHR0aC50cmlnZ2VyKFwicmVzZXRcIik7XHJcblx0XHRcdH0sIDMwMDApO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG59KTtcclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuXHQkKCcucHJlbG9hZGVyJykuZGVsYXkoMTAwMCkuZmFkZU91dCgnc2xvdycpO1xyXG59KTtcclxuXHJcblxyXG4vLy8vLyAgIENoYXJhY3RlcnMgICAvLy8vL1xyXG5jb25zdCBuZXdzVGV4dHMgPSAkKCcubWluLXRleHQnKTtcclxuXHJcbmNvbnN0IGFyciA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChuZXdzVGV4dHMsIGVsID0+IHtcclxuXHRsZXQgYSA9IGVsLmlubmVyVGV4dC5zcGxpdCgnJyk7XHJcblx0aWYgKGEubGVuZ3RoIDwgMTUwKSByZXR1cm4gZWwuaW5uZXJUZXh0O1xyXG5cdGxldCBuZXdBID0gYS5zbGljZSgwLCAxNTApO1xyXG5cdGxldCBpbmRleCA9IG5ld0EubGFzdEluZGV4T2YoJyAnKTtcclxuXHRyZXR1cm4gbmV3QS5zbGljZSgwLCBpbmRleCkuam9pbignJykgKyAnLi4uJztcclxufSk7XHJcblxyXG5BcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5ld3NUZXh0cywgKGVsLCBpZHgpID0+IHtcclxuXHRlbC5pbm5lclRleHQgPSBhcnJbaWR4XTtcclxufSk7XHJcblxyXG4vLy8vLyAgIFBhZ2luYXRpb24gICAvLy8vL1xyXG5cclxudmFyIG51bWJlck9mSXRlbXMgPSAkKCcjcGFnZSAubmV3cy1zaGVldF9fYm94JykubGVuZ3RoOyAvLyBHZXQgdG90YWwgbnVtYmVyIG9mIHRoZSBpdGVtcyB0aGF0IHNob3VsZCBiZSBwYWdpbmF0ZWRcclxudmFyIGxpbWl0UGVyUGFnZSA9IDU7IC8vIExpbWl0IG9mIGl0ZW1zIHBlciBlYWNoIHBhZ2VcclxuJCgnI3BhZ2UgLm5ld3Mtc2hlZXRfX2JveDpndCgnICsgKGxpbWl0UGVyUGFnZSAtIDEpICsgJyknKS5oaWRlKCk7IC8vIEhpZGUgYWxsIGl0ZW1zIG92ZXIgcGFnZSBsaW1pdHMgKGUuZy4sIDV0aCBpdGVtLCA2dGggaXRlbSwgZXRjLilcclxudmFyIHRvdGFsUGFnZXMgPSBNYXRoLnJvdW5kKG51bWJlck9mSXRlbXMgLyBsaW1pdFBlclBhZ2UpOyAvLyBHZXQgbnVtYmVyIG9mIHBhZ2VzXHJcbiQoXCIucGFnaW5hdGlvblwiKS5hcHBlbmQoXCI8bGkgY2xhc3M9J2N1cnJlbnQtcGFnZSBwYWdlLWl0ZW0gYWN0aXZlJz48YSBjbGFzcz0ncGFnZS1saW5rJyBocmVmPSdqYXZhc2NyaXB0OnZvaWQoMCknPlwiICsgMSArIFwiPC9hPjwvbGk+XCIpOyAvLyBBZGQgZmlyc3QgcGFnZSBtYXJrZXJcclxuXHJcbi8vIExvb3AgdG8gaW5zZXJ0IHBhZ2UgbnVtYmVyIGZvciBlYWNoIHNldHMgb2YgaXRlbXMgZXF1YWwgdG8gcGFnZSBsaW1pdCAoZS5nLiwgbGltaXQgb2YgNCB3aXRoIDIwIHRvdGFsIGl0ZW1zID0gaW5zZXJ0IDUgcGFnZXMpXHJcbmZvciAodmFyIGkgPSAyOyBpIDw9IHRvdGFsUGFnZXM7IGkrKykge1xyXG4gICQoXCIucGFnaW5hdGlvblwiKS5hcHBlbmQoXCI8bGkgY2xhc3M9J2N1cnJlbnQtcGFnZSBwYWdlLWl0ZW0nPjxhIGNsYXNzPSdwYWdlLWxpbmsnIGhyZWY9J2phdmFzY3JpcHQ6dm9pZCgwKSc+XCIgKyBpICsgXCI8L2E+PC9saT5cIik7IC8vIEluc2VydCBwYWdlIG51bWJlciBpbnRvIHBhZ2luYXRpb24gdGFic1xyXG59XHJcblxyXG4vLyBBZGQgbmV4dCBidXR0b24gYWZ0ZXIgYWxsIHRoZSBwYWdlIG51bWJlcnMgIFxyXG4kKFwiLnBhZ2luYXRpb25cIikuYXBwZW5kKFwiPGxpIGNsYXNzPSdwYWdlLWl0ZW0nIGlkPSduZXh0LXBhZ2UnPjxhIGNsYXNzPSdwYWdlLWxpbmsnIGhyZWY9J2phdmFzY3JpcHQ6dm9pZCgwKScgYXJpYS1sYWJlbD1OZXh0PjxzcGFuIGFyaWEtaGlkZGVuPXRydWU+JnJhcXVvOzwvc3Bhbj48L2E+PC9saT5cIik7XHJcblxyXG4vLyBGdW5jdGlvbiB0aGF0IGRpc3BsYXlzIG5ldyBpdGVtcyBiYXNlZCBvbiBwYWdlIG51bWJlciB0aGF0IHdhcyBjbGlja2VkXHJcbiQoXCIucGFnaW5hdGlvbiBsaS5jdXJyZW50LXBhZ2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAvLyBDaGVjayBpZiBwYWdlIG51bWJlciB0aGF0IHdhcyBjbGlja2VkIG9uIGlzIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCBpcyBiZWluZyBkaXNwbGF5ZWRcclxuICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgIHJldHVybiBmYWxzZTsgLy8gUmV0dXJuIGZhbHNlIChpLmUuLCBub3RoaW5nIHRvIGRvLCBzaW5jZSB1c2VyIGNsaWNrZWQgb24gdGhlIHBhZ2UgbnVtYmVyIHRoYXQgaXMgYWxyZWFkeSBiZWluZyBkaXNwbGF5ZWQpXHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBjdXJyZW50UGFnZSA9ICQodGhpcykuaW5kZXgoKTsgLy8gR2V0IHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXHJcbiAgICAkKFwiLnBhZ2luYXRpb24gbGlcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAvLyBSZW1vdmUgdGhlICdhY3RpdmUnIGNsYXNzIHN0YXR1cyBmcm9tIHRoZSBwYWdlIHRoYXQgaXMgY3VycmVudGx5IGJlaW5nIGRpc3BsYXllZFxyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7IC8vIEFkZCB0aGUgJ2FjdGl2ZScgY2xhc3Mgc3RhdHVzIHRvIHRoZSBwYWdlIHRoYXQgd2FzIGNsaWNrZWQgb25cclxuICAgICQoXCIjcGFnZSAubmV3cy1zaGVldF9fYm94XCIpLmhpZGUoKTsgLy8gSGlkZSBhbGwgaXRlbXMgaW4gbG9vcCwgdGhpcyBjYXNlLCBhbGwgdGhlIGxpc3QgZ3JvdXBzXHJcbiAgICB2YXIgZ3JhbmRUb3RhbCA9IGxpbWl0UGVyUGFnZSAqIGN1cnJlbnRQYWdlOyAvLyBHZXQgdGhlIHRvdGFsIG51bWJlciBvZiBpdGVtcyB1cCB0byB0aGUgcGFnZSBudW1iZXIgdGhhdCB3YXMgY2xpY2tlZCBvblxyXG5cclxuICAgIC8vIExvb3AgdGhyb3VnaCB0b3RhbCBpdGVtcywgc2VsZWN0aW5nIGEgbmV3IHNldCBvZiBpdGVtcyBiYXNlZCBvbiBwYWdlIG51bWJlclxyXG4gICAgZm9yICh2YXIgaSA9IGdyYW5kVG90YWwgLSBsaW1pdFBlclBhZ2U7IGkgPCBncmFuZFRvdGFsOyBpKyspIHtcclxuICAgICAgJChcIiNwYWdlIC5uZXdzLXNoZWV0X19ib3g6ZXEoXCIgKyBpICsgXCIpXCIpLnNob3coKTsgLy8gU2hvdyBpdGVtcyBmcm9tIHRoZSBuZXcgcGFnZSB0aGF0IHdhcyBzZWxlY3RlZFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gbmF2aWdhdGUgdG8gdGhlIG5leHQgcGFnZSB3aGVuIHVzZXJzIGNsaWNrIG9uIHRoZSBuZXh0LXBhZ2UgaWQgKG5leHQgcGFnZSBidXR0b24pXHJcbiQoXCIjbmV4dC1wYWdlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGN1cnJlbnRQYWdlID0gJChcIi5wYWdpbmF0aW9uIGxpLmFjdGl2ZVwiKS5pbmRleCgpOyAvLyBJZGVudGlmeSB0aGUgY3VycmVudCBhY3RpdmUgcGFnZVxyXG4gIC8vIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGF0IG5hdmlnYXRpbmcgdG8gdGhlIG5leHQgcGFnZSB3aWxsIG5vdCBleGNlZWQgdGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xyXG4gIGlmIChjdXJyZW50UGFnZSA9PT0gdG90YWxQYWdlcykge1xyXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBSZXR1cm4gZmFsc2UgKGkuZS4sIGNhbm5vdCBuYXZpZ2F0ZSBhbnkgZnVydGhlciwgc2luY2UgaXQgd291bGQgZXhjZWVkIHRoZSBtYXhpbXVtIG51bWJlciBvZiBwYWdlcylcclxuICB9IGVsc2Uge1xyXG4gICAgY3VycmVudFBhZ2UrKzsgLy8gSW5jcmVtZW50IHRoZSBwYWdlIGJ5IG9uZVxyXG4gICAgJChcIi5wYWdpbmF0aW9uIGxpXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsgLy8gUmVtb3ZlIHRoZSAnYWN0aXZlJyBjbGFzcyBzdGF0dXMgZnJvbSB0aGUgY3VycmVudCBwYWdlXHJcbiAgICAkKFwiI3BhZ2UgLm5ld3Mtc2hlZXRfX2JveFwiKS5oaWRlKCk7IC8vIEhpZGUgYWxsIGl0ZW1zIGluIHRoZSBwYWdpbmF0aW9uIGxvb3BcclxuICAgIHZhciBncmFuZFRvdGFsID0gbGltaXRQZXJQYWdlICogY3VycmVudFBhZ2U7IC8vIEdldCB0aGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIHVwIHRvIHRoZSBwYWdlIHRoYXQgd2FzIHNlbGVjdGVkXHJcblxyXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRvdGFsIGl0ZW1zLCBzZWxlY3RpbmcgYSBuZXcgc2V0IG9mIGl0ZW1zIGJhc2VkIG9uIHBhZ2UgbnVtYmVyXHJcbiAgICBmb3IgKHZhciBpID0gZ3JhbmRUb3RhbCAtIGxpbWl0UGVyUGFnZTsgaSA8IGdyYW5kVG90YWw7IGkrKykge1xyXG4gICAgICAkKFwiI3BhZ2UgLm5ld3Mtc2hlZXRfX2JveDplcShcIiArIGkgKyBcIilcIikuc2hvdygpOyAvLyBTaG93IGl0ZW1zIGZyb20gdGhlIG5ldyBwYWdlIHRoYXQgd2FzIHNlbGVjdGVkXHJcbiAgICB9XHJcblxyXG4gICAgJChcIi5wYWdpbmF0aW9uIGxpLmN1cnJlbnQtcGFnZTplcShcIiArIChjdXJyZW50UGFnZSAtIDEpICsgXCIpXCIpLmFkZENsYXNzKCdhY3RpdmUnKTsgLy8gTWFrZSBuZXcgcGFnZSBudW1iZXIgdGhlICdhY3RpdmUnIHBhZ2VcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gbmF2aWdhdGUgdG8gdGhlIHByZXZpb3VzIHBhZ2Ugd2hlbiB1c2VycyBjbGljayBvbiB0aGUgcHJldmlvdXMtcGFnZSBpZCAocHJldmlvdXMgcGFnZSBidXR0b24pXHJcbiQoXCIjcHJldmlvdXMtcGFnZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gIHZhciBjdXJyZW50UGFnZSA9ICQoXCIucGFnaW5hdGlvbiBsaS5hY3RpdmVcIikuaW5kZXgoKTsgLy8gSWRlbnRpZnkgdGhlIGN1cnJlbnQgYWN0aXZlIHBhZ2VcclxuICAvLyBDaGVjayB0byBtYWtlIHN1cmUgdGhhdCB1c2VycyBpcyBub3Qgb24gcGFnZSAxIGFuZCBhdHRlbXB0aW5nIHRvIG5hdmlnYXRpbmcgdG8gYSBwcmV2aW91cyBwYWdlXHJcbiAgaWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7IC8vIFJldHVybiBmYWxzZSAoaS5lLiwgY2Fubm90IG5hdmlnYXRlIHRvIGEgcHJldmlvdXMgcGFnZSBiZWNhdXNlIHRoZSBjdXJyZW50IHBhZ2UgaXMgcGFnZSAxKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjdXJyZW50UGFnZS0tOyAvLyBEZWNyZW1lbnQgcGFnZSBieSBvbmVcclxuICAgICQoXCIucGFnaW5hdGlvbiBsaVwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7IC8vIFJlbW92ZSB0aGUgJ2FjdGl2YXRlJyBzdGF0dXMgY2xhc3MgZnJvbSB0aGUgcHJldmlvdXMgYWN0aXZlIHBhZ2UgbnVtYmVyXHJcbiAgICAkKFwiI3BhZ2UgLm5ld3Mtc2hlZXRfX2JveFwiKS5oaWRlKCk7IC8vIEhpZGUgYWxsIGl0ZW1zIGluIHRoZSBwYWdpbmF0aW9uIGxvb3BcclxuICAgIHZhciBncmFuZFRvdGFsID0gbGltaXRQZXJQYWdlICogY3VycmVudFBhZ2U7IC8vIEdldCB0aGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIHVwIHRvIHRoZSBwYWdlIHRoYXQgd2FzIHNlbGVjdGVkXHJcblxyXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRvdGFsIGl0ZW1zLCBzZWxlY3RpbmcgYSBuZXcgc2V0IG9mIGl0ZW1zIGJhc2VkIG9uIHBhZ2UgbnVtYmVyXHJcbiAgICBmb3IgKHZhciBpID0gZ3JhbmRUb3RhbCAtIGxpbWl0UGVyUGFnZTsgaSA8IGdyYW5kVG90YWw7IGkrKykge1xyXG4gICAgICAkKFwiI3BhZ2UgLm5ld3Mtc2hlZXRfX2JveDplcShcIiArIGkgKyBcIilcIikuc2hvdygpOyAvLyBTaG93IGl0ZW1zIGZyb20gdGhlIG5ldyBwYWdlIHRoYXQgd2FzIHNlbGVjdGVkXHJcbiAgICB9XHJcblxyXG4gICAgJChcIi5wYWdpbmF0aW9uIGxpLmN1cnJlbnQtcGFnZTplcShcIiArIChjdXJyZW50UGFnZSAtIDEpICsgXCIpXCIpLmFkZENsYXNzKCdhY3RpdmUnKTsgLy8gTWFrZSBuZXcgcGFnZSBudW1iZXIgdGhlICdhY3RpdmUnIHBhZ2VcclxuICB9XHJcbn0pOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
