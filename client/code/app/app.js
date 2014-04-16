'use strict';



// Subscribe to channel if running on port 3001
//
if (document.location.origin.match(3001) !== null) {
    ss.rpc('pubsubissue.subscribeToChannel', 'arbChannel');

    setInterval(function() {
        ss.rpc('pubsubissue.publishMessage', 'arbChannel',  'arbs', 'hello world');
    }, 5000);
}



// Log out any messages on that channel
//
ss.event.on('arbs', function (message, channelName) {
    console.log(channelName, 'received this data:', message);
});