const normalize = require('json-api-normalize')
const utils = require('./utils')
const model = require('./model')



module.exports.serialize = (body) => {
    if (body == undefined) return body;
    // No data = Plain Object or Api Resource
    else return (body.data == undefined)? new JsonApiResource(body).serialize() : body;
}


module.exports.deserialize = (japi) => {
    if (japi == undefined) return japi;
    else
    if (Array.isArray(japi.data)) {
        let resArray = new Array();
        japi.data.forEach(res => {
            resArray.push(module.exports.deserialize({ data : res }))
        });
        return resArray;
    }
    else return (japi.data == undefined)? japi : new JsonApiResource(japi).deserialize();
}


module.exports.normalize = (japi) => {
    return japi? normalize(japi) : japi;
}


class JsonApiResource {

    constructor(resource = {}) {
        this.resource = resource;
    }

    serialize() {

        if (this.resource.data != undefined) return this.resource;

        this.data = {};
        this.data.attributes = {};

        // TODO: portare id e type in testa ad ogni object [BTF]
        Object.keys(this.resource).forEach((key) => {
            let field = this.resource[key];
            if (field != undefined) {
                if (['id', 'type'].includes(key)) this.data[key] = field;
                else
                if (model.helper.isApiResource(field)) {
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

        if ((this.resource.data == undefined) && model.helper.isApiResource(this.resource)) return this.resource;

        const data = this.resource.data? this.resource.data : this.resource;

        let res = model.helper.newResource(data.type, data.id, data.attributes);

        if (data.relationships == undefined) return res;
        else
        Object.keys(data.relationships).forEach((rel) => {
            let rel_data = data.relationships[rel].data;
            if (rel_data != undefined) {
                if (Array.isArray(rel_data)) {
                    let resArray = new Array();
                    rel_data.forEach(rd => {
                        let relRes = relatedResource(this.resource, rd.type, rd.id);
                        resArray.push(relRes);
                    });
                    res.setResource(rel, resArray);
                }
                else {
                    let relRes = relatedResource(this.resource, rel_data.type, rel_data.id);
                    res.setResource(rel, relRes);
                }
            }
        });
       
        return res;

    }

}


/**
 * 
 * @param {*} japi  JSONApi data
 * @param {*} type  resource type
 * @param {*} id    resource id
 * 
 * Create relationship in resource object
 */
function relatedResource(japi, type, id) {
    let relRes = model.helper.newResource(type, id);
    let inc = jsonapiIncluded(japi, type, id);
    if (inc != undefined) relRes.setFields(inc.attributes);
    return relRes;
}


/**
 * 
 * @param {*} japi  JSONApi data 
 * @param {*} type  resource type
 * @param {*} id    resource id
 *
 * Search for included resource
 */
function jsonapiIncluded(japi, type, id) {
    if ((japi == undefined) || (japi.included == undefined)) return undefined;
    let incRes = undefined;
    japi.included.some(inc => {
        if ((inc.type == type) && (inc.id == id)) incRes = inc;
        return (incRes != undefined);
    })
    return incRes;
}
