function add(str1, str2) {
    let i = str1.length - 1;
    let j = str2.length - 1;
    let t = 0;
    let arr = [];

    while(i >= 0 && j >= 0) {
        let sum = Number(str1[i]) + Number(str2[j]) + t;
        arr.push(sum % 10);
        t = Math.floor(sum / 10);
        i --;
        j --;
    }

    while(i) {
        if (t) {
            let sum = Number(str1[i --] + t)
            arr.push(sum % 10);
            t = Math.floor(sum / 10);
        }  else  {
            arr.push(str1[i --]);
        }
    }

    while(j) {
        if (t) {
            let sum = Number(str2[j --] + t) 
            arr.push(sum % 10);
            t = Math.floor(sum / 10);
        }  else  {
            arr.push(str1[j --]);
        }
    }

    return arr.reverse().join("");
}