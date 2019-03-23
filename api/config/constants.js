require('dotenv').config();

const WHITELIST = {
  users: {
    create: [
      'firstName',
      'lastName',
      'emailAddress',
      'password',
      'phoneNumber',
    ],
    update: ['firstName', 'lastName', 'phoneNumber', 'subscriptions'],
    generateToken: ['phoneNumber', 'password'],
    updateDeviceToken: ['deviceToken'],
    updateStatus: ['status'],
    forgot: ['emailAddress'],
    reset: ['token', 'password'],
  },
  organizations: {
    create: [
      'name',
      'description',
      'website',
      'industry',
      'sector',
      'tickerSymbol',
      'numberOfEmployees',
      'social',
      'revenues',
      'awards',
      'addresses',
      'licenses',
      'emails',
    ],
  },
  jobs: {
    create: [
      'title',
      'description',
      'organizationName',
      'organizationDescription',
      'location',
      'openPositions',
      'experience',
      'type',
      'gender',
      'age',
      'excludedKeywords',
      'responsibilities',
      'duties',
      'tasks',
      'skills',
      'qualification',
      'demands',
      'ctc',
      'base',
      'periodicity',
      'workHours',
      'workHours',
      'allowances',
      'hiringManager',
      'interviewer',
      'onlinePortalsSubscribed',
      'onlinePortalsPremium',
      'onlinePortalsFree',
      'publishingMedia',
      'comments',
      'reportsTo',
      'hireType',
    ],
  },
  validities: {
    signup: ['emailAddress'],
  },
  notifications: {
    create: ['toUser', 'fromName', 'alertMessage', 'environment', 'type'],
  },
  conversations: {
    create: ['recipient', 'message'],
    update: ['recipient', 'message'],
  },
  ratings: {
    create: ['value', 'user'],
  },
  feedbacks: {
    create: ['value', 'user'],
  },
  subscriptions: {
    create: ['name', 'type'],
    remove: ['name'],
  },
  documents: {
    search: ['query'],
  },
};

const devConfig = {
  JWT_SECRET: process.env.JWT_SECRET_DEV,
  MONGO_URL: process.env.MONGO_URL_DEV,
};

const testConfig = {
  JWT_SECRET: 'ewtijwebgiuweg9w98u9283982t!!u1h28h1t1h89u9h@$$',
  MONGO_URL: 'mongodb://localhost/tomshr',
};

const prodConfig = {
  JWT_SECRET: process.env.JWT_SECRET_PROD,
  MONGO_URL: "mongodb://vijay:vijay123@cluster0-shard-00-00-bvm6m.mongodb.net:27017,cluster0-shard-00-01-bvm6m.mongodb.net:27017,cluster0-shard-00-02-bvm6m.mongodb.net:27017/Tabtor?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
  WHITELIST,
};

function envConfig(env) {
  switch (env) {
    case 'sandbox':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

module.exports = {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
 }