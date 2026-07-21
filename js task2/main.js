let courses = prompt('enter course name')
let coursesSet=['JS' , 'C++' ,"Java" ]
let isCourse=0
if(!courses){
    console.log('Invaild value')
}else{
    isCourse = coursesSet.findIndex((index)=>{return courses.toLowerCase()==index.toLowerCase()})
    if(isCourse===-1){
    coursesSet.push(courses)
coursesSet.map((index)=>{console.log(index)})
 
    }else{
         console.log("the course found ")
  
   }
    
}