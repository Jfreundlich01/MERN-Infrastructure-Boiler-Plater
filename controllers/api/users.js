module.exports = { create }

function create(req, res) {
    //baby Step..
    res.json({
        user: {
           name: req.body.name,
           email : req.body.email
        }
    })
}