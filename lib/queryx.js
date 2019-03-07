
const query = require('./query')


class QueryExpression extends query.QueryFilter {

    static explain(type) {
        const p = QueryExpression.PREDICATES[type];
        return (p != undefined)? p : ('Unknown predicate ' + type);
    }

    /**
     * https://github.com/activerecord-hackery/ransack#search-matchers
     * https://github.com/activerecord-hackery/ransack/blob/master/lib/ransack/locale/en.yml#L16
     */
    static get PREDICATES() {
        return {
            'eq': "equals",
            'eq_any': "equals any",
            'eq_all': "equals all",
            'not_eq': "not equal to",
            'not_eq_any': "not equal to any",
            'not_eq_all': "not equal to all",
            'matches': "matches",
            'matches_any': "matches any",
            'matches_all': "matches all",
            'does_not_match': "doesn't match",
            'does_not_match_any': "doesn't match any",
            'does_not_match_all': "doesn't match all",
            'lt': "less than",
            'lt_any': "less than any",
            'lt_all': "less than all",
            'lteq': "less than or equal to",
            'lteq_any': "less than or equal to any",
            'lteq_all': "less than or equal to all",
            'gt': "greater than",
            'gt_any': "greater than any",
            'gt_all': "greater than all",
            'gteq': "greater than or equal to",
            'gteq_any': "greater than or equal to any",
            'gteq_all': "greater than or equal to all",
            'in': "in",
            'in_any': "in any",
            'in_all': "in all",
            'not_in': "not in",
            'not_in_any': "not in any",
            'not_in_all': "not in all",
            'cont': "contains",
            'cont_any': "contains any",
            'cont_all': "contains all",
            'not_cont': "doesn't contain",
            'not_cont_any': "doesn't contain any",
            'not_cont_all': "doesn't contain all",
            'start': "starts with",
            'start_any': "starts with any",
            'start_all': "starts with all",
            'not_start': "doesn't start with",
            'not_start_any': "doesn't start with any",
            'not_start_all': "doesn't start with all",
            'end': "ends with",
            'end_any': "ends with any",
            'end_all': "ends with all",
            'not_end': "doesn't end with",
            'not_end_any': "doesn't end with any",
            'not_end_all': "doesn't end with all",
            'true': "is true",
            'false': "is false",
            'present': "is present",
            'blank': "is blank",
            'null': "is null",
            'not_null': "is not null",
        }
    }

    constructor() {
        super();
        this.clear();
    }

    clear() {
        super.clear();
        this.predicates = [];
    }

    isQueryExpression() { return true; }

    predicate(type, value, ...fields) {
        if ((fields != undefined) && (value != undefined)) {
            if ((this.__disable_predicate_check == undefined) || (this.__disable_predicate_check !== true))
                if (!Object.keys(QueryExpression.PREDICATES).includes(type)) throw 'Undefined predicate ' + type
            let fields_ = Array.isArray(fields[0])? fields[0] : fields;
            const key = fields_.join('_or_') + '_' + type;
            const val = Array.isArray(value)? value.join(',') : value;
            this.predicates[key] = val;
        }
        return this;
    }

    describe(type) { return QueryExpression.explain(type) }

    build(join) {
        let qsMap = super.build(join);
        if (!join) Object.keys(this.predicates).forEach(p => { qsMap[`filter[q][${p}]`] = this.predicates[p]; })
        else {
            if (qsMap.length > 0) qsMap += '&';
            qsMap += Object.keys(this.predicates).map(p => { return `filter[q][${p}]=${this.predicates[p]}` }).join('&');
        }
        return qsMap;
    }


    // Predicate shortcuts
    _eq(value, ...fields) { return this.predicate('eq', value, fields) }
    _eq_any(value, ...fields) { return this.predicate('eq_any', value, fields) }
    _eq_all(value, ...fields) { return this.predicate('eq_all', value, fields) }
    _not_eq(value, ...fields) { return this.predicate('not_eq', value, fields) }
    _not_eq_any(value, ...fields) { return this.predicate('not_eq_any', value, fields) }
    _not_eq_all(value, ...fields) { return this.predicate('not_eq_all', value, fields) }
    _matches(value, ...fields) { return this.predicate('matches', value, fields) }
    _matches_any(value, ...fields) { return this.predicate('matches_any', value, fields) }
    _matches_all(value, ...fields) { return this.predicate('matches_all', value, fields) }
    _does_not_match(value, ...fields) { return this.predicate('does_not_match', value, fields) }
    _does_not_match_any(value, ...fields) { return this.predicate('does_not_match_any', value, fields) }
    _does_not_match_all(value, ...fields) { return this.predicate('does_not_match_all', value, fields) }
    _lt(value, ...fields) { return this.predicate('lt', value, fields) }
    _lt_any(value, ...fields) { return this.predicate('lt_any', value, fields) }
    _lt_all(value, ...fields) { return this.predicate('lt_all', value, fields) }
    _lteq(value, ...fields) { return this.predicate('lteq', value, fields) }
    _lteq_any(value, ...fields) { return this.predicate('lteq_any', value, fields) }
    _lteq_all(value, ...fields) { return this.predicate('lteq_all', value, fields) }
    _gt(value, ...fields) { return this.predicate('gt', value, fields) }
    _gt_any(value, ...fields) { return this.predicate('gt_any', value, fields) }
    _gt_all(value, ...fields) { return this.predicate('gt_all', value, fields) }
    _gteq(value, ...fields) { return this.predicate('gteq', value, fields) }
    _gteq_any(value, ...fields) { return this.predicate('gteq_any', value, fields) }
    _gteq_all(value, ...fields) { return this.predicate('gteq_all', value, fields) }
    _in(value, ...fields) { return this.predicate('in', value, fields) }
    _in_any(value, ...fields) { return this.predicate('in_any', value, fields) }
    _in_all(value, ...fields) { return this.predicate('in_all', value, fields) }
    _not_in(value, ...fields) { return this.predicate('not_in', value, fields) }
    _not_in_any(value, ...fields) { return this.predicate('not_in_any', value, fields) }
    _not_in_all(value, ...fields) { return this.predicate('not_in_all', value, fields) }
    _cont(value, ...fields) { return this.predicate('cont', value, fields) }
    _cont_any(value, ...fields) { return this.predicate('cont_any', value, fields) }
    _cont_all(value, ...fields) { return this.predicate('cont_all', value, fields) }
    _not_cont(value, ...fields) { return this.predicate('not_cont', value, fields) }
    _not_cont_any(value, ...fields) { return this.predicate('not_cont_any', value, fields) }
    _not_cont(value, ...fields) { return this.predicate('not_cont', value, fields) }
    _not_cont_any(value, ...fields) { return this.predicate('not_cont_any', value, fields) }
    _not_cont_all(value, ...fields) { return this.predicate('not_cont_all', value, fields) }
    _start(value, ...fields) { return this.predicate('start', value, fields) }
    _start_any(value, ...fields) { return this.predicate('start_any', value, fields) }
    _start_all(value, ...fields) { return this.predicate('start_all', value, fields) }
    _not_start(value, ...fields) { return this.predicate('not_start', value, fields) }
    _not_start_any(value, ...fields) { return this.predicate('not_start_any', value, fields) }
    _not_start_all(value, ...fields) { return this.predicate('not_start_all', value, fields) }
    _end(value, ...fields) { return this.predicate('end', value, fields) }
    _end_any(value, ...fields) { return this.predicate('end_any', value, fields) }
    _end_all(value, ...fields) { return this.predicate('end_all', value, fields) }
    _not_end(value, ...fields) { return this.predicate('not_end', value, fields) }
    _not_end_any(value, ...fields) { return this.predicate('not_end_any', value, fields) }
    _not_end_all(value, ...fields) { return this.predicate('not_end_all', value, fields) }
    _true(value, ...fields) { return this.predicate('true', value, fields) }
    _false(value, ...fields) { return this.predicate('false', value, fields) }
    _present(value, ...fields) { return this.predicate('present', value, fields) }
    _blank(value, ...fields) { return this.predicate('blank', value, fields) }
    _null(value, ...fields) { return this.predicate('null', value, fields) }
    _not_null(value, ...fields) { return this.predicate('not_null', value, fields) }

}


module.exports = {
    QueryExpression
}

module.exports.newInstance = () => {
    return new QueryExpression();
}
