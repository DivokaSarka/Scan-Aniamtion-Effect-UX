var code = '11010010000100111011001011101111011010001110101110011001101110010010111101110111001011001001001';

table = $('tr');
for (var i = 0; i < code.length; i++) {
  if (code[i]==1) {
    table.append('<td bgcolor="black">')
    
 
  } else {
    table.append('<td bgcolor="white">')
  }
}

$('.barcode').addClass('drop');

$('button').click(function(e){
  e.stopPropagation()
  $(this).toggleClass('disabled').attr('disabled', 'disabled')
  $(this).click(false)
  $('.mark').toggleClass('center-marker')
  $('.barcode').toggleClass('scan z-depth-1')
  
  
  
  if($('.yellow').length > 0 || $('.green').length > 0){
    $('.barcode')
    .removeClass('green')
    .removeClass('yellow')
    .removeClass('grow')
  }else{
  
    setTimeout(function(){
    $('.barcode').toggleClass('grow yellow')
      setTimeout(function(){
        $('.barcode').toggleClass('yellow')
        $('.barcode').toggleClass('green');
        $('.barcode').toggleClass('grow z-depth-1')
              $('.mark').toggleClass('center-marker ')
        
          setTimeout(function(){
            $('.barcode').toggleClass('sink');
            $('.confirmation').toggleClass('hide-confirm');
              setTimeout(function(){
              $('.barcode').toggleClass('green scan sink');
              $('.confirmation').toggleClass('hide-confirm');
              $('button').toggleClass('disabled').attr('disabled', false);
                  
            
              },1800)
              
                         
          },600)
      }, 600)
    
  }, 1000)
  }
})
