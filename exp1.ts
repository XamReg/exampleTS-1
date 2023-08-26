interface IUser  {
    price:number
    discount:number
    isInstallment:boolean
    months:number
}

const totalPrice = ({price,discount,isInstallment,months}:IUser) => {
    let befPr = price - ((price/100)*discount)
    if (isInstallment == true){
        befPr = befPr/months}

    return(befPr)
}

const price = totalPrice({price:100000,discount:25,isInstallment:true,months:12});
console.log(price)

