
let translateX = 0;


$(document).ready(function() {
    let isDragging = false;
    let startPosition = 0;
    let endPosition = 0;
    // let translateX = 0;
    let currentTranslateX = 0;
    const cardWidth = $('.card').outerWidth(true);

    $('.carousel-inner').on('mousedown touchstart', function(e) {
      isDragging = true;
      startPosition = e.pageX || e.originalEvent.touches[0].pageX;
      currentTranslateX = translateX;
      $(this).css('cursor', 'grabbing');
    });

    $('.carousel-inner').on('mousemove touchmove', function(e) {
      if (!isDragging) return;
      endPosition = e.pageX || e.originalEvent.touches[0].pageX;
      const distance = endPosition - startPosition;
      translateX = Math.min(0, Math.max(-cardWidth * ($('.card').length - 1), currentTranslateX + distance));
      
      // Nascondi la card quando raggiunge l'elemento a sinistra del carosello
    //   if (translateX >= -600) {
    //     $('.card').removeClass('hidden');
    //   } else {
    //     $('.card').addClass('hidden');
    //   }
    // Nascondi solo la card che tocca il limite sinistro del carosello
    $('.card').each(function(index, card) {
        const cardLeftPosition = index * cardWidth + translateX;
        if (cardLeftPosition <= -600) {
          $(card).addClass('hidden');
        } else {
          $(card).removeClass('hidden');
        }
      });
      
      $(this).css('transform', `translateX(${translateX}px)`);
    });

    $('.carousel-inner').on('mouseup touchend', function(e) {
      isDragging = false;
      $(this).css('cursor', 'grab');
    });
  });




// $(document).ready(function() {
//     let translateX = 0;
//     const cardWidth = $('.card').outerWidth(true);
//     const carouselWidth = $('.carousel').width();
//     const maxTranslateX = 0; // Imposta il limite desiderato in pixel

//     $('.carousel-inner').on('wheel', function(e) {
//       e.preventDefault();
//       const delta = e.originalEvent.deltaY;
//       translateX = Math.min(maxTranslateX, Math.max(carouselWidth - cardWidth * $('.card').length, translateX + delta));
      
//       // Nascondi solo la card che tocca il limite sinistro del carosello
//       $('.card').each(function(index, card) {
//         const cardLeftPosition = index * cardWidth + translateX;
//         if (cardLeftPosition <= -600) {
//           $(card).addClass('hidden');
//         } else {
//           $(card).removeClass('hidden');
//         }
//       });

//       $(this).css('transform', `translateX(${translateX}px)`);
//     });
//   });




  $(document).ready(function() {
    
    const cardWidth = $('.card').outerWidth(true);
    const carouselWidth = $('.carousel').width();

    $('.carousel').on('wheel', function(e) {
      e.preventDefault();
      const delta = e.originalEvent.deltaX || e.originalEvent.deltaY; // Usa deltaX per lo scorrimento orizzontale del trackpad
      translateX = Math.min(0, Math.max(carouselWidth - cardWidth * $('.card').length, translateX - delta));
      
      // Nascondi solo la card che tocca il limite sinistro del carosello
      $('.card').each(function(index, card) {
        const cardLeftPosition = index * cardWidth + translateX;
        if (cardLeftPosition <= -600) {
          $(card).addClass('hidden');
        } else {
          $(card).removeClass('hidden');
        }
      });

      $('.carousel-inner').css('transform', `translateX(${translateX}px)`);
    });
  });

