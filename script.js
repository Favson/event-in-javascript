const checkBox1 = document.getElementById('checkBox1')
const checkBox2 = document.getElementById('checkBox2')
const checkBox3 = document.getElementById('checkBox3')
const checkBox4 = document.getElementById('checkBox4')

const processAction = (index)=>{
    const status =index.target.checked
    console.log(status, 'Hello')
    const progressFill = document.getElementById('progress-fill')

    let percentage = document.getElementById('percentage')
    //progressFill[0].innerHTML =`` 
    const width = progressFill.style.widthgit 
    const calculatedWidth = Number(width.substring(0, width.length-1))
    
    if(status){
        progressFill.style.width =`${calculatedWidth +25}%`
        percentage.innerHTML = calculatedWidth + 25 + '%'
        progressFill.style.backgroundColor ="green"
    }else{
        progressFill.style.width =`${calculatedWidth -25}%`
        percentage.innerHTML = calculatedWidth - 25 + '%'
        progressFill.style.backgroundColor ="red"
    }


}
checkBox1.addEventListener('click', processAction);
checkBox2.addEventListener('click', processAction);
checkBox3.addEventListener('click', processAction);
checkBox4.addEventListener('click', processAction);
