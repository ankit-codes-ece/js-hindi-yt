const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height == '' || height < 0 || isNaN(height)){
        
        result.innerHTML = `please give a valid height ${height}`
    }else if(weight == '' || weight < 0 || isNaN(weight)){
        
        result.innerHTML = `please give a valid weight ${weight}`
    }else {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        // result.innerHTML = `<span>${bmi}</span>`

        result.innerHTML = ''

        const div1 = document.createElement('div')
        const div2 = document.createElement('div')
        div1.innerHTML = `BMI is ${bmi}`
        result.appendChild(div1)

        if(bmi < 18.6){
            div2.innerHTML = 'Under Weight'
            result.appendChild(div2)
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            div2.innerHTML = 'Normal Range'
            result.appendChild(div2)
        }
        else{
            div2.innerHTML = 'Over Weight'
            result.appendChild(div2)
        }
    }
    
})