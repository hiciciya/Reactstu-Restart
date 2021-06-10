let arr2 = []
let data =[
    {a:'1',b:'2'},
    {a:'1',b:undefined}
]
data.map((v)=>{
    arr2.push({aa:v.a,bb:v.b})
})
console.log(arr2)arr2