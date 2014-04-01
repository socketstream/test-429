// Server-side Code

// Define actions which can be called from the client using ss.rpc('demo.ACTIONNAME', param1, param2...)
exports.actions = function(req, res, ss) {

  // Example of pre-loading sessions into req.session using internal middleware
  req.use('session');

  // Uncomment line below to use the middleware defined in server/middleware/example
  //req.use('example.authenticated')

  return {

    subscribeToChannel: function (channel) {
      if (channel && channel.length > 0) {         // Check for blank channel
        req.session.channel.subscribe(channel);
        return res(true);                          // Confirm it was sent to the originating client
      } else {
        return res(false);
      }
    },

    publishMessage: function (channel, event, data) {
      if (channel && channel.length > 0 && event && event.length > 0) { // Check for blank channel and event
        ss.publish.channel(channel,event, data);
        return res(true);                          // Confirm it was sent to the originating client
      } else {
        return res(false);
      }
    }

  };

};