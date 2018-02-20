/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    for (var i = 0; i < preferences.length; i++) {


        var p1 = preferences[i] - 1;
        var p2 = preferences[p1] - 1;
        var p3 = preferences[p2] - 1;

        if ((p3 == i) && (p1 != p2)) {

            count++;
            preferences[p1] = p1 + 1;

            preferences[p2] = p2 + 1;

            preferences[p3] = p3 + 1;

        }


    }

    return count;

};