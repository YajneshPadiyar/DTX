const connectToDatabase = require('./db');
const Note = require('./models/Note');
const Organisation = require('./models/Organisation');
require('dotenv').config({ path: './variables.env' });

module.exports.updateOrganisationById = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Organisation.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
        .then(organisation => callback(null, {
          statusCode: 200,
          body: JSON.stringify(organisation)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the Organisations.'
        }));
    });
};

module.exports.deleteOrganizationById = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Organisation.findByIdAndRemove(event.pathParameters.id)
        .then(organisation => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: 'Removed organisation with id: ' + organisation._id, organisation: organisation })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the organisation.'
        }));
    });
};

module.exports.createOrganisation = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Organisation.create(JSON.parse(event.body))
        .then(organisation => callback(null, {
          statusCode: 200,
          body: JSON.stringify(organisation)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the organisation.' + err
        }));
    });
};

module.exports.getOrganisationByName = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Organisation.find({'name':event.pathParameters.name})
        .then(organisation => callback(null, {
          statusCode: 200,
          body: JSON.stringify(organisation)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the organisation.'
        }));
    });
};

module.exports.getOrganisationById = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Organisation.findById(event.pathParameters.id)
        .then(organisation => callback(null, {
          statusCode: 200,
          body: JSON.stringify(organisation)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the organisation.'
        }));
    });
};

module.exports.getAllOrganisations = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Organisation.find()
        .then(organisations => callback(null, {
          statusCode: 200,
          body: JSON.stringify(organisations)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the organisations.'
        }))
    });
};
