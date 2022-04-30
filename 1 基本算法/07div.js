function div(str1, a) {
    let len = str1.length;
    let res = [];
    let r = 0;
    let i = 0;
    while (i < len) {
        let t = r * 10 + Number(str1[i ++]);
        res.push(Math.floor(t / a));
        r = t % a;
    }

    console.log(res, r);
    let index = 0;
    for (i = 0; i < len; i ++) {
        if (res[i]) {
            index = i;
            break;
        }
    }

    res = res.slice(i);
    return [res.join(""), r];
}

alert(div('21982739812739',23987));