// 假设s[N], p[M] M <= N;

function kmp(str1, str2) {
    /*
                 (i - 1) i
        str1 -------|    |-------
        str2     ---|    |----
                    j    (j + 1)
        当str1[i] != str2[j + 1]时 j = next[j];
    */

    // str1.length >= str2.length; 
    // next[i] = j 表示 str1[1, j] = str1[i - j + 1, i], 并且j是最长的
    // j从1开始

    let len1 = str1.length;
    let len2 = str2.length;
    let str = ' '
    for (let i = 0; i < len1; i ++) {
        str += str1[i];
    }
    str1 = str;
    str += ' ';
    for (let i = 0; i < len2; i ++) {
        str += str2[i];
    }

    str2 = str.slice(len1 + 1)

    // str2 = str2.split("").unshift(0).join("");
    const next = Array(len2 + 1).fill(0);

    //求next过程(类似匹配过程) 
    for (let i = 2, j = 0; i <= len2; i ++) {
        while(j && str2[i] != str2[j + 1]) j = next[j];
        
        if (str2[i] == str2[j + 1]) j ++;
            next[i] = j;
    }
    
    // next.forEach(item => console.log(item));

    // 匹配过程
    for (let i = 1, j = 0; i <= len1; i ++) {
        while(j && str1[i] != str2[j + 1]) j = next[j];

        if (str1[i] == str2[j + 1]) j ++;
        if (j == len2) {
            console.log("匹配位置", i - len2);
            j = next[j];
        }
    }
}

kmp('ababababa', 'ababa');

kmp2 = (str1, str2) => {
    // s1是长串, s2是短串
    let len1 = str1.length;
    let len2 = str2.length;

    let next = Array(len2).fill(-1);

    for (let i = 1, j = -1; i < len2; i ++) {
        while(j != -1 && str2[i] != str2[j + 1]) j = next[j];

        if (str2[i] == str2[j + 1]) j ++;
        next[i] = j;
    }

    next.forEach(item => console.log(item));

    for (let i = 0, j = -1; i < len1; i ++) {
        while(j != -1 && str1[i] != str2[j + 1]) j = next[j];

        if (str1[i] == str2[j + 1]) j ++;

        if (j == len2 - 1) {
            console.log("匹配位置", i - len2 + 1);
            j = next[j];
        }
    }
}

kmp2('ababababa', 'ababa')