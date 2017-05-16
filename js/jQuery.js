$(document).ready(
    function () {
        $("p").mouseenter(function () {
            var $this = $(this);

            $this.data('prehovercolor', $this.css('color'))
            $(this).css("color", "yellow")
        });

    });

$(document).ready(
    function () {
        $("p").mouseleave(function () {
            var $this = $(this);
            $(this).css("color", $this.data('prehovercolor'))
        });

    });

$(document).ready(
    function () {
        $("#li1 p").hide();
        $("span").click(function () {
            $(this).next().slideToggle(1000).siblings("p:visible").slideUp(1000);
        });

    });
