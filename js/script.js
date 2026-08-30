
$(document).ready(function(){

    // hide loader after page load
    $('.loaderWrapper').fadeOut();



    jQuery('.banner_slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true
    });


    // .fadeIn()
    // .fadeToggle()

    // .hide()
    // .show()
    // .toggle()
});

$(document).on('click', '.generateBtn', function (){
    
    // add button in the start of .banner_content element
    $('.banner_content').prepend('<button class="alertMe">Alert Popup</button>');
    
    // add button in the end of .banner_content element
    $('.banner_content').append('<button class="alertMe">Alert Popup</button>');
});

// Will click on all elements either they were present on page load or dynamically added later.
$(document).on('click', '.alertMe', function(){
    alert('Alert Clicked!!!');
});


// Add and Remove Class on click
$(document).on('click', '#fixIt', function(e){
    e.preventDefault(); // to stop default action
    $('body').toggleClass('fixed_header');
});



// Responsive Menu Toggle
$(document).on('click', '.menuToggle', function(){
    $('.page_header .main_navigation').toggleClass('expanded');
});



// to Add you html in some div using ID
$(document).on('click', '#showText', function(){
    // $(".intro_text").html("<h2>We’ll Contact You Fast</h2><p>Expect a call within 1–2 hours during business hours, or first thing the next business day after hours or on weekends.</p>");
    $(".intro_text").text("<h2>We’ll Contact You Fast</h2><p>Expect a call within 1–2 hours during business hours, or first thing the next business day after hours or on weekends.</p>");
});

// to Remove everything from div using ID
$(document).on('click', '#removeText', function(){
    $(".intro_text").html("");
});

// to Remove element using ID
$(document).on('click', '#removeElement', function(){
    $(".intro_text").remove();
});


let mystring = '      Bano Qabillllll     '; // with space on start and end
console.log(mystring);


$(document).on('click', '#btn1', function(){
    mystring = mystring.trim(); // removed space from both ends
    console.log(mystring);

    // $(".fruits").attr('id', 'newFruits');
    // $(".fruits #mango").before('<li>pineapple</li>').css('color', 'red');
    // $(".fruits").after('<li>pineapple</li>').before('<li>pineapple</li>').css('color', 'red');
    // $(".fruits").find('#mango').css('color', 'red');
    // $("#mango").parent('.fruits').css('padding-left', '150px');
    // $(".fruits").children().css('color', 'red');
    // $("#mango").siblings().css('padding-top', '50px');
    // $(".fruits li").eq(3).css('color', 'red');

    $(".page_header").attr('id', '') // remove value from attribute
    $(".page_header").removeAttr('id'); // remove whole attribute

    if($(".page_header").hasClass('some_class')) {
        $(".page_header").hide();
    }

    // usage of .not()
    $('.fruits li').not('#mango').each(function(i){
        console.log('current index: ' + i);
        console.log($(this).text());
    });

    // usage of .each() loop in jQuery
    $('.fruits li').each(function(i){
        console.log('current index: ' + i);
        if($(this).is('#mango')){
            console.log($(this).text());
        }
    });

});


$(window).scroll(function(){
    var position = $(window).scrollTop();
    $("#scrollCount").text("Scroll Position: " + position);
});



$(document).on('submit', '#myForm', function(e){
    e.preventDefault(); // stop default submission
    const myform = $('#myForm');
    $('#message').text(''); // clear form message

    // Disable Form

    const name = $("#name").val().trim(); // grab data from name field
    const email = $("#email").val().trim(); // grab data from email field
    const password = $("#password").val(); // grab data from password field
    const age = $("#age").val().trim(); // grab data from age field

    $.ajax({
        url: 'ajaxresp.php', // url where form will be post
        method: 'post', // form submission method
        dataType: 'json', // data will be received as json
        data: { // form fields to be posted
            'name': name,
            'email': email,
            'password': password,
            'age': age,
        },
        success: function(result){ // when operation will be returned successfully
            console.log('Success', result); // print data received in console
            $('#message').text(result.message); // print message in page
            myform[0].reset();
        },
        error: function(err){ // when operation failed
            console.log('error', err); // print error in console
            $('#message').text(err.message); // print message in page
        },
        complete: function(resp){ // when operation finished
            console.log('resp', resp); // print response in console
            // enable Form
        }
    });
});







$(document).on('click', '.showPwd', function(){
    const pwdField = $('#password');
    if(pwdField.attr('type') === 'password') {
        // make it text
        pwdField.attr('type', 'text');
    }
    else {
        // make it password
        pwdField.attr('type', 'password');
    }
});


console.log('Hi');