$(document).ready(function () {

    $('#myselect').change(function () {

        const val = $(this).val();
        const texto = $('#myselect :selected').text();

        if (val == 1) {
            $('.slide-principal-bonecos').show()

            $('.slide-principal-carrinhos').hide()
            $('.slide-principal-bonecas').hide()
            $('.slide-principal-consoles').hide()
            $('.slide-principal-jogos').hide()
            $('.slide-principal-raquetes').hide()
            $('.slide-principal-uniformes').hide()
            $('.slide-principal-bolas').hide()
            $('.slide-principal-controles').hide()

            $('.slide-principal-bonecos').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            });
        } else if (val == 2) {
            $('.slide-principal-carrinhos').show()

            $('.slide-principal-bonecos').hide()
            $('.slide-principal-bonecas').hide()
            $('.slide-principal-consoles').hide()
            $('.slide-principal-jogos').hide()
            $('.slide-principal-raquetes').hide()
            $('.slide-principal-uniformes').hide()
            $('.slide-principal-bolas').hide()
            $('.slide-principal-controles').hide()

            $('.slide-principal-carrinhos').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            });
        } else if (val == 3) {
            $('.slide-principal-bonecas').show()

            $('.slide-principal-bonecos').hide()
            $('.slide-principal-carrinhos').hide()
            $('.slide-principal-consoles').hide()
            $('.slide-principal-jogos').hide()
            $('.slide-principal-raquetes').hide()
            $('.slide-principal-uniformes').hide()
            $('.slide-principal-bolas').hide()
            $('.slide-principal-controles').hide()

            $('.slide-principal-bonecas').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            });
        } else if (val == 4) {
            $('.slide-principal-consoles').show()

            $('.slide-principal-bonecas').hide()
            $('.slide-principal-bonecos').hide()
            $('.slide-principal-carrinhos').hide()
            $('.slide-principal-jogos').hide()
            $('.slide-principal-raquetes').hide()
            $('.slide-principal-uniformes').hide()
            $('.slide-principal-bolas').hide()
            $('.slide-principal-controles').hide()

            $('.slide-principal-consoles').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            });

        } else if (val == 5) {
            $('.slide-principal-jogos').show()

            $('.slide-principal-bonecas').hide()
            $('.slide-principal-bonecos').hide()
            $('.slide-principal-carrinhos').hide()
            $('.slide-principal-consoles').hide()
            $('.slide-principal-controles').hide()
            $('.slide-principal-raquetes').hide()
            $('.slide-principal-uniformes').hide()
            $('.slide-principal-bolas').hide()

            $('.slide-principal-jogos').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            });

        } else if (val == 6) {
            $('.slide-principal-controles').show()

            $('.slide-principal-bonecas').hide()
            $('.slide-principal-bonecos').hide()
            $('.slide-principal-carrinhos').hide()
            $('.slide-principal-consoles').hide()
            $('.slide-principal-jogos').hide()
            $('.slide-principal-raquetes').hide()
            $('.slide-principal-uniformes').hide()
            $('.slide-principal-bolas').hide()

            $('.slide-principal-controles').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            });

        } else if (val == 7) {
            $('.slide-principal-bolas').show()

            $('.slide-principal-controles').hide()
            $('.slide-principal-bonecas').hide()
            $('.slide-principal-bonecos').hide()
            $('.slide-principal-carrinhos').hide()
            $('.slide-principal-consoles').hide()
            $('.slide-principal-jogos').hide()
            $('.slide-principal-raquetes').hide()
            $('.slide-principal-uniformes').hide()

            $('.slide-principal-bolas').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            });

        } else if (val == 8) {
            $('.slide-principal-raquetes').show()

            $('.slide-principal-bolas').hide()
            $('.slide-principal-controles').hide()
            $('.slide-principal-bonecas').hide()
            $('.slide-principal-bonecos').hide()
            $('.slide-principal-carrinhos').hide()
            $('.slide-principal-consoles').hide()
            $('.slide-principal-jogos').hide()
            $('.slide-principal-uniformes').hide()

            $('.slide-principal-raquetes').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            });

        } else if (val == 9) {
            $('.slide-principal-uniformes').show()

            $('.slide-principal-raquetes').hide()
            $('.slide-principal-bolas').hide()
            $('.slide-principal-controles').hide()
            $('.slide-principal-bonecas').hide()
            $('.slide-principal-bonecos').hide()
            $('.slide-principal-carrinhos').hide()
            $('.slide-principal-consoles').hide()
            $('.slide-principal-jogos').hide()

            $('.slide-principal-uniformes').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            });








        } else (
            alert("sefudeo")
        )



    });



    /*$('.slide-principal').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });*/


})