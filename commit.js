//import Input <()>
import input from 'readline-sync';

//Guardando a informação (!)
let commit = input.question("Comentario: ");

//Tratando a String <~>
commit = commit.trim();
commit = commit.toLowerCase();

//Array com Dados <-Palavrões->
let words = [
    "feio", "burro", "idiota",
    "porra", "merda", "m*rda",
    "m3rda","porra", "p*rra", "p0rra",
    "caralho", "c*ralho", "kralho",
    "desgraça", "d*sgraca", "d3sgraça",
    "puta", "p*ta", "put4",
    "cuzão", "c*zão", "cuz4o", "cuz@o",
    "arrombado", "4rrombado", "arrombad0",
    "bosta", "b*sta", "bost4",
    "fuder", "f*der", "fud3r", "fod*r",
    "cacete", "c*acete", "cacet3",
    "cu", "c*", "k*",
    "otário", "ot4rio", "ot@rio", "otário", "otári0",
    "babaca", "b*baca", "babac@", "b4baca",
    "corno", "c*rno", "corn0", "k0rno",
    "chupa", "ch*pa", "chup@", "chup4",
    "puta", "p*ta", "put@", "put4",
    "cachorra", "c*chorra", "cachorr@", "cach0rra",
    "escrota", "escrot@", "escrot4",
    "arregaçado", "arregacado", "arreg@çado", "arreg4çado",
    "piranha", "p*ranha", "pir4nha",
    "prostituta", "prost*tuta", "prostitut@",
    "retardado", "retardad0", "r*tardado",
    "vagabunda", "v*g@bunda", "vagabund4",
    "vagabundo", "v*g@bundo", "vagabund0",
    "imbecil", "imb3cil", "imb*cil",
    "estúpido", "est*pid0", "estup1do",
    "puto", "p*to", "put0",
    "filho da puta", "filho da p*ta", "f1lho da puta",
    "lazarento", "l*z*rento", "laz4rento",
    "miséria", "m1séria", "mis3ria"
];

let valido = true;

//verificando comentário --->>
for(let i = 0; i < words.length; i++){

    //Validando o comentário (?) -->
    if(commit.indexOf(words[i]) > -1){
        console.log(`\nSeu comentário vai contra as diretrizes da Comunidade \nPalavra ofensiva -> ${words[i].toUpperCase()}\n`);
        valido = false;
        break;
    }
}

if(!valido == false){
    console.log("\nComentário Publicado\n");
}