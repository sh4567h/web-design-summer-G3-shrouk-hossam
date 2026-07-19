var degree = prompt('Enter Your degree')

if(degree>100){
    console.log('invaild value')
}else if(degree<100 && degree>=90){
     console.log('Your Appreciation : A')
}else if(degree<90 && degree>=80){
     console.log('Your Appreciation : B')
}else if(degree<80 && degree>=70){
     console.log('Your Appreciation : C')
}else{
    console.log('Your Appreciation : F')
}