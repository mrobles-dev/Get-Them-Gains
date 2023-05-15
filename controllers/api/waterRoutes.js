const router = require('express').Router();
const { Water } = require('../../models');
const withAuth = require('../../utils/auth');

const moment = require('moment');
const { Op } = require('sequelize');
