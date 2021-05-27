function isAnagram(s1, s2) {
    if (s1.length != s2.length)
        return false;

    var data = {};
    for (var i = 0; i < s1.length; i++)
        if (data[s1[i]] == undefined)
            data[s1[i]] = 1;
        else
            data[s1[i]]++;

    for (var i = 0; i < s2.length; i++)
        if (data[s2[i]] == undefined || data[s2[i]] == 0)
            return false;
        else
            data[s2[i]]--;

    return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("here", "heir"));
console.log(isAnagram("wind", "dwine"));