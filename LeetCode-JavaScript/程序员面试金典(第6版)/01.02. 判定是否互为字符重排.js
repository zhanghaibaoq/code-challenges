const CheckPermutation = (s1, s2) => {
    return s1.split('').sort().join('') === s2.split('').sort().join('');
    // return String([...s1].sort())===String([...s2].sort()) //String([...'aeb'].sort()) =>'a,b,e'

};

var CheckPermutation1 = function (s1, s2) {
    return s1.length == s2.length && [...s1].sort().join('') === [...s2].sort().join('');
};

var CheckPermutation2 = function (s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    let table = {};
    for (let i = 0; i < s1.length; i++) {
        if (table[s1[i]]) {
            table[s1[i]]++;
        } else {
            table[s1[i]] = 1;
        }
        // table[s1[i]] = table[s1[i]] ? table[s1[i]] + 1 : 1;
    }
    for (let j = 0; j < s2.length; j++) {
        if (s2[j] in table) {
            table[s2[j]]--;
        } else {
            return false;
        }
    }
    let res = Object.values(table).find(item =>
        item !== 0
    );
    return res === undefined;
};

var CheckPermutation3 = function (s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    const map = new Map();
    for (let s of s1) {
        map.set(s, (map.get(s) || 0) + 1);
    }
    for (let s of s2) {
        map.set(s, (map.get(s) || 0) - 1);
    }
    for (let value of map.values()) {
        if (value !== 0) {
            return false;
        }
    }
    return true;
};
