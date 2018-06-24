/**
 * @author yangqi
 * @email txzm2018@gmail.com
 * @create date 2018-06-24 01:12:37
 * @modify date 2018-06-24 01:12:37
 * @desc [description]
*/
// 运行yield promise的生成器函数，使之可以处理异步并按序执行
function run(gen){
    const args = Array.prototype.slice.call(arguments, 1);
    const it = gen.apply(this, args);
    return Promise.resolve().then(function handleNext(value){
        const nextp = it.next(value);
        return (function handleResult(next){
            if(next.done){
                return next.value;
            } else {
                return Promise.resolve(next.value).then(handleNext,
                    function handleError(err){
                        return Promise.resolve(it.throw(err)).then(handleResult);
                    }
                );
            }
        })(nextp);
    });
}

module.exports = {
    run: run
};
