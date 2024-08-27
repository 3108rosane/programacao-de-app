import Dono from "./Dono";
import cachorro from "./cachorro";


var d1 = new Dono("Rosane", "47")
var c1 = new cachorro("nego", "sharpei","preto","medio",d1);



c1.exibirCachorro();
c1.exibirDono();



var c2 = new cachorro("bud", "lhasa","preto e branco", "pequeno",d1);

c2.exibirCachorro();
c2.exibirDono();
