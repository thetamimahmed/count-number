let count = 0;
document.getElementById('plus-btn').addEventListener('click', function(){
    count++;
    control('count');
})
document.getElementById('minus-btn').addEventListener('click', function(){
        if(count > 0){
            count--;
            control('count');
        }
})

function control(id){
    document.getElementById(id).innerText = count;
}