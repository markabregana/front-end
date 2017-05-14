$(function($){
    $('.field-input-wrap').click(function(){
        $('.field-input-wrap').removeClass('active');
        $(this).addClass('active');
    })

    // toggle sub-category
    $('.field-container .field-input-wrap').click(function(){
        toggleElement('#category-dropdown');
    })

    // toggle modal sub-category
    $('#category-dropdown li a').click(function(){
        var getCategory = $(this).text();
        $('.category-title strong').text(getCategory);

        toggleElement('#category-dropdown');
        toggleElement('#modal');
        toggleElement('#sub-category');
        modalLeft();
        return false;
    })

    //show other category
    $('.form-row.form-submit a').click(function(){
        toggleElement('#other-category');
        toggleElement('#modal');
        modalLeft();

        return false;
    })

    //read review button
    $('.read-review a').click(function(){
        toggleElement('#view-review');
        toggleElement('#modal');
        modalLeft();

        //assign values to the modal
        var getId = $(this).attr('href');
        var personImg = $(getId+' .review-person figure img').attr('src');
        var personName = $(getId+' .person-name').text();
        var personAddress = $(getId+' .person-address').text();
        var personField = $(getId+' .review-field').text();

        $('.vr-person-image img').attr('src', personImg);
        $('.vr-person-info h2').text(personName);
        $('.vr-person-info h3').text(personAddress);
        $('.vr-person-info h4').text(personField);

        return false;
    })








    //modal close
    $('.modal-close, .closeLink a').click(function(){
        toggleElement('#modal');
        closeAll();
        return false;
    })

    function toggleElement(selector){
        var element = $(selector);
        var elementClass = element.attr('class');

        if(elementClass == "hide"){
            element.attr('class', 'show')
        }else{
            element.attr('class', 'hide');
        }
    }
    function closeAll(){
        $('#modal .show').attr('class', 'hide');
    }
})

function modalLeft(){
    var modalWidth = $('.modal-wrapper').width();
    $('.modal-wrapper').css('margin-left', -Math.abs(modalWidth/2)+'px');
}

$(window).resize(function(){
    modalLeft();
})
