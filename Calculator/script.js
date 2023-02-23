
function clearScreen(){
    document.getElementById('result').value="";
}
function display(value){
    let operators = ['+','-','*','/'];
    let a = document.getElementById('result').value.split(''); 
    if((operators.includes(value)) && (operators.includes(a[a.length-1]))){
        alert('cannot enter operator simultaneously');
    }
    else{
        document.getElementById('result').value +=value;
    }
}
function calculate()
{
    let operators = ['+','-','*','/'];
    let x = document.getElementById('result').value;
    try {
        if (operators.includes(x.charAt(x.length - 1))) {
            alert('Incomplete expression');
        }
        else {
            let res = eval(x);
            document.getElementById('result').value = res;
        }
    }
    catch {
        alert('Invalid expression')
    }
}
