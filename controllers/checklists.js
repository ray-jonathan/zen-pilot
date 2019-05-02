
function grabChecklists(req, res){

    res.render('./checklists', {
        partials : {
            headPartial : './head-partial',
            navPartial : './nav-partial',
            recentBlogPartial : './recentBlog-partial'
        }
    });
}


module.exports = {
    grabChecklists
};
