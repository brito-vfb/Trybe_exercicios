let peca = "cafe";

switch(peca){
    case "peao":
        console.log(peca)
        console.log("Movimento - somente para frente e apenas uma casa, exceto no seu primeiro movimento, onde este pode se mover até a duas casas | Acao - come peças somente nas diagonais para frente");
        break;
    case "cavalo":
        console.log(peca)
        console.log("Movimento - Somente em [L] 3 casa no eixo maior 2 casa no eixo menor | Acao - come a peça que está na casa onde ele termina o movimento");
        break;
    case "bispo":
        console.log(peca)
        console.log("Movimento - somente pelas diagonais, em todos os sentidos sem limite de casas, desde que essas não estejam ocupadas por outras peças | Acao - come a peça que está na diagonal e para na casa onde estava a peça comida");
        break;
    case "torre":
        console.log(peca)
        console.log("Movimento - somente nos eixos vertical e horizontal, em todos os sentidos sem limite de casas, desde que essas não estejam ocupadas por outras peças | Acao - come peças e para na casa onde a peça comida estava");
        break;
    case "rainha":
        console.log(peca)
        console.log("Movimento - em todas as direções e em todos os sentidos sem limite de casas, desde que essas não estejam ocupadas por outras peças | Acao - come peças e para na casa que a peça comida estava");
        break;
    case "rei":
        console.log(peca)
        console.log("Movimento - somente um casa em todas as direções e em todos os sentidos sem limite de casas, desde que essas não estejam ocupadas por outras peças| Acao - come peças e para na casa que a peça comida estava, quando uma peça adversária ameça comer o rei com o proximo movimento o rei fica em check, outra ação é que se o rei não se moveu, nem a torre e as casa entre ele e a torre estao livre e possivel realizar o movimento de roque");
        break;
    default:
        console.log(peca)
        console.log("Não conresponde a uma peça de xadrez");
        break;
}