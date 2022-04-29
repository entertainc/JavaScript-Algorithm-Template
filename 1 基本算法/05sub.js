function sub(str1, str2) { // 只考虑str1 > str2的情况
    let t = 0;
    let i = str1.length - 1;
    let j = str2.length - 1;
    let arr = [];

    while(i >= 0) {
        let temp = Number(str1[i]) - t;
        if (j >= 0) 
            temp -= Number(str2[j]);
        
        arr.push((temp + 10) % 10);
        console.log('temp = ', temp, 'i = ', i);
        
        if (temp < 0)
            t = 1;
        
            i --;
        j --;
    }
    let index = 0;
    
    for (let i = arr.length - 1; i >= 0; i --) {
        if (arr[i] != 0) {
            index = i;
            break;
        }
    }

    arr = arr.slice(0, index + 1);
    console.log(arr);

    return arr.reverse().join("");
}

console.log(sub('123', '99'));
//C:\Users\LY\Desktop\JS手写代码\Algorithm\1 基本算法