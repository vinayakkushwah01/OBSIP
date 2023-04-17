const calculateTemp = () =>{
    const numberTemp=document.getElementById('temp').value;
    
    const tempSelected=document.getElementById('temp_diff');
    
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // celcius to Fahrehheit
    const celToFah = (cel) =>{
        let fahrenheit= Math.round((cel * 9/5) +32).toFixed(1);
        return fahrenheit;
    }

    //fahrenheit to celcius
    const fahToCel = (fah) =>{
        let celcius= Math.round((fah - 32) * 5/9).toFixed(1);
        return celcius;
    }



    let result;

    if(valueTemp =='cel'){
        result= celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`Result = \n  ${result}° f`;
    }else{
        result= fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`Result =  ${result}° c`;

    }
} 