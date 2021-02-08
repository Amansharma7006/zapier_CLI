// triggers on a new get_customer_list with a certain tag
// const createCamp = require("./creates/update_active_camp");
// const CreateCamp = require("../creates/create_camp");
const perform = async (z, bundle) => {
  const response =  z.request({
    method: 'GET',
    url: 'https://vkaps8771.api-us1.com/api/3/contacts',
    headers:{
      'Content-Type': 'application/json',
      'Api-Token' : bundle.authData.apiToken
    },
  });
  // this should return an array of objects
  // z.console.log("Ankit => ",response);
  return response
    .then(res => {
      res.throwForStatus();
      const results = res.json.contacts;
      z.console.log(results);
      return results;
    })
};

module.exports = {
  // see here for a full list of available properties:  
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#triggerschema
  key: 'get_customer_list',
  noun: 'Get_customer_list',

  display: {
    label: 'Contact List',
    description: 'Display Contacts Lists .'
  },

  operation: {
    perform,

    // `inputFields` defines the fields a user could provide
    // Zapier will pass them in as `bundle.inputData` later. They're optional.
    inputFields: [
      // {
      //   key: 'email', 
      //   label: 'email',     
      //   required: true,
      //   dynamic: 'get_customer_list.id.email',
      // },

     
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
  }
};
