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

        return { data: this.data }

    }


    deserialize() {

        if ((this.resource.data == undefined) && this.resource.isApiResource && (this.resource.isApiResource() === true)) return this.resource;

        const util = require('util');
        // console.log(util.inspect(this.resource, false, null, true));

        let norm = normalize(this.resource);

        // console.log(util.inspect(norm, false, null, true));

        // let res = utils.newResource(norm.data.type, norm.data.id, norm.data.attributes);

        // if (norm.data.relationships != undefined)
        //     Object.keys(norm.data.relationships).forEach((key) => {
        //         // console.log(norm.data.relationships[key])
        //     });
    
        

        // return res;

    }

}
