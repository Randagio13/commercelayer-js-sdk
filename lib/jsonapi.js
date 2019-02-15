const normalize = require('json-api-normalize')
const utils = require('./utils')


module.exports.serialize = (body) => {
    if (body == undefined) return body;
    // No data = Plain Object or Api Resource
    else return (body.data == undefined)? new JsonApiResource(body).serialize() : body;
}


module.exports.deserialize = (japi) => {
    if (japi == undefined) return japi;
    else return (japi.data == undefined)? japi : new JsonApiResource(japi).deserialize();
}


module.exports.normalize = (data) => {
    return normalize(data);
}


class JsonApiResource {

    constructor(resource = {}) {
        this.resource = resource;
    }

    serialize() {

        if (this.resource.data != undefined) return this.resource;

        this.data = {};
        this.data.attributes = {};

        // TODO: portare id e type in testa ad ogni object
        Object.keys(this.resource).forEach((key) => {
            let field = this.resource[key];
            if (field != undefined) {
                if (['id', 'type'].includes(key)) this.data[key] = field;
                else
                if (field.isApiResource && field.isApiResource()) {
                    if (this.data.relationships == undefined) this.data.relationships = {};
                    this.data.relationships[key.startsWith('__')? key.substr('__'.length) : key] = { data: { type: field.type, id: field.id } };
                }
                else
                if (Array.isArray(field) && key.startsWith('__')) {
                    utils.log('Array Resource relationships not supported: ' + rel);
                }
                else this.data.attributes[key] = field;
            }
        });

        return { data: this.data }

    }


    deserialize() {

        if ((this.resource.data == undefined) && this.resource.isApiResource && (this.resource.isApiResource() === true)) return this.resource;

        let data = this.resource.data;

        let res = utils.newResource(data.type, data.id, data.attributes);

        if (data.relationships == undefined) return res;
        else
        Object.keys(data.relationships).forEach((rel) => {
            let rel_data = data.relationships[rel].data;
            if (rel_data != undefined) {
                if (Array.isArray(rel_data)) {
                    utils.log('Array Resource relationships not supported: ' + rel);
                }
                else {
                    let relRes = utils.newResource(rel_data.type, rel_data.id);
                    res.setResource(rel, relRes);
                    let inc = utils.getIncluded(this.resource, rel_data.type, rel_data.id);
                    relRes.setFields(inc.attributes);
                }
            }
        });
    
       
        return res;

    }

}
