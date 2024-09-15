function calculaarea(bse: number,alt: number) : number{
    return bse * alt;
}

const calculaarea2 = (base: number , alt: number): number => base*alt

function somar (...numeros: number[]): void{
    console.log(numeros)   
}

function teste(): string | number{
    if(10>5){
    return 'ola'
    }
    else{
        return 5
    }
}