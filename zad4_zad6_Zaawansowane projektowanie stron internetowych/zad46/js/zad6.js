const $kotek = $("#kotek");
const $piesek = $("#piesek");
const $tabela = $("#tabela");

function pokazKotela() {
    $kotek.show();
    $piesek.hide();
    $tabela.hide();
}

function pokazPiesela() {
    $kotek.hide();
    $piesek.show();
    $tabela.hide();
}

function pokazTabele() {
    $kotek.hide();
    $piesek.hide();
    $tabela.show();
}
