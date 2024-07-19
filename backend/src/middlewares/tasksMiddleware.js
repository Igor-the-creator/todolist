const validateTitle = (request, response, next) => {
    const { body } = request;

    if (body.title == undefined) {
        response.status(400).json({ message: 'O campo "title" e obrigatorio.' })
    }

    
    if (body.title == '') {
        response.status(400).json({ message: 'O campo "title" nao pode ser vazio.' })
    }
    next();
}

const validateStatus = (request, response, next) => {
    const { body } = request;

    if (body.status == undefined) {
        response.status(400).json({ message: 'O campo "status" e obrigatorio.' })
    }

    
    if (body.status == '') {
        response.status(400).json({ message: 'O campo "status" nao pode ser vazio.' })
    }
    next();
}

module.exports = {
    validateTitle,
    validateStatus
}