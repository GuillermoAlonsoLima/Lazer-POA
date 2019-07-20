var menus = ["home","restaurantes","parques","bares","ofertas","transporte","eventos","contato"];
//menus.forEach(init);

/* Desaparece com todas as paginas(divs)
 * Faz um loop do array de menus, que possui os nomes dos menus e páginas
 * Encontra o div com o id correspondente
 * Coloca um 'none' na opção display para desaparecer com o mesmo
*/
function desaparecerMenus(item,index){
    //alert("item:"+item);
    document.getElementById(item).style.display = "none";
}

/* Seleciona o menu clicado
 * Desaparece com todos os menus
 * Encontra o div com o id igual ao botão clicado, mas sem o 'Btn'
 * Coloca um 'block' na opção display para mostra-lo
*/
function selecionarMenu(buttonId){
    //alert("buttonId:"+buttonId);
    menus.forEach(desaparecerMenus);
    //alert("buttonId2:"+buttonId);
    document.getElementById(buttonId).style.display = "block";
    //alert("buttonId3:"+buttonId);
}

// function init(item,index){
//     alert("item:"+item);
//     document.getElementById(item+"Btn").addEventListener("click", selecionarMenu(item),true);
// }