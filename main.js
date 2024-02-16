$(document).ready(function () {
    $('#Botao-adicionar').click(adicionarTarefa);
    $('#input').keypress(function(event){
        if(event.which === 13){
            adicionarTarefa();
        }
    });

    function adicionarTarefa(){
        var tarefa = $('#input').val().trim();
        if(tarefa !== "") {
            var tarefasExistentes = [];
            $('ul li').each(function() {
                tarefasExistentes.push($(this).text().trim());
            });

            if (tarefasExistentes.includes(tarefa)) {
                alert("Esta tarefa já está na lista!");
            } else {
                $('ul').append('<li>' + tarefa + '</li>');
                $('#input').val("");
            }
        } else {
            alert("Por favor, insira uma tarefa válida.");
        }
    }

    $('#Botao-remover').click(function(){
        $('ul').empty();
    });
});