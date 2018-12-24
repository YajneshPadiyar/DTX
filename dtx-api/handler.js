const connectToDatabase = require('./db');
const Contact = require('./models/Contact');
require('dotenv').config({ path: './variables.env' });

module.exports.updateContactById = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Contact.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
        .then(contact => callback(null, {
          statusCode: 200,
          body: JSON.stringify(contact)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the contact.'
        }));
    });
};

module.exports.deleteContactById = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Contact.findByIdAndRemove(event.pathParameters.id)
        .then(contact => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: 'Removed contact with id: ' + contact._id, contact: contact })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the contact.'
        }));
    });
};

module.exports.createContact = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Contact.create(JSON.parse(event.body))
        .then(contact => callback(null, {
          statusCode: 200,
          body: JSON.stringify(contact)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the contact.' + err
        }));
    });
};

module.exports.createContacts = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    connectToDatabase()
        .then(() => {
            let inputData = JSON.parse(event.body);
            for(i = 0 ; i < inputData.length ; i++){
                Contact.create(inputData[i])
                    .then(contact => callback(null, {
                        statusCode: 200,
                        body: JSON.stringify(contact)
                    }))
                    .catch(err => callback(null, {
                        statusCode: err.statusCode || 500,
                        headers: { 'Content-Type': 'text/plain' },
                        body: 'Could not create the contact.' + err
                    }));
            }

        });
};

module.exports.getContactByName = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Contact.find({'name':event.pathParameters.name})
        .then(organisation => callback(null, {
          statusCode: 200,
          body: JSON.stringify(contact)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the contact.'
        }));
    });
};

module.exports.getContactById = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Contact.findById(event.pathParameters.id)
        .then(contact => callback(null, {
          statusCode: 200,
          body: JSON.stringify(contact)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the contact.'
        }));
    });
};

module.exports.getContacts = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    connectToDatabase()
        .then(() => {
            Contact.find()
                .then(function(contacts){
                    let contactsString = JSON.stringify(contacts);
                    let updatedContactsString = contactsString.replace(/_id/g,"id");
                    callback(null, {
                        statusCode: 200,
                        body: updatedContactsString
                    })

                } )
                .catch(err => callback(null, {
                    statusCode: err.statusCode || 500,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not fetch the contacts.'
                }))
        });
};