import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
// declare var autosize: any;
declare var Ladda: any;
declare var Chartist: any;

@Component({
  selector: 'cat-page',
  templateUrl: './dashboard.page.html'
})

export class Dashboard implements OnInit {
  ngOnInit() {

    $( function() {


      ///////////////////////////////////////////////////////////
      // tooltips
      $("[data-toggle=tooltip]").tooltip();

      ///////////////////////////////////////////////////////////
      // jquery ui sortable
      $('#left-col, #right-col, #bottom-col').each(function(){
        $(this).sortable({
          // connect left and right containers
          connectWith: '.cat__core__sortable',
          tolerance: 'pointer',
          scroll: true,

          // set initial order from localStorage
          create: function () {

            var that = $(this),
              id = $(this).attr('id'),
              orderLs = localStorage.getItem('order-' + id);

            if (orderLs) {
              var order = orderLs.split(',');

              $.each(order, function(key, val){
                var el = $('[order-id=' + val + ']');
                that.append(el);
              });
            }

          },

          // save order state on order update to localStorage
          update: function () {
            var orderArray = $(this).sortable('toArray', {attribute: 'order-id'}),
              prefix = $(this).attr('id');

            localStorage.setItem('order-' + prefix, orderArray);
          },

          // handler
          handle: ".card-header"
        });
      });

      ///////////////////////////////////////////////////////////
      // reset dashboard
      $('.reset-button').on('click', function(){
        localStorage.removeItem('order-left-col');
        localStorage.removeItem('order-right-col');
        localStorage.removeItem('order-bottom-col');
        setTimeout(function () {
          location.reload();
        }, 500)
      });

      ///////////////////////////////////////////////////////////
      // card controls
      $('.cat__core__sortable__collapse, .cat__core__sortable__uncollapse').on('click', function(){
        $(this).closest('.card').toggleClass('cat__core__sortable__collapsed');
      });
      $('.cat__core__sortable__close').on('click', function(){
        $(this).closest('.card').remove();
        $('.tooltip').remove();
      });

      // header double click
      $('.cat__core__sortable .card-header').on('dblclick', function() {
        $(this).closest('.card').toggleClass('cat__core__sortable__collapsed');
      });

      ///////////////////////////////////////////////////////////
      // datatables
      $('#example1').DataTable({
        responsive: true
      });

      
      ///////////////////////////////////////////////////////////
      // ladda buttons
      Ladda.bind( '.ladda-button', { timeout: 2000 } );

      

      ///////////////////////////////////////////////////////////
      // custom scroll
      if (!(/Mobi/.test(navigator.userAgent)) && jQuery().jScrollPane) {
        $('.custom-scroll').each(function() {
          $(this).jScrollPane({
            contentWidth: '100%',
            autoReinitialise: true,
            autoReinitialiseDelay: 100
          });
          var api = $(this).data('jsp'),
            throttleTimeout;
          $(window).bind('resize', function() {
            if (!throttleTimeout) {
              throttleTimeout = setTimeout(function() {
                api.reinitialise();
                throttleTimeout = null;
              }, 50);
            }
          });
        });
      }

      ///////////////////////////////////////////////////////////
      // adjustable textarea
      // autosize($('.adjustable-textarea'));

      
    } );

  }
}

