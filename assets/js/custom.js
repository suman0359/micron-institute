$(document).ready(function () {

    // //JavaScript live width and height display in my dimension id
    // window.onresize = displayWindowSize;
    //     window.onload = displayWindowSize;

    //     function displayWindowSize() {
    //         myWidth = window.innerWidth;
    //         myHeight = window.innerHeight;
    //         // your size calculation code here
    //         document.getElementById("dimensions").innerHTML = myWidth + "x" + myHeight;
    //     };

    // //JavaScript live width and height display in my dimension id
    // $(window).resize(function() {
    // $("#dimensions").html($(window).width());
    // }).resize();

    // ================================================= //

    $("#owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

    /* ==============================================
     ACCORDION -->
     =============================================== */

    function toggleChevron(e) {
        $(e.target)
                .prev('.panel-heading')
                .find("i.indicator")
                .toggleClass('fa-minus fa-plus');
    }
    $('#accordion').bind('hidden.bs.collapse', toggleChevron);
    $('#accordion').bind('shown.bs.collapse', toggleChevron);


// DropDown hover menu

    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

// -------------------------------



    //  go to top
    var offset = 1000,
            //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
            offset_opacity = 1200,
            //duration of the top scrolling animation (in ms)
            scroll_top_duration = 500,
            //grab the "back to top" link
            $back_to_top = $('.go-top');

    //hide or show the "back to top" link
    $(window).on('scroll', function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('go-top-visible') : $back_to_top.removeClass('go-top-visible go-top-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('go-top-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration
                );
    });


});


$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)


// Google map Integration 

function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(23.744173, 90.413775),
        zoom: 8,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);


