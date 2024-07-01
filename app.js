let pronombres = ['the', 'our'];
let adjetivos = ['great', 'big'];
let sustantivos = ['jogi', 'racoo'];
let extenxsiones = [ '.com', '.net', '.us', '.io'];

for (let i = 0; i < pronombres.length; i++) {
    
    for (let j = 0; j < adjetivos.length; j++) {
        
        for (let k = 0; k < sustantivos.length; k++) {
           
            for (let l = 0; l < extenxsiones.length; l++) {
                
                console.log(pronombres[i] + adjetivos[j] + sustantivos[k] + extenxsiones[l]);                
            }
        }
    }
}
