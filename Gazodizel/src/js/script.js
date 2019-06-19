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

var numberOfItems = $('#page .news-sheet__box').length; // Получить общее количество элементов, которые должны быть разбиты на страницы
var limitPerPage = 3; // Лимит элементов на каждой странице
$('#page .news-sheet__box:gt(' + (limitPerPage - 1) + ')').hide(); // Скрыть все элементы за пределами страницы (например, 5-й элемент, 6-й элемент и т. д.)
var totalPages = Math.round(numberOfItems / limitPerPage); // Получить количество страниц
$(".pagination").append("<li class='page-item active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>"); // Добавить маркер первой страницы

// Цикл для вставки номера страницы для каждого набора элементов, равного пределу страницы (например, ограничение 4 с общим количеством элементов 20 = вставка 5 страниц)
for (var i = 2; i <= totalPages; i++) {
  $(".pagination").append("<li class='page-item'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>"); // Вставьте номер страницы в закладки
}

// Добавить следующую кнопку после всех номеров страниц  
$(".pagination").append("<li class='page-item' id='next-page'><a class='page-link' href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");

// Функция, которая отображает новые элементы в зависимости от номера страницы, по которой щелкнули
$(".pagination li.page-item").on("click", function() {
  // Проверьте, является ли номер страницы, на который вы нажали, текущая страница, которая отображается
  if ($(this).hasClass('active')) {
    return false; // Вернуть false (т.е. Ничего не делать, так как пользователь нажал на номер страницы, которая уже отображается)
  } else {
    var currentPage = $(this).index(); // Получить номер текущей страницы
    $(".pagination li").removeClass('active'); // Удалить статус 'active' класс со страницы, которая отображается в данный момент
    $(this).addClass('active'); // Добавьте статус 'active' класс на страницу, на которую вы нажали
    $("#page .news-sheet__box").hide(); // Скрыть все элементы в цикле, в этом случае все группы списка
    var grandTotal = limitPerPage * currentPage; // Получить общее количество элементов до номера страницы, по которой был выполнен клик

    // Переберите все элементы, выбрав новый набор элементов на основе номера страницы
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .news-sheet__box:eq(" + i + ")").show(); // Показать элементы с новой выбранной страницы
    }
  }

});

// Функция для перехода на следующую страницу, когда пользователи нажимают на идентификатор следующей страницы (кнопка следующей страницы)
$("#next-page").on("click", function() {
  var currentPage = $(".pagination li.active").index(); // Определить текущую активную страницу
  // Убедитесь, что переход на следующую страницу не будет превышать общее количество страниц
  if (currentPage === totalPages) {
    return false; // Возвратить false (то есть, больше не можете перемещаться, так как это превысило бы максимальное количество страниц)
  } else {
    currentPage++; // Увеличить страницу на один
    $(".pagination li").removeClass('active'); // Удалить статус 'active' класс с текущей страницы
    $("#page .news-sheet__box").hide(); // Скрыть все элементы в петле нумерации страниц
    var grandTotal = limitPerPage * currentPage; // Получить общее количество элементов до выбранной страницы

    // Переберите все элементы, выбрав новый набор элементов на основе номера страницы
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .news-sheet__box:eq(" + i + ")").show(); // Показать элементы с новой выбранной страницы
    }

    $(".pagination li.page-item:eq(" + (currentPage - 1) + ")").addClass('active'); // Сделать новый номер страницы 'active' страница
  }
});

// Функция для перехода на предыдущую страницу, когда пользователи нажимают на идентификатор предыдущей страницы (кнопка предыдущей страницы)
$("#previous-page").on("click", function() {
  var currentPage = $(".pagination li.active").index(); // Определить текущую активную страницу
  // Убедитесь, что пользователи не находятся на странице 1 и пытаются перейти на предыдущую страницу.
  if (currentPage === 1) {
    return false; // Вернуть false (т.е. не может перейти на предыдущую страницу, потому что текущая страница - страница 1)
  } else {
    currentPage--; // Декримент страницы по одному
    $(".pagination li").removeClass('active'); // Удалить статус статуса 'active' с номера предыдущей активной страницы
    $("#page .news-sheet__box").hide(); // Скрыть все элементы в петле нумерации страниц
    var grandTotal = limitPerPage * currentPage; // Получить общее количество элементов до выбранной страницы

    // Переберите все элементы, выбрав новый набор элементов на основе номера страницы
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page .news-sheet__box:eq(" + i + ")").show(); // Показать элементы с новой выбранной страницы
    }

    $(".pagination li.page-item:eq(" + (currentPage - 1) + ")").addClass('active'); // Сделать новый номер страницы 'active' страница
  }
});