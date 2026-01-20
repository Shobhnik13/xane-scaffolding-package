'use strict';

const express = require('express');
const router = express.Router();

const controller = require('app/controllers/__feature__');

/**
 * Create __feature__
 */
router.post('/', controller.create__Feature__);

/**
 * Get all __feature__s
 */
router.get('/', controller.get__Feature__s);

/**
 * Get single __feature__ by id
 */
router.get('/:_feature__id', controller.get__Feature__);

/**
 * Update __feature__ by id
 */
router.put('/:_feature__id', controller.update__Feature__);

module.exports = router;
