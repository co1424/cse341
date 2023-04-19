const greatFunction = (req, res, next) => {
    res.json('Nani')
}

const returnAnotherPerson = (req, res, next) => {
    res.json('Guapo')
}

module.exports = {greatFunction, returnAnotherPerson};