const normalize = require('json-api-normalize')


module.exports.serialize = (body) => {
    if (body == undefined) return body;
    else return (body.data == undefined)? new JsonApiResource(body).serialize() : body;
}


module.exports.deserialize = (data) => {
    return normalize(data);
}


module.exports.normalize = (data) => {
    return normalize(data);
}


class JsonApiResource {

    constructor(resource = {}) {

        if (resource != undefined) {

            this.data = {};
            this.data.attributes = {};

            // TODO: portare id e type in testa ad ogni object
            Object.keys(resource).forEach((key) => {
                let field = resource[key];
                if (field != undefined) {
                    if (['id', 'type'].includes(key)) this.data[key] = field;
                    else
                    if (field.isApiResource && field.isApiResource()) {
                        if (this.data.relationships == undefined) this.data.relationships = {};
                        this.data.relationships[key.startsWith('__')? key.substr('__'.length) : key] = { data: { type: field.type, id: field.id } };
                    }
                    else this.data.attributes[key] = field;
                }
            });

        }
    }

    serialize() {
        return { data: this.data }
    }

}
