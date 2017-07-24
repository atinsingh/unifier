import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-menu-left',
  templateUrl: './menu-left-vertical.component.html',
})
export class MenuLeftComponent implements OnInit {
  ngOnInit() {

    $(function(){

    //   // scripts for "menu-left" module

    //   /////////////////////////////////////////////////////////////////////////////////////////
    //   // add backdrop

      // $('.cat__menu-left').after('<div class="cat__menu-left__backdrop cat__menu-left__action--backdrop-toggle"><!-- --></div>');

    //   /////////////////////////////////////////////////////////////////////////////////////////
    //   // submenu

      $('.cat__menu-left__submenu > a').on('click', function(){

        if ($('body').hasClass('cat__config--vertical') || $('body').width() < 768) {

          var parent = $(this).parent(),
            opened = $('.cat__menu-left__submenu--toggled');

          if (!parent.hasClass('cat__menu-left__submenu--toggled') && !parent.parent().closest('.cat__menu-left__submenu').length)
            opened.removeClass('cat__menu-left__submenu--toggled').find('> .cat__menu-left__list').slideUp(200);

          parent.toggleClass('cat__menu-left__submenu--toggled');
          parent.find('> .cat__menu-left__list').slideToggle(200);

        }

      });

      // remove submenu toggle class when viewport back to full view
      $(window).on('resize', function(){
        if ($('body').hasClass('cat__config--horizontal') || $('body').width() > 768) {
          $('.cat__menu-left__submenu--toggled').removeClass('cat__menu-left__submenu--toggled').find('> .cat__menu-left__list').attr('style', '');
        }
      });



    //   /////////////////////////////////////////////////////////////////////////////////////////
    //   // toggle menu

      $('.cat__menu-left__action--menu-toggle').on('click', function(){
        if ($('body').width() < 768) {
          $('body').toggleClass('cat__menu-left--visible--mobile');
        } else {
          $('body').toggleClass('cat__menu-left--visible');
        }
      })

      $('.cat__menu-left__action--backdrop-toggle').on('click', function(){
        $('body').removeClass('cat__menu-left--visible--mobile');
      })



    });

  }
}
