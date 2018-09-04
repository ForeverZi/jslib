/**
 * @author yangqi
 * @email txzm2018@gmail.com
 * @create date 2018-09-04 10:44:56
 * @modify date 2018-09-04 10:44:56
 * @desc [description]
*/
function *getRandomIt(seed) {
    seed = seed || Date.now();
    while(true){
        seed = (seed * 9301 + 49297) % 233280;
        yield seed / 233280;
    }
};

function *getRandomIntIt(max, seed){
    const it = getRandomIt(seed);
    for(const v of it){
        yield Math.floor(v * max);
    }
}

export default {
    getRandomIt: getRandomIt,
    getRandomIntIt: getRandomIntIt
};