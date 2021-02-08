// create a particular customactivecamp by name
const perform = async (z, bundle) => {
  const response = await z.request({
    method: 'GET',
    url: 'https://vkaps8771.api-us1.com/api/3/fields',
    headers:{
      'Content-Type': 'application/json',
      'Api-Token' : bundle.authData.apiToken
    },
    body: {
      "field": {
        "type": "text",
        "title": bundle.inputData.title,
        "descript": bundle.inputData.descript,
        "isrequired": 1,
        "visible": 1,
        "ordernum": 1
        }
    }
  });
  // this should return a single object
  return response.data;
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#createschema
  key: 'custom_active_camp',
  noun: 'Customactivecamp',

  display: {
    label: 'Custom Active Campaign',
    description: 'Creates a new custom active campaign, probably add input field in contact list.'
  },

  operation: {
    perform,

    // `inputFields` defines the fields a user could provide
    // Zapier will pass them in as `bundle.inputData` later. They're optional.
    // End-users will map data into these fields. In general, they should have any fields that the API can accept. Be sure to accurately mark which fields are required!
    inputFields: [
      {
        key: "title",
        label: 'Enter title',
        type: 'string', 
        required: true
      },
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
