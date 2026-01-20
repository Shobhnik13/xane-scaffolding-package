'use strict';

const __feature__Service = require('app/services/__feature__');
const wrapperService = require('app/services/wrapper');

/**
 * Handle create __feature__ request
 */
const create__Feature__ = async (req, res) => {
    if (!req.body.param1) {
        throw new Error('input_missing');
    }

    const params = {
        param1: req.body.param1
    };

    const result = await __feature__Service.create__Feature__(params);
    return res.json(result);
};

/**
 * Handle get all __feature__s request
 */
const get__Feature__s = async (req, res) => {
    const result = await __feature__Service.get__Feature__s({});
    return res.json(result);
};

/**
 * Handle get single __feature__ request
 */
const get__Feature__ = async (req, res) => {
    if (!req.params._feature__id) {
        throw new Error('input_missing');
    }

    const params = {
        __feature__Id: parseInt(req.params._feature__id)
    };

    const result = await __feature__Service.get__Feature__(params);
    return res.json(result);
};

/**
 * Handle update __feature__ request
 */
const update__Feature__ = async (req, res) => {
    if (!req.params._feature__id) {
        throw new Error('input_missing');
    }

    const params = {
        __feature__Id: parseInt(req.params._feature__id)
    };

    req.body.param1 ? (params.param1 = req.body.param1) : null;

    const result = await __feature__Service.update__Feature__(params);
    return res.json(result);
};

module.exports = {
    create__Feature__: wrapperService.wrap(create__Feature__),
    get__Feature__s: wrapperService.wrap(get__Feature__s),
    get__Feature__: wrapperService.wrap(get__Feature__),
    update__Feature__: wrapperService.wrap(update__Feature__)
};
