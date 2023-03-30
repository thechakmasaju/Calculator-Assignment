let button = document.getElementById('btn');

button.addEventListener('click', () =>{
    const height = parseInt(document.getElementById('Height').value);
    const weight = parseInt(document.getElementById('Weight').value);
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML='Please provide a valid height';
    }
    else{
        document.getElementById('height_error').innerHTML = '';
    height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML= 'Please provide a valid weight';
    }
    else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight/((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            document.getElementById('output').innerHTML = 'Under weight : ' + bmi;
        }
        else if(bmi >= 18.6 && bmi < 24.9){
            document.getElementById('output').innerHTML = 'Normal : ' + bmi;
        }
        else{
            document.getElementById('output').innerHTML = 'Over weight : ' + bmi;
        }
    }
    else{
        alert('The form has errors');
        result.innerHTML = '';
    }

});
