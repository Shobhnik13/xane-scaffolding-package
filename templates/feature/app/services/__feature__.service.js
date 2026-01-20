'use strict';

const status = require('app/configs/status');
const wrapperService = require('app/services/wrapper');
const __feature__Model = require('app/models/__feature__');

/**
 * Create __feature__
 */
const create__Feature__ = async (params) => {
    // 👉 validate input params here

    // 👉 prepare params for model layer

    // 👉 call model create method
    // const id = await __feature__Model.create__Feature__(data);

    // 👉 fetch created __feature__
    // const result = await __feature__Model.get__Feature__({ __feature__Id: id });

    // 👉 prepare response
    let response = status.getStatus('success');
    response.data = {
        // __feature__: result
    };

    return response;
};

/**
 * Get all __feature__s
 */
const get__Feature__s = async (params) => {
    // 👉 build query params

    // 👉 call model fetch method
    // const result = await __feature__Model.get__Feature__s(query);

    let response = status.getStatus('success');
    response.data = {
        // __feature__s: result
    };

    return response;
};

/**
 * Get single __feature__
 */
const get__Feature__ = async (params) => {
    // 👉 validate __feature__Id

    // 👉 call model get method
    // const result = await __feature__Model.get__Feature__({ __feature__Id });

    let response = status.getStatus('success');
    response.data = {
        // __feature__: result
    };

    return response;
};

/**
 * Update __feature__
 */
const update__Feature__ = async (params) => {
    // 👉 validate input

    // 👉 call model update method
    // await __feature__Model.update__Feature__(data);

    // 👉 fetch updated __feature__
    // const result = await __feature__Model.get__Feature__({ __feature__Id });

    let response = status.getStatus('success');
    response.data = {
        // __feature__: result
    };

    return response;
};

module.exports = {
    create__Feature__: wrapperService.wrap(create__Feature__),
    get__Feature__s: wrapperService.wrap(get__Feature__s),
    get__Feature__: wrapperService.wrap(get__Feature__),
    update__Feature__: wrapperService.wrap(update__Feature__)
};
