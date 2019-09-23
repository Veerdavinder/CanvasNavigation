;(function($){
    //Define jQuery
    $(function(){
        //DOM Ready
        //Toggle navigation
        $('#nav-toggle').click(function(){
            this.classList.toggle("active");
            if($('body').hasClass('show-nav')){
                //Hide sidebar
                $('body').removeClass('show-nav');
            }
            else{// If sidebar is hidden
               $('body').addClass('show-nav');//Display sidebar 
            }
        })
        
    })
})(jQuery)