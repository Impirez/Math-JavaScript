const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const btncup = document.getElementById('calcular-cupon');
const pResult = document.querySelector('#result');
const cupon = document.getElementById('cupon');

btn.addEventListener('click', CalcularDescuento)

function CalcularDescuento(){
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);
    const descuento = cupon.value;
    const cupon1 = "PiñaAbajoDelMar";
    const cupon2 = "Pato";
    const descupon1 = 25;
    const descupon2 = 50;
    
    if(!price || !discount){
        console.log('error')
        pResult.innerText= 'Llena el formulario'
    }else if(discount > 100){
        pResult.innerText = ' Pon un descuento valido'
    }else{
        const newPrice = (price *(100 - discount) / 100);
        pResult.innerText = 'El nuevo precio es $'+newPrice
    }   


    if(descuento == cupon1){
        newPrice = (price *(100 - descupon1) / 100);
        pResult.innerText = 'El nuevo precio es $'+ newPrice
    }else if(descuento == cupon2){
        newPrice = (price *(100 - descupon2) / 100);
        pResult.innerText = 'El nuevo precio es $'+ newPrice
    }
}