const getFrontPage= (req, res) => {
    res.sendFile("/views/frontPage.html", {root: __dirname+"/.."});
}

module.exports = {getFrontPage};