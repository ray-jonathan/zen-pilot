
function getAbout(req, res){

    res.render('./about', {
        partials : {
            headPartial : './head-partial',
            navPartial : './nav-partial'
        }
    });
}


module.exports = {
    getAbout
};
