function authenticate(req, res, next) {
    let headers = req.headers["authorization"]

    console.log(headers)

    next() //proceed to the original request
}

module.exports = authenticate