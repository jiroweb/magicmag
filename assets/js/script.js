//  ================ -menu-click-start- ================
$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $('.header-menu ').addClass('transition-menu');
        $('body').addClass('body_fix');
        if ($(window).width() < 750) {
            $('.header-catalog-menu-components').css({ width: '100%', transition: '0.4s', });

            $('.header-menu ').css({ width: '100%', transition: '0.4s', marginRight: '0' });

        } else {
            $('.header-menu ').css({ width: '360px', transition: '0.4s', marginRight: '15px' });
            $('.header-catalog-menu-components').css({ width: '360px', transition: '0.4s', });


        }

    });
    $('.close-menu').on('click', function () {
        $('.header-menu ').css({ width: '0%', marginRight: '0' });
        $('.header-catalog-menu-components ').css({ width: '0%', marginRight: '0' });
        $('body').removeClass('body_fix');
        time = 0;

    })
    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.header-menu ').css({ width: '0%', marginRight: '0' });
        $('.header-catalog-menu-components').css({ width: '0%', marginRight: '0' });
        $('body').removeClass('body_fix');
        time = 0;

    })
})





//   Has catalog  for add  menu icon in right

$(document).ready(function () {
    $('.header-desktop-menu-catalog ul li, .header-menu-catalog-box>ul>li').each(function () {
        let catalog_link = $(this).find('a');
        if ($(catalog_link).attr('has-catalog') === 'true') {
            $(catalog_link).addClass('catalog-icon')
        }
    })
})



//  Clock on Catalogs and show catalog menu

$(document).ready(function () {
    $('.header-catalog-menu-components').on('click', function (e) {
        e.stopPropagation();
    })
    $('.click-catalog-menu').on('click', function (e) {
        $('.header-menu-catalog-box>ul').children().each(function () {
            $(this).removeClass('active-catalog');
        })

        $('.header-sub-menu-block').children().each(function () {
            $(this).removeClass('open-catalog');
        })
        $('.header-catalog-menu-components').css({ height: '220%' })
        changeActiveClass(this, 'header-desktop-menu-catalog ul', 'active-catalog')
        opemCatalogMenu(this, 'header-catalog-menu-components')
        e.stopPropagation();
    })

    $('.click-catalog-sub-menu').on('click', function (e) {
        changeActiveClass(this, 'header-menu-catalog-box>ul', 'active-catalog')
        opemCatalogMenu(this, 'header-sub-menu-block')
        e.stopPropagation();
        $('.header-catalog-menu-components').css({ height: '100%' })

    })

    if ($(window).width() < 1200) {
        $('.click-catalog-menu').on('click', function (e) {
            $('.header-menu ').css({
                width: '0%', marginRight: '0'
            });

            $('.header-menu-catalog-box>ul').children().each(function () {
                $(this).removeClass('active-catalog');
            })

            $('.header-sub-menu-block').children().each(function () {
                $(this).removeClass('open-catalog');
            })

            changeActiveClass(this, 'header-desktop-menu-catalog ul', 'active-catalog')
            opemCatalogMenu(this, 'header-catalog-menu-components')
            e.stopPropagation();
        })

        $('.click-catalog-sub-menu').on('click', function (e) {
            changeActiveClass(this, 'header-menu-catalog-box>ul', 'active-catalog')
            opemCatalogMenu(this, 'header-sub-menu-block')
            e.stopPropagation();

            $('.header-catalog-menu-components').children().each(function () {
                $(this).removeClass('open-catalog');
            })
        })
    }
    else {
        $('.click-catalog-menu').on('click', function (e) {
            $('.header-menu-catalog-box>ul').children().each(function () {
                $(this).removeClass('active-catalog');
            })

            $('.header-sub-menu-block').children().each(function () {
                $(this).removeClass('open-catalog');
            })

            changeActiveClass(this, 'header-desktop-menu-catalog ul', 'active-catalog')
            opemCatalogMenu(this, 'header-catalog-menu-components')
            e.stopPropagation();
        })

        $('.click-catalog-sub-menu').on('click', function (e) {
            changeActiveClass(this, 'header-menu-catalog-box>ul', 'active-catalog')
            opemCatalogMenu(this, 'header-sub-menu-block')
            e.stopPropagation();
        })

    }
    function opemCatalogMenu($this, catalog_list_block) {
        let cuurent_link_attr = $($this).find('a').attr('data-catalog')
        let catalogs = $('.' + catalog_list_block).children();
        $(catalogs).each(function () {
            if ($(this).hasClass('open-catalog')) {
                $(this).removeClass('open-catalog')
            }
            if (cuurent_link_attr === $(this).attr('data-catalog')) {
                $(this).addClass('open-catalog')
            }
        })
    }


    function changeActiveClass($this, catalog_menu, active_class) {
        let menu_links = $('.' + catalog_menu).children();
        $(menu_links).each(function () {
            if ($(this).hasClass(active_class)) {
                $(this).removeClass(active_class)
            }
        })
        $($this).addClass(active_class)
    }

})


$(document).on('click', function () {

    $('.header-catalog-menu-components').children().each(function () {
        $(this).removeClass('open-catalog');
    })
    $('.header-desktop-menu-catalog ul').children().each(function () {
        $(this).removeClass('active-catalog');
    })
    $('.header-menu-catalog-box>ul').children().each(function () {
        $(this).removeClass('active-catalog');
    })

    $('.header-sub-menu-block').children().each(function () {
        $(this).removeClass('open-catalog');
    })

})
//  go to  back 

$(document).ready(function () {
    $('.back-to-catalog-js ').on('click', function () {

        let parent = $(this).parent().parent()[0]
        if ($(parent).hasClass('header-menu-catalog-box')) {
            $(this).parents('.header-menu-catalog-box').removeClass('open-catalog')

            if ($(window).width() < 750) {
                $('.header-menu ').css({ width: '100%', transition: '0.4s', marginRight: '0' });

            } else {
                $('.header-menu ').css({ width: '360px', transition: '0.4s', marginRight: '15px' });

            }
        } else {
            $(this).parents('.header-sub-menu').removeClass('open-catalog')
            $(this).parents('.header-sub-menu-block').prev().addClass('open-catalog')
            $('.header-catalog-menu-components').css({ height: '220%' })



        }

    })


})








$(document).ready(function () {
    addActiveClass('home-price-menu-catalog', 'active-price-catalog');
    changeCaseBlockDispNone(this, 'home-price-menu-catalog', 'home-price-catalog-box', 'active-price-catalog', 'click-change-catalog');

    $('.click-change-catalog').on('click', function () {
        changeActiveClassWithClick(this, 'home-price-menu-catalog', 'active-price-catalog')
        changeCaseBlockDispNone(this, 'home-price-menu-catalog', 'home-price-catalog-box', 'active-price-catalog', 'click-change-catalog');
    })

    //    add Active Class for case menu
    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();
        var first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    //  change  active class with click menu case
    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    //   change case block with click  case menu


    function changeCaseBlockDispNone($this, case_menu, case_block, active_class, menu_link) {
        var case_menu_block = $('.' + case_menu);
        var case_block_sub = $('.' + case_block);
        var case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).hide()
        })

        if ($($this).hasClass(menu_link)) {

            var this_attr = $($this).attr('data-catalog-price');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog-price') == this_attr) {
                    $(this).show();
                }
            })
        } else {
            var active_find = $(case_menu_block).find('.' + active_class);
            var active_find_attr = $(active_find).attr('data-catalog-price');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog-price') == active_find_attr) {
                    $(this).show();

                }
            })
        }
    }

})




$(document).ready(function () {
    getValSelect(this, 'selector', 'home-price-block');
    $('.selector').on('change', function () {
        getValSelect(this, 'selector', 'home-price-block');
    })

    function getValSelect($this, parent_selector, selector_block) {
        if ($($this).hasClass(parent_selector)) {
            var select_prt = $($this).find(':selected').attr('data-select');
            var select_block = $('.' + selector_block).children();
            $(select_block).each(function () {
                $(this).hide();
                if (select_prt == $(this).attr('data-select')) {
                    $(this).show();
                }
            })
        } else {
            var prt_select = $('.' + parent_selector);
            var selector_from_select = $(prt_select).find(':selected').attr('data-select');
            var reload_child = $('.' + selector_block).children();
            $(reload_child).each(function () {
                $(this).hide();
                if (selector_from_select == $(this).attr('data-select')) {
                    $(this).show();

                }
            })
        }
    }
})




$('.our-slider-js, .materials-slider-block').slick({
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1310,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });







  const slider = $(".slider-item");
  slider
    .slick({
      dots: true,
      arrows:false,
      infinite: false,

       responsive: [
            {
             breakpoint: 750,
             settings: "unslick"
          }
        ]
    });

  slider.on('wheel', (function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');

    }
  }));




$(document).ready(function () {
    $('select').styler();

})
$(function () {
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({ default_offset_pct: 0.5 });
});


//loading
    $(window).on("load", function() {
        $('#loading_before').delay(5000).fadeOut('slow');
});


$('.custom-fur-slider-js').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,

  });



  $('.reviews-list-menu').on('click', function(){
    // $(this).toggleClass('open-menu-questions') 
    $(this).next().slideToggle()

  })
  $('.reviews-sun-menu').on('click', function(){
    $(this).toggleClass('open-menu-questions') 
    $(this).next().slideToggle()

  })
  





  //  modal
$('.open_modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    modal.removeClass('out')
    $('body').css({overflow: 'hidden '})
    modal.fadeIn()

})

$('.modal-close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100)
    $('body').css({overflow: 'visible '})


})

$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content')

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({overflow: 'visible '})
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()

            }, 100)
            $('body').css({overflow: 'visible '})

        }
    })
})
	