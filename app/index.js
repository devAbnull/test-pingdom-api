import React, { Component } from "react";
import ReactDOM from "react-dom";
import Request from "react-http-request";
import https from "https";
const request = require('superagent');
// var curl = require('curlrequest');
// var browser = require('browser-js')
class Main extends Component {
	componentDidMount(){
		// let url="https://api.pingdom.com/api/2.0/checks";
		// let username='siddharth@appbase.io';
		// let password='pkPQ2m19RqhG';
		// return fetch(url,{
		// 	method:'get',
		// 	credentials: 'include',
		// 	headers: {
		// 		"authorization": "Basic " + btoa(username + ":" + password),
		// 		"app-key":"xq21z5kyhvb34bwfozfn5kiv18adoghe"
		// 	}

		// }).then((response) => console.log(response))
	}

	render() {
		function make_base_auth(user, password) {
		    var tok = user + ':' + password;
		    var hash = btoa(tok);
		    return 'Basic ' + hash;
		}
		// console.log(btoa('siddharth@appbase.io:pkPQ2m19RqhG'));
		let username='siddharth@appbase.io';
		let password='pkPQ2m19RqhG';
		let url="https://api.pingdom.com/api/2.0/checks";
		// var xhttp = new XMLHttpRequest();
		// xhttp.open("GET", "https://api.pingdom.com/api/2.0/checks", true);
		// xhttp.withCredentials = true;
		// xhttp.setRequestHeader('Authorization', 'Basic '+ btoa('siddharth@appbase.io:pkPQ2m19RqhG'));
		// xhttp.setRequestHeader('App-Key', 'xq21z5kyhvb34bwfozfn5kiv18adoghe');
		// // xhttp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
		// xhttp.send();
		// options = {
		// 	url:url,
		// 	method: 'get'
		// }
		// curl.request(options, );
		// $.ajax({
		//   type: 'get',
		//   crossDomain: true,
		//   dataType: "json",
		//   username: username,
		//   password: password,
		//   contentType: "application/json",
		//   beforeSend: function(xhr){
		//     xhr.setRequestHeader('Authorization', "Basic " + btoa(username + ":" + password));
		//     xhr.setRequestHeader('App-Key', 'xq21z5kyhvb34bwfozfn5kiv18adoghe');
		//   },
		//   url: "https://api.pingdom.com/api/2.0/checks",
		//   success: function(Data) {
		//     console.log(Data);
		//   },
		//     error: function(Data) { 
		//   }
		// });
		// var options = {
		// 	    uri: "https://api.pingdom.com/api/2.0/checks",
			    
		// 	    headers: {
		// 	        "app-key":"xq21z5kyhvb34bwfozfn5kiv18adoghe",
		// 	        "Authorization": "Basic " + btoa(username + ":" + password)
		// 	    },
		// 	    json: true
		// 	}
		// 	rp(options).then(function (repos) {
		//         console.log('User has %d repos', repos.length);
		//     })
		//     .catch(function (err) {
		//         // API call failed... 
		//     });


		const options = {
		  host: 'api.pingdom.com',
		  method: 'GET',
		  path : '/api/2.0/checks',
		  // agent: 'curl/7.47.0',
		    headers: {
		     'Authorization': 'Basic ' + new Buffer('siddharth@appbase.io' + ':' + 'pkPQ2m19RqhG').toString('base64'),
		     'App-Key': '1i5xgl26ovy8t2hur11ke6whoapgwocf',
		   }
		};

		https.get(options,function(response){
		    response.setEncoding('utf8');
		    response.on("data",function(data){
		        console.log(data);
		    });
		});

		// request
		// .get("https://api.pingdom.com/api/2.0/checks")
		// // .withCredentials()
		// .auth(username, password)
		// .set('Authorization', 'Basic ' + new Buffer('siddharth@appbase.io' + ':' + 'pkPQ2m19RqhG').toString('base64'))
		// .set('API-Key', 'xq21z5kyhvb34bwfozfn5kiv18adoghe')
		// // .set('User-Agent', 'curl/7.47.0')
		// .then(options,function(response){
		// 	// response.setHeader('Access-Control-Allow-Origin', '*');
		// 	// response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DETELE');
		// 	// response.setHeader('Access-Control-Allow-Headers', '*');
		//     // response.setEncoding('utf8');
		//     // response.on("data",function(data){
		//         console.log(response);
		//     // });
		// });

		return (
			
			<div>
				{/*<Request
					url="https://api.pingdom.com/api/2.0/checks"
					method="get"
					accept="application/json"
					auth={{"user":"siddharth@appbase.io","pass":password}}
					headers={{
						// "Authorization": "Basic " + btoa(username + ":" + password),
						"app-key":"xq21z5kyhvb34bwfozfn5kiv18adoghe"
						// 'Account-Email':'siddharth@appbase.io',
					}}
					// withCredentials={true}
					verbose={true}
				>
				{
				({ error, result, loading }) => {
					return (<div>{result}</div>)

					}
				}
				</Request>*/}
				<div>hurah!</div>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById("app"));
