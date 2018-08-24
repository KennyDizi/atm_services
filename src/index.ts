// RxJS v6+
import { timer, Operator } from 'rxjs';
import {Moment} from 'moment';

/*
  timer takes a second argument, how often to emit subsequent values
  in this case we will emit first value after 1 second and subsequent
  values every 2 seconds after
*/
const source = timer(1000, 2000);
//output: 0,1,2,3,4,5......
source.subscribe(val => 
  console.log(`Ahihi Next index: ${val}`)
);

/*** loading mosca server ***/

import {Server, persistence} from 'mosca';

/*###########################*/

/*** database settings for mongodb***/
//https://github.com/mcollina/mosca/issues/742
var mongoDbUrl = "mongodb://localhost:27017/atms";

var dbSettings = {
  type: 'mongo', // it can be mongo / redis
  url: mongoDbUrl, //default is localhost:27017,btcexsg is the db name
  pubsubCollection: 'mosca', //default collection name is pubsub.I prefer naming mosca
  mongo: { }, // if any mongo specific options needed. I don't have any
  //remote vm
  
  capped : false, 
  size : 409600
}

//524288 = 512M
//409600 = 400M
/*##########################*/

/**** server settings ****/

//var SECURE_KEY = __dirname + '../JSTech/secure/tls-key.pem';
//var SECURE_CERT = __dirname + '../JSTech/secure/tls-cert.pem';

var serverSettings = {
port: 1883, // default port is 1883 for mqtt

//======== use these options for mqtts =======//
/*
secure : {
   port: 8884               //provide secure port if any (default 8883 ssl) 
 keyPath: {your keypath}, //path of .pem file
   certPath: {your certpath} //path of .pem file
}
 */
//============= end =================//

/*
 - this option will create a http server with mqtt attached. 
   - `port`   (optional)   the http port to listen. default 3000
   - `bundle` (optional)   if set to true then mqtt.js file will be served,so 
                           no need to download it.default is false.
   - `static` (optional)   provide your static files path.
  ** to access the mqtt.js or your static files put {yourhost}:{port}/staticfilename
 */
http: {
  port: 3000,
  bundle: true,
  static: './public'
},

//======== use these options for https =======//
/*
credentials: {
keyPath: {your keypath}, //path of .pem file
   certPath: {your certpath} //path of .pem file
},*/
/* https:{
port : 3030, //(optional default 3001)
bundle : true,
static : ‘/’, 
},*/
//============= end =================//

/*
 - this option will create a session over subscription and packets
   - `factory`       the persistence factory you want to choose from Mongo,Redis,LevelUp,Memory
   - `url`           the url of your persistence db
   - `ttl`(optional) the expiration of session
      - `subscriptions`  time period for subscriptions in ms (default 1 hour)
      - `packets`        time period for packets ini ms (default 1 hour)
   - `mongo`         the mongo specific options if any otherwise null object
   ** this module is specially used for retain messages
 */
persistence: {
  factory: persistence.Mongo,
  url: mongoDbUrl,
  ttl: {
    subscriptions: 60 * 60 * 1000,
    packets: 60 * 60 * 1000,
  },
  mongo: {}
  },
  logger: {
    level: 'debug'
  },
  stats: false, //(optional) if set to true mosca keep informing about the server status
  //           on every 10s (default false) 
  // publish stats in the $SYS/<id> topicspace
  backend: dbSettings
}

/*#########################*/

/** creating the mqtt server **/

var server = new Server(serverSettings);

/****** event listeners *********/

// fired when client is connected
server.on('clientConnected', function(h, mqttClient) {
  console.log("Client connected with id", mqttClient.id, "\n");
});

// fired when a message is received
server.on('published', function(packet, mqttClient) {
  if(mqttClient != undefined)
    {       
      try 
      {
        var data = packet.payload.toString("utf-8");
        var value = JSON.parse(data);

        if(value.messageType % 2 == 0)
        {
          //var sendTime = Moment().format('MMMM Do YYYY, h:mm:ss a');
          console.log("Message sent to client : \n", value);          
          //console.log("at: ", sendTime);
        }
        else
        {
          console.log("Message received from: " + mqttClient.id + " packet : \n", value);

          //process message here
        }
      }
      catch (error)
      {
        console.log(error.message);
      }
    }
});

//fired when client subscribed a topic
server.on('subscribed', function(topic, mqttClient) {
  console.log("client", mqttClient.id, "subscribed topic", topic, "\n")
});

//fired when client unsubscribed a topic
server.on('unsubscribed', function(topic, mqttClient) {
  console.log("client", mqttClient.id, "unsubscribed topic", topic, "\n")
});

//fired when client disconnected
server.on('clientDisconnected', function(h, mqttClient) {
  console.log("client", mqttClient.id, "clientDisconnected", "\n")
});

server.on('ready', setup);

function setup() {
  console.log('BTC Exchange server is running');
  console.log(server);
  
  /*
  server.authenticate       = authorizer.authenticate;
  server.authorizePublish   = authorizer.authorizePublish;
  server.authorizeSubscribe = authorizer.authorizeSubscribe;
  */

  /*
  timer takes a second argument, how often to emit subsequent values
  in this case we will emit first value after 1 minute and subsequent
  values every 2 minutes after
  */
 
  /*
  const source = timer(3000, 20000);//fast test
  //const source = timer(60000, 120000);
  source.subscribe(val =>
    {
      console.log(val);

      var mqttClients = server.clients;
      var mqttClient;
      for(mqttClient in mqttClients)
      {
        if(!mqttClient) return;
        console.log(`\n mqtt client: ${mqttClient}`);
        var retain = true;
        var qos = 1;
        console.log(`\n topic: ${mqttClient}, qos: ${qos}, retain: ${retain}`);

        var reactor = new locationStatusReactor(mqttClient, retain, qos);
        reactor.processMessage(server);
      }      
    }
  );
  */
}
