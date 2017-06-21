import React, { Component } from "react";
import ReactDOM from "react-dom";
import https from "https";
import ReactHighcharts from "react-highcharts";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			checks: [],
			ignore: [] // Checks to be ingored. Note: check name in lowercase
		}
		this.componentDidMount = this.componentDidMount.bind(this);
		this.request = this.request.bind(this);
		this.set = this.set.bind(this);
	}

	set(d, chks) {
		this.setState({
			data: d,
			checks: chks,
			ignore: this.state.ignore
		})
	}

	request() {
		let data = "";
		let func = this.set;
		https.get('//ec2-34-206-1-57.compute-1.amazonaws.com:8000/', function (response) {
			response.setEncoding('utf8');
			response.on("data", function (d) {
				data += d;
			});

			response.on('end', function () {
				// console.log(data);
				let jobj = JSON.parse(data);
				func(jobj,jobj.checks);
				// let array = [];
				// JSON.parse(data).checks.map(item => { array.push(item.id) })
				// func(array);
			});
		});
	}

	fetcho(item){
		let id = item.id;
		// debugger;
		// console.log(typeof this.state.data[id]);
		// debugger;
		if(this.state.data[id]!=="" && this.state.ignore.indexOf(item.name.toLowerCase())<0 ) {
			let parseJson=(JSON.parse(this.state.data[id]));
			// debugger;
			let data=parseJson.summary.hours;
			let graphData=[];
			let xAixData=[];
			let i=20;
			data.map(item=>{
				graphData.push(item.avgresponse);
				let time=new Date(new Date().getTime()  - (60 * 60*1000) * i);
				xAixData.push(`${time.getHours()}:${time.getMinutes()}`);
				i=i-1;
			});
			console.log(graphData);
			console.log(xAixData);
			let config = {
			  xAxis: {
			    categories: xAixData
			  },

			  yAxis:{
			  	units: [
			  	['millisecond', [100]]
			  	],
			  	title: {
			  		text:"milliseconds"
			  	}
			  },
			  series: [{
			    data: graphData
			  }],
			  chart: {
			    "width": "400",
			    "height": "200"
			  },
			  plotOptions: {
			  	line: {
			  		marker: {
			  			enabled: false
			  		}
			  	}
			  },
			  title:{
			  	text: ""
			  },
			  legend: {
			  	enabled : false
			  } 
			};
			console.log(config)
			return (
				<li className="row">
					<div className="col s4">
						<h6>{item.name.toUpperCase()}</h6>
					</div>
					<div className="col s6">
						<ReactHighcharts config={config} ref={"chart"+id}>{id}</ReactHighcharts>
					</div>
				</li>
				);
		}
		// return (<div></div>);
	}

	componentDidMount() {
		this.request();
		//console.log(this.state.data);

	}

	render() {
		return (
			<div style={{width:"500px", marginLeft:"300px"}}>
				<ul key={this.state.data}>
				{this.state.checks.map(item =>{return (<div key={item.id}> {this.fetcho(item)} </div>)})}

				</ul>
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById("app"));
