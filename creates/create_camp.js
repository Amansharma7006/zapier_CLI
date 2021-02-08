// create a particular createcamp by name
const perform = async (z, bundle) => {
  const response = await z.request({
    method: 'POST',
    url: 'https://vkaps8771.api-us1.com/api/3/contacts/me.json',
    headers:{
      'Content-Type': 'application/json',
      'Api-Token' : bundle.authData.apiToken
    },

    
    // if `body` is an object, it'll automatically get run through JSON.stringify
    // if you don't want to send JSON, pass a string in your chosen format here instead
    body: {
      // name: bundle.inputData.name
      "contact": {
          "email": bundle.inputData.email,
          "firstName": bundle.inputData.firstName,
          "lastName": bundle.inputData.lastName,
          "phone": bundle.inputData.phone,
    }
  }
  });
  // this should return a single object
  return response.data;
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#createschema
  key: 'create_camp',
  noun: 'Createcamp',

  display: {
    label: 'Create Createcamp',
    description: 'Creates a new createcamp, probably with input from previous steps.'
  },

  operation: {
    perform,

    // `inputFields` defines the fields a user could provide
    // Zapier will pass them in as `bundle.inputData` later. They're optional.
    
    // End-users will map data into these fields. In general, they should have any fields that the API can accept. Be sure to accurately mark which fields are required!
    
    inputFields: [
    {
      key: 'email',
      label: 'Enter Email',
      type: 'string', 
      required: true
    },
    {
      key: 'firstName',
      label: 'Enter First Name',
      type: 'string', 
      required: true
    },
    {
      key: 'lastName',
      label: 'Enter Last Name',
      type: 'string',  
      required: false
    },
    {
      key: 'phone',
      label: 'Enter Phone',
      type: 'integer',  
      required: true
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
  }
};
