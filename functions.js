$(document).ready(function () {
    nav_button = "menu";
    slides_to_show = 0;

    function responsive() {
        if (window.innerWidth <= 570) {
            slides_to_show = 1;
        } else if (window.innerWidth <= 1000) {
            slides_to_show = 2;
        } else {
            slides_to_show = 3;
        }

        mapa_width = $("#endereco").width();
        mapa_height = (mapa_width * 45) / 50;

        $("#mapa-iframe").width(mapa_width);
        $("#mapa-iframe").height(mapa_height);

        $("#redes-sociais").css({ "margin-top": ((mapa_height + 50) + "px") });
    }
    
    responsive();
    
    $(window).resize(function () {
        responsive();
        $(".trabalhos").slick('resize');
    });

    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
        spOptions = {
            onKeyPress: function (val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };
    $('#id_telefone').mask(SPMaskBehavior, spOptions);

    $('.close-menu').click(function () {
        switch (nav_button) {
            case "menu":
                nav_button = "close";
                break;

            case "close":
                nav_button = "menu";
                break;
        }

        $('#nav-menu-icon').html(nav_button);
    });

    $(".link-secaoinicial").click(function () {
        $('html, body').animate({
            scrollTop: $("#secaoinicial").offset().top
        }, 500);
    });

    $(".link-quemsomos").click(function () {
        $('html, body').animate({
            scrollTop: $("#quemsomos").offset().top - 45
        }, 500);
    });

    $(".link-servicos").click(function () {
        $('html, body').animate({
            scrollTop: $("#servicos").offset().top - 45
        }, 500);
    });

    $(".link-portfolio").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top - 45
        }, 500);
    });

    $(".link-clientes").click(function () {
        $('html, body').animate({
            scrollTop: $("#clientes").offset().top - 45
        }, 500);
    });

    $(".link-contato").click(function () {
        $('html, body').animate({
            scrollTop: $("#contato").offset().top - 45
        }, 500);
    });

    $("#contatenos").click(function () {
        $('html, body').animate({
            scrollTop: $("#servicos").offset().top - 45
        }, 500);
    });

    $('.trabalhos').slick({
        slidesToShow: slides_to_show,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        prevArrow: $('#port-prev'),
        nextArrow: $('#port-next'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 620,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    $('.servicos').slick({
        slidesToShow: slides_to_show,
        slidesToScroll: 3,
        autoplaySpeed: 8000,
        pauseOnhover: true,
        autoplay: true,
        arrows: true,
        prevArrow: $('#serv-prev'),
        nextArrow: $('#serv-next'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 620,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });


    $('.clientes').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        prevArrow: $('#cli-prev'),
        nextArrow: $('#cli-next'),
        responsive: [
            {
              breakpoint: 1030,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 620,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    aparecer();
       function aparecer(){
         $('#texto').hide();
         $('#See-more').click(function(){
            $('#texto').slideToggle();
          });
       }
      
});
