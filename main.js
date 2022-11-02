var siyahi = [2, 43, 134, -5, 0, 2, 6, 12, 3];
// var cem = 0;
// for (let i = 0; i < siyahi.length; i++) {
//   if (siyahi[i] > 0 && siyahi[i] % 6 == 0) {
//     cem = cem + siyahi[i]
//   }
// }
// console.log(cem);

// var maximum = siyahi[0];
// for (let i = 0; i < siyahi.length; i++) {
//   if (maximum < siyahi[i]) {
//     maximum = siyahi[i];
//   }
// }
// console.log(maximum);

var cars = [
    {
        brand:"tesla",
        color:"red",
        model:"nemne",
        year:2012
    },
    {
        brand:"Pirus",
        color:"red",
        model:"nemne",
        year:1992
    },
    {
        brand:"dds",
        color:"red",
        model:"nemne",
        year:2005
    },
    {
        brand:"adsfdfdsfssd",
        color:"red",
        model:"nemne",
        year:2022
    },
    {
        brand:"asdsfdsfd",
        color:"red",
        model:"nemne",
        year:2011
    },
]

for (let i = 0; i < cars.length; i++) {
    if (cars[i].year >2010) {
        console.log("adi: "+cars[i].brand);
        console.log("rengi: "+cars[i].color);
        console.log("ili: "+cars[i].year);
        console.log("");
        console.log("###########");
        console.log("");
        
    }
    
}