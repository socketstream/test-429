'use strict';



// Subscribe to channel if running on port 3001
//
if (document.location.origin.match(3001) !== null) {
    ss.rpc('pubsubissue.subscribeToChannel', 'arbChannel');
}


// Log out any messages on that channel
//
ss.event.on('arbs:update', function (message, channelName) {
    console.log(channelName, 'received this data:', message);
});



setInterval(function() {
    ss.rpc('pubsubissue.publishMessage', 'arbs:update', 'hello world');
}, 5000);