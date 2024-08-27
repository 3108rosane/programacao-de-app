import Dono from "./Dono";
import cachorro from "./cachorro";

var c1 = new cachorro("nego", "sharpei");
c1.nome = "nego"
c1.raca = "sharpei"
c1.cor = "preto"

var d1 = new Dono();
d1.nome = "Rosane";
d1.telefone = "(47) 001082000";

c1.dono = d1;
c1.exibirCachorro();
c1.exibirDono();



var c2 = new cachorro("bud", "lhasa");
c2.cor = "preto e branco";
c2.tamanho = "pequeno";
c2.exibirCachorro();
