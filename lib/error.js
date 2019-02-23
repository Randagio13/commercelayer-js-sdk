
class Error {
    constructor(apiError = {}) {
        this.code = apiError.code;
        this.title = apiError.title;
        this.detail = apiError.detail;
        this.source = apiError.source || {};
        this.meta = apiError.meta || {};
    }

    isApiError() { return true; }
    getSourcePointer() { return this.source.pointer; }
    getSourceItem(key) { return this.source[key]; }
    getMetaItem(key) { return this.meta[key]; }

    toString() { return `(${this.code}, ${this.title})`; }

}


class ErrorResponse {
    constructor(status, description) {
        this.status = status;
        this.description = description;
        this.errors = new Array();
    }
    
    isErrorResponse() { return true; }
    addError(error) { if (error && error.isApiError && (error.isApiError() === true)) this.errors.push(error); return this; }
    addApiError(apiError) { this.addError(new Error(apiError)); return this; }
    addErrors(errors = []) { errors.forEach(error => this.addError(error)); return this; }
    addApiErrors(apiErrors = []) { apiErrors.forEach(apiError => this.addApiError(apiError)); return this; }
    apiErrorsCount() { return (this.errors == undefined)? 0 : this.errors.length; }
    hasApiErrors() { return (this.apiErrorsCount() > 0); }
    getApiError(index) { return ((index >= 0) && (index < this.apiErrorsCount())? this.errors[index] : null); }

    toString() {
        let err = '[' + this.status + (this.description? ', ' + this.description : '') + ']';
        if (this.errors && (this.errors.length > 0)) {
            err += ' --> {';
            this.errors.forEach(x => err += x);
            err += '}';
        }
        return  err;
    }

}


module.exports = {
    errorResponse : (status, description) => { return new ErrorResponse(status, description); }
}