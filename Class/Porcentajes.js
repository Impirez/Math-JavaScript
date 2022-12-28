const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')

btn.addEventListener('click', CalcularDescuento)

function CalcularDescuento(){
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);
    
    console.log({price, discount})

    if(!price || !discount){
        console.log('error')
        pResult.innerText= 'Llena el formulario'
    }else if(discount > 100){
        pResult.innerText = ' Pon un descuento valido'
    }else{
        const newPrice = (price *(100 - discount) / 100);

        pResult.innerText = 'El nuevo precio es $'+newPrice
    }
    
}