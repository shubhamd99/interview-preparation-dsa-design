// Consider two points, p = (px, py) and q = (qx, qy). We consider the inversion or point reflection,
// r = (rx, ry) , of point p across point q to be a 180 degree rotation of point p around q.

// Given n sets of points p and p, find r for each pair of points and print two space-separated integers denoting
// the respective values of rx and ry on a new line.

function findPoint(px, py, qx, qy) {
    /*
     * Write your code here.
     */
    // So we can find the reflection point with the formula
    // rx = 2qx - px
    // ry = 2qy - py

    const rx = 2*qx - px;
    const ry = 2*qy - py;

    return [rx, ry];

}