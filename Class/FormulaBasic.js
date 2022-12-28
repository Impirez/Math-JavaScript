console.group('Cuadrado') ///Console.group('') y Console.groupEnd('') Lo que hace es agrupar cierta parte del codigo

const ladosCuadrado = 5
const perimetroCuadrado = ladosCuadrado * 4;
const areaCuadrado = ladosCuadrado ** 2;

    // Para hallar arega es base * altura / 2
    //Para hallar perimetro: suma de todos los lados

    console.log({
        ladosCuadrado,
        perimetroCuadrado,
        areaCuadrado
    })

    //Aplicamos la formula en una funcion que necesita parametro

function calcularCuadrado(Clado){
    return{
        area: Clado ** 2,
        perimetro: Clado * Clado
    }
}

console.groupEnd('Cuadrado')
console.group('Triangulo');

const ladosTriangulo1 =  6;
const ladosTriangulo2 = 6;
const ladoBaseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ( ladosTriangulo1 + ladosTriangulo2 + ladoBaseTriangulo)
const areaTriangulo =  (ladoBaseTriangulo * alturaTriangulo) / 2;

    // Para hallar arega es base * altura / 2
    //Para hallar perimetro: suma de todos los lados



    console.log({
        ladosTriangulo1,
        ladosTriangulo2,
        ladoBaseTriangulo,
        alturaTriangulo,
        perimetroTriangulo,
        areaTriangulo
    })

    //Aplicamos la formula en funcion que necesita parametro

function calcularTriangulo(Tlado1, Tlado2, Tbase, Taltura){
    return{
        area: Tlado1 + Tlado2 + Tbase,
        perimetro: (Tbase * Taltura) / 2
    }
}

console.groupEnd('Triangulo');