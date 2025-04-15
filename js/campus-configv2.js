$(document).ready(function () {
    // URL do arquivo JSON no mesmo diretório
    const jsonUrl = "campus_ifsp.json";

    // Carregar os dados do campus a partir do arquivo JSON
    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar os dados JSON");
            }
            return response.json();
        })
        .then(campusData => {
            // Ação ao alterar a seleção no combobox
            $('#campusSelect').on('change', function () {
                var selectedOption = $(this).val(); // Valor selecionado no combobox

                if (campusData[selectedOption]) {
                    var campus = campusData[selectedOption];

                    // Atualizando os inputs com as informações do campus selecionado
                    $('#site').val(campus.site);
                    $('#logo').val(campus.logo);
                    $('#youtube').val(campus.youtube);
                    $('#twitter').val(campus.twitter);
                    $('#facebook').val(campus.facebook);
                    $('#instagram').val(campus.instagram);

                    // Exemplo para atualizar o logo na visualização
                    $('#logoView').attr('src', campus.logo);
                    $("#logoView").prop("src", campus.logo).css("margin-left", "2px");

                    // Atualizando o link do site
                    $("#viewSite").prop("href", campus.site);

                    // Atualizando o innerHTML do #viewSiteText
                    $("#viewSiteText").prop("innerHTML", campus.site);

                    // Atualizando o innerHTML e href do #viewSiteLink
                    $("#viewSiteLink").prop("href", campus.site)
                        .html(`<b style="font-size:10pt; font-family:Arial,sans-serif; color:#259235;">${campus.site}</b>`);
                }
            });
        })
        .catch(error => {
            console.error("Erro ao carregar o JSON:", error);
        });
});