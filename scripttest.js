function copyFunction() {
    const copyText = document.getElementById("pre").textContent;
    if (!navigator.clipboard) {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement('textarea');
        textArea.textContent = copyText;
        document.body.append(textArea);
        textArea.select();
        // document.execCommand("copy");
        navigator.clipboard.writeText(text.value);
        textArea.remove();
    } else {
        navigator.clipboard.writeText(copyText).then(
            function () {
                var tooltip = document.getElementById("myTooltip");
                tooltip.innerHTML = "Copied"
                // myTooltip.innerText = "Copied";
                // myTooltip.innerText = "Copied";
                // myTooltip.style.background = "red";
                // myTooltip.style.padding = "4px 6px";
            })
            .catch(
                function () {
                    console.error('Failed to copy text');
                });
    }

}

document.getElementById("myTooltip").addEventListener("click", copyFunction);




$(".arrow-left").hide();
(function ($) {


    $(".cata-sub-nav").on('scroll', function () {
        $val = $(this).scrollLeft();
           
        if ($(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth) {
            
            $(".arrow-left").hide();
        } else {
            $(".arrow-right").show();
        }

        if ($val == 0) {
            $(".arrow-left").hide();
        } else {
            $(".arrow-left").show();
        }
    });
    console.log('init-scroll: ' + $(".arrow-right").scrollLeft());
    $(".arrow-right").on("click", function () {
        $(".cata-sub-nav").animate({ scrollLeft: '+=110' }, 200);

    });
    $(".arrow-left").on("click", function () {
        $(".cata-sub-nav").animate({ scrollLeft: '-=110' }, 200);
    });



})(jQuery);




const scroll = document.querySelector(".cata-sub-nav");
var isDown = false;
var scrollX;
var scrollLeft;

// Mouse Up Function
scroll.addEventListener("mouseup", () => {
    isDown = false;
    scroll.classList.remove("active1");
});

// Mouse Leave Function
scroll.addEventListener("mouseleave", () => {
    isDown = false;
    scroll.classList.remove("active1");
});

// Mouse Down Function
scroll.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDown = true;
    scroll.classList.add("active1");
    scrollX = e.pageX - scroll.offsetLeft;
    scrollLeft = scroll.scrollLeft;
});

// Mouse Move Function
scroll.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    var element = e.pageX - scroll.offsetLeft;
    var scrolling = (element - scrollX) * 2;
    scroll.scrollLeft = scrollLeft - scrolling;
});


function openNav() {
    // document.getElementById("sideNav").style.display = "block";
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
}



