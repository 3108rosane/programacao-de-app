import Usuario from "../../entity/Usuario";
import "./login.css"

document.getElementById("cadastrar").addEventListener("click",async (event: MouseEvent) => {
    event.preventDefault();

    var nome = document.getElementById("name") as HTMLInputElement;
    var dataNascimento = document.getElementById("data_nascimento") as HTMLInputElement;
    var email = document.getElementById("email") as HTMLInputElement;
    var password = document.getElementById("password") as HTMLInputElement;
    var passwordConfirmation = document.getElementById("password_confirmation") as HTMLInputElement;

    if(password.value !== passwordConfirmation.value){
        return;
    }

    const usuarioExiste = await (window as any ).bancoAPI.findByEmail(email.value);
    if(usuarioExiste?.id){
      console.log("já existe")
      return;
    }

    var Usuario = {
      nome: nome.value,
      email: email.value,
      password: password.value,
      dataNascimento: new Date(dataNascimento.value)
    };
    
    
    await (window as any).bancoAPI.createUsuario(Usuario);
      // CRIAR REPOSITORIO
    // VERIFICAR SE O USUÁRIO COM E-MAIL JÁ EXISTE[]
    // ARMEZENAR USUÁRIO NO BANCO
    document.getElementById("acessar").addEventListener("click" , async(event: MouseEvent) => {
      event.preventDefault();

      const email = document.getElementById("email_login") as HTMLInputElement;
      const password = document.getElementById("password_login") as HTMLInputElement;
      const usuario = await (window as any).bancoAPI.findByEmail(email.value)

      if(!usuario){
        console.log("usuario nao existe...")
        return;
      }

      const passwordConfirmation = {
        password: password.value,
        password_hash: usuario.password_hash as string
      }
      const passwordHash = (window as any).authAPI.hash(password.value);
      
      if(usuario.password_hash !== passwordHash){
        console.log("credenciais incorretas...")
        return;
      }

      (window as any).navigateAPI.irPaginaHome();

    })
})
