var sys = require('sys');
var bs = require('../lib/beanstalk_client');

bs.Debug.activate();
var client = bs.Client.Instance();

client.peek_buried().onSuccess(function(data) {
	sys.puts(sys.inspect(data));
});
