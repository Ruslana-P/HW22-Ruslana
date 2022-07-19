// Exercise 5.1
$('.test').css({'color':'red'});

// Exercise 5.1
$('h2.test').css({'color': 'red'});

// Exercise 5.3
$('p').next('p').css({'color': 'red'});

// Exercise 5.4
$('li + li.www').css('color', 'red');

// Exercise 5.5
$('h2 i').css('color', 'red');

// Exercise 5.6
$('h2').children('i').css({'color': 'red'});

// Exercise 6.1
$("h2:not('h2.test')").css({'color': 'red'});

// Exercise 6.2
$(":header:not('.test')").css({'color': 'red'});

// Exercise 6.3
$(':header').next(':header').css({'color': 'red'});

// Exercise 6.4
$(':header.test').next(':header.test').css({'color': 'red'});

