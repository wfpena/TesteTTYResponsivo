function openCity(evt, element) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(element).style.display = "block";
    evt.currentTarget.className += " active";
}

$('.navbar-toggle').click(function() {
    $('.divider').toggle();
/*    alert('aa');*/
});



$(document).ready(function(){
    var number = 0;

    document.getElementById('Comunicados').style.display = "block";
/*    document.getElementById('tabinks').style.color = "white";*/
    $('.navbar-toggle').click(function() {
        $('.divider').toggle(500);
    });

    $('li>.post-info').css("font-style","none");

    if ((768< $(this).width()) ) {
            $('.navbar-header').addClass('navbar-right');
    }

    if ($(window).width() < 992) {
        console.log('aa');
        $('button[name=btn-search2]').css('visibility', "visible");
        $('button[name=btn-search]').css('visibility', "hidden");
    } else { 
        $('button[name=btn-search2]').css('visibility', "hidden");
        $('button[name=btn-search]').css('visibility', "visible");
    }

    $(window).resize(function() {

        if ($(this).width() < 992) {
            
            $('button[name=btn-search2]').css('visibility', "visible");
            $('button[name=btn-search]').css('visibility', "hidden");
        } else { 
             $('button[name=btn-search2]').css('visibility', "hidden");
             $('button[name=btn-search]').css('visibility', "visible");
        }


        if ((768< $(this).width()) ) {
            $('.navbar-header').addClass('navbar-right');
        }

    });


    $(".dropdown-form,.dropdown-content").hover(function () {
       $('.dropdown-content').css('visibility',"visible");
   }, function () {
       $('.dropdown-content').css('visibility',"hidden");
   }
   );


    $('.right-nav ul li:nth-child(2)').on({
    'click': function(){
        number++;
        if(number == 3){
            number = 0;
        }
        console.log(number);
        if(number==0){
            $('.img-warning').css('opacity','0');
        }
        else if(number==1){
            $('.img-warning').css('opacity','1');
            $('.img-warning').attr('src','img/number1.png');
        }
        else{
            $('.img-warning').css('opacity','1');
            $('.img-warning').attr('src','img/number2.png');
        }
      /*  $('.img-warning').css('opacity','0');*/
        /*$('.img-warning').css('display','none');*/
       /* $('.img-warning').css("visibility","hidden");*/
        /*$('.img-warning').attr('src','img/search.png');*/
    }
    });



/*    $(".dropdown").hover*/
});