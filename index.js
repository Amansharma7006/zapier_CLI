const {
  config: authentication,
  befores = [],
  afters = [],
} = require('./authentication');

const createCreateCamp = require("./creates/create_camp");

const createUpdateActiveCamp = require("./creates/update_active_camp");

const findSearchActiveCamp = require("./searches/search_active_camp");

const createCustomActiveCamp = require("./creates/custom_active_camp");

const getGetCustomerList = require("./triggers/get_customer_list");

const includeApiToken = (request, z, bundle)=> {
  if(bundle.authData.apiToken){
    request.params = request.params || {};
    request.headers.Authorization = bundle.authData.apiToken; 
  }
  return request;
};

module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication,

  beforeRequest: [includeApiToken],

  afterResponse: [includeApiToken],

  // If you want your trigger to show up, you better include it here!
  triggers: {
    [getGetCustomerList.key]: getGetCustomerList
  },

  // If you want your searches to show up, you better include it here!
  searches: {
    [findSearchActiveCamp.key]: findSearchActiveCamp
  },

  // If you want your creates to show up, you better include it here!
  creates: {
    [createCreateCamp.key]: createCreateCamp,
    [createUpdateActiveCamp.key]: createUpdateActiveCamp,
    [createCustomActiveCamp.key]: createCustomActiveCamp
  },

  resources: {},
};
