
class QueryFilter {

    constructor() {
        this.clear();
    }

    clear() {
        this.sort_fields = [];
        this.sparse_fieldsets = {};
        this.included_resources = [];
        this.filter_fields = {};
        this.custom_params = {};
        this.page_number = undefined;
        this.page_size = undefined;
        this.query_options = undefined;
    }

    isQueryFilter() { return true; }

    sort(field, descending) {
        this.sort_fields.push((descending? '-' : '').concat(field));
        return this;
    }

    fields(resource, ...fields) {
        if (fields != undefined) this.sparse_fieldsets[resource] = fields;
        return this;
    }

    include(...resources) {
        // if (resources != undefined) resources.forEach(res => { this.included_resources.push(res) })
        if (resources != undefined) this.included_resources.push(resources);
        return this;
    }

    filter(filter, value) {
        if ((filter != undefined) && (value != undefined)) this.filter_fields[filter] = value;
        return this;
    }

    param(key, value) {
        if ((key != undefined) && (value != undefined)) this.custom_params[key] = value;
        return this;
    }

    page(number, size) {
        this.pageNumber(number);
        this.pageSize(size);
        return this;
    }

    pageSize(size) {
        this.page_size = size;
        return this;
    }

    pageNumber(number) {
        this.page_number = number;
        return this;
    }

    option(key, value) {
        if  ((key != undefined) && (value != undefined)) this.query_options[key] = value;
    }

    build(join) {

        let qsMap = {};

        // Filter Fields
        if (Object.keys(this.filter_fields).length > 0)
            Object.keys(this.filter_fields).forEach(filter => { qsMap[`filter[${filter}]`] = this.filter_fields[filter] });
        
        // Included Resources
        if (Object.keys(this.included_resources).length > 0)
            qsMap.include = this.included_resources.join(',');

        // Sparse Fieldsets
        if (Object.keys(this.sparse_fieldsets).length > 0)
            Object.keys(this.sparse_fieldsets).forEach(res => { qsMap[`fields[${res}]`] = this.sparse_fieldsets[res].join(',') });

        // Sort Fields
        if (Object.keys(this.sort_fields).length > 0)
            qsMap.sort = this.sort_fields.join(',');

        // Custom Params
        if (Object.keys(this.custom_params).length > 0)
            Object.keys(this.custom_params).forEach(key => { qsMap[key] = this.custom_params[key] })

        // Pagination
        if (this.page_number != undefined) qsMap['page[number]'] = this.page_number;
        if (this.page_size != undefined) qsMap['page[size]'] = this.page_size;

        return !join? qsMap : Object.keys(qsMap).map(key => { return key+'='+qsMap[key] }).join('&');

    }

}


module.exports = {
    QueryFilter
}

module.exports.newInstance = () => {
    return new QueryFilter();
}
