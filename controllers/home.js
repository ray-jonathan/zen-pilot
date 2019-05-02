
function goHome(req, res){

    res.render('./home', {
        partials : {
            headPartial : './head-partial',
            navPartial : './nav-partial',
            recentBlogPartial : './recentBlog-partial'
        }
    });
}


module.exports = {
    goHome
};
