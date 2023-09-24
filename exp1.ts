interface IUser  {
    price:number
    discount:number
    isInstallment:boolean
    months:number
}

const totalPrice = ({price,discount,isInstallment,months}:IUser): number => {
    let befPr:number = price - ((price/100)*discount)
    return isInstallment ? befPr/months:befPr;
}

const price = totalPrice({price:100000,discount:25,isInstallment:true,months:12});
console.log(price)

