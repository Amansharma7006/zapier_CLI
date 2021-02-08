// find a particular searchactivecamp by name
const perform = async (z, bundle) => {
  const response = z.request({
    method: 'GET',
    url: 'https://vkaps8771.api-us1.com/api/3/contacts/'+bundle.inputData.email,
    headers:{
      'Content-Type': 'application/json',
      'Api-Token' : bundle.authData.apiToken
    },

  });
  // this should return an array of objects (but only the first will be used)
  return response
    .then(res => {
      res.throwForStatus();
      const results = res.json;
      z.console.log(results);
      return [results];
    
    })
  // z.console.log("Sonam Gupta bewafa he",response.status);
  // return response.status
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#searchschema
  key: 'search_active_camp',
  noun: 'Searchactivecamp',
  display: {
    label: 'Search Active Campaign',
    description: 'Finds a active campaign based on Email.'
  },
  
  
  operation: {
    perform,

    // `inputFields` defines the fields a user could provide
    // Zapier will pass them in as `bundle.inputData` later. Searches need at least one `inputField`.
    inputFields: [
      {
        key: 'email',
        required: true, 
        helpText: 'Find the Searchactivecamp with this email.'
      }
    ],

    // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
    // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
    // returned records, and have obvious placeholder values that we can show to any user.
    // sample: {
    //   id: 1,
    //   name: 'Test'
    // },
  

    // If fields are custom to each user (like spreadsheet columns), `outputFields` can create human labels
    // For a more complete example of using dynamic fields see
    // https://github.com/zapier/zapier-platform/tree/master/packages/cli#customdynamic-fields
    // Alternatively, a static field definition can be provided, to specify labels for the fields
    outputFields: [
      // these are placeholders to match the example `perform` above
      // {key: 'id', label: 'Person ID'},
      // {key: 'name', label: 'Person Name'}
    ]
  },

};
