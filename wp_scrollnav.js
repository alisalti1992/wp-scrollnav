jQuery(document).ready(function($) {
    var topMenu = $("#top-menu"),
        offset = 40,
        topMenuHeight = topMenu.outerHeight()+offset,
        // All list items
        menuItems =  topMenu.find('a[href*="#"]'),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var href = $(this).attr("href"),
                id = href.substring(href.indexOf('#')),
                item = $(id);
            console.log(item)
            if (item.length) { return item; }
        });

    console.log(menuItems);
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
        var href = $(this).attr("href"),
            id = href.substring(href.indexOf('#'));
        offsetTop = href === "#" ? 0 : $(id).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });

        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        menuItems.parent().removeClass("active");
        if(id){
            menuItems.parent().end().filter("[href*='#"+id+"']").parent().addClass("active");
        }

    })
})