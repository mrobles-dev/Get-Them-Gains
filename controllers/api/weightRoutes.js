const router = require('express').Router();
const { Weight } = require('../../models');
const withAuth = require('../../utils/auth');

const moment = require('moment');
const { Op } = require('sequelize');
