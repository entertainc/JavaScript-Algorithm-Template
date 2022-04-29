function mul(str1, num) {
    let res = [];
    let i = str1.length - 1;
    let temp = 0;
    
    while(i >= 0 || temp) {
        console.log('i = ', i, 'temp = ', temp);
        temp = Number(str1[i]) * num + temp;
        res.push(temp % 10);    
        temp = Math.floor(temp / 10);
        i --;
    }

    console.log(res);
    return res.reverse().join("");
}

alert(mul('12345', 10));
