/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var cnt = 0;
    var longest = 0;
    var restartidx = 0;
    for (var i = 0; i < s.length; i++) {
        const idx = s.substring(restartidx, i).indexOf(s[i])
        if (idx > -1) {
            restartidx = restartidx + idx + 1;
            cnt = i - restartidx;
        }
        cnt++;
        if (cnt > longest) {
            longest = cnt;
        }
    }
};
