//Seteo de opciones a elegir
let opciones = ['piedra', 'papel','tijeras'];
let index_user, index_computer;

//Secciones del juego
let div_opciones = document.getElementById('opciones');
let div_resultados = document.getElementById('result'); 

//Input imagen result
let option_user_display = document.getElementById("userSelection");
let option_cpu_display = document.getElementById("cpuSelection");
let labelResult = document.getElementById("labelResult");

//setea opcion user/cpu

const getOption = (selected_option) =>{

    eleccion_user = selected_option;
    index_user = opciones.indexOf(eleccion_user);
    index_computer = Math.floor(Math.random() * 3);
    //setear imagenes correspondientes
    option_user_display.src = setImage(index_user);
    option_cpu_display.src = setImage(index_computer);

    //llama a la logica del juego
    logicGame();
}

//COlocar img deacuerdo al indice en option
const setImage = (index) =>{
    let src_image;
    if (index === 0){
        src_image = 'piedra.png';
    } else if(index === 1){
        src_image = 'papel.png'
    }else{
        src_image = 'tijeras.png'
    }

    return src_image

}

//Check resultado
const checkResult = (index_computer, index_user) =>{
    if ((index_computer-1) === index_user){
        console.log('You Lose');
        labelResult.innerText = 'You Lose';
    }else{
        console.log('You Win');
        labelResult.innerText = 'You win';
    }
}

//logica del juego

const logicGame = () =>{
    option_user_display.style.display = 'none';
    result.style.display = 'block';
    console.log('indice user', index_user);
    console.log('indice computadora', index_computer);
    if(index_user === index_computer){
        console.log('empate');
        labelResult.innerText='Empate';
    }else if(index_user === 0){
        checkResult(index_computer, index_user);
    }else if(index_user === 1){
        checkResult(index_computer, index_user);
    }else{
        index_user += 3;
        checkResult(index_computer, index_user)
    };
}

//Reseteo del game

const reGame = () =>{
    option_user_display.style.display ='block';
    result.style.display ='none';
}