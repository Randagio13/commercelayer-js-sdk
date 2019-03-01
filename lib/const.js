
class ResponseType {
    static get Normalized() { return 'normalized' }
    static get JSONApi() { return 'jsonapi' }
    static get Model() { return 'model' }
    static get Raw() { return 'raw' }
}


class ErrorType {
    static get JSONApi() { return 'jsonapi' }
    static get Model() { return 'model' }
    static get Raw() { return 'raw' }
}


module.exports = {
    ResponseType,
    ErrorType
}