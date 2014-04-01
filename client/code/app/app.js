// Subscribe to channel
//
ss.rpc('pubsubissue.subscribeToChannel', 'arbChannel', console.log);



// Log out any messages on that channel
//
ss.event.on('arbs:update', function (message, channelName) {
  console.log(channelName, 'received this data:', message);
});



setTimeout(function() {
  ss.rpc('pubsubissue.publishMessage', 'arbs:update', 'hello world', console.log);
}, 10000);