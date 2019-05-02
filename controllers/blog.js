
function grabBlogs(req, res){

    res.render('./blog', {
        partials : {
            headPartial : './head-partial',
            navPartial : './nav-partial',
            recentBlogPartial : './recentBlog-partial'
        }
    });
}


module.exports = {
    grabBlogs
};
