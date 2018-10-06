//This is the client side information


// var Parse = {

//   server: `http://127.0.0.1:3000`,

//   create: function(message, successCB, errorCB = null) {

//     $.ajax({
//       url: 'http://127.0.0.1:3000/classes/messages',
//       type: 'POST',
//       data: JSON.stringify(message),
//       contentType: 'text/plain',
//       success: successCB,
//       error: errorCB || function (error) {
//         console.error('chatterbox: Failed to create message', error);
//       }
//     });
//       },

//   readAll: function(successCB, errorCB = null) {
//     $.ajax({
//       url: 'http://127.0.0.1:3000/classes/messages',
//       type: 'GET',
//       data: { order: '-createdAt' },
//       contentType: 'application/json',
//       success: successCB,
//       error: errorCB || function(error) {
//         console.error('chatterbox: Failed to fetch messages', error);
//       }
//     });
//   }

// };

//Attribute was preventing us from clicking submit due to spinner, so we changed it
//from 'disabled' to 'enable'
  // setStatus: function(active) {
  //   var status = active ? 'true' : null;
  //   FormView.$form.find('input[type=submit]').attr('enable', status);
  // }