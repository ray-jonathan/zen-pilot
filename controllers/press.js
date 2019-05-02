
function getPress(req, res){

    res.render('./press', {
        partials : {
            headPartial : './head-partial',
            navPartial : './nav-partial'
        }
    });
}


module.exports = {
    getPress
};
