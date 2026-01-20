'use strict';

const utilsService = require('app/services/utils');
const wrapperService = require('app/services/wrapper');
const config = require('app/configs/config');

/**
 * Create a new __feature__ record
 */
const create__Feature__ = async (params) => {
    if (!params.param1) {
        throw new Error('input_missing');
    }

    const _insert = {
        param1: params.param1
    };

    const query = config.knex.insert(_insert).into('__feature__s');
    const result = await query;

    return result[0];
};

/**
 * Fetch multiple __feature__ records
 */
const get__Feature__s = async (params) => {
    const query = config.knex
        .select('id')
        .from('__feature__s')
        .orderBy('id', 'desc');

    params.__feature__Id ? query.where('id', params.__feature__Id) : null;

    const result = await query;
    return utilsService.sanitizeSqlResult(result);
};

/**
 * Fetch a single __feature__ by id
 */
const get__Feature__ = async (params) => {
    if (!params.__feature__Id) {
        throw new Error('input_missing');
    }

    const result = await get__Feature__s(params);
    return result ? result[0] : null;
};

/**
 * Update __feature__ record
 */
const update__Feature__ = async (params) => {
    if (!params.__feature__Id) {
        throw new Error('input_missing');
    }

    const _update = {
        updated_at: new Date().toISOString()
    };

    params.param1 ? (_update.param1 = params.param1) : null;

    await config.knex('__feature__s')
        .update(_update)
        .where('id', params.__feature__Id);

    return true;
};

module.exports = {
    create__Feature__: wrapperService.wrap(create__Feature__),
    get__Feature__s: wrapperService.wrap(get__Feature__s),
    get__Feature__: wrapperService.wrap(get__Feature__),
    update__Feature__: wrapperService.wrap(update__Feature__)
};
