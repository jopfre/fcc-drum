import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { playSample, pauseSample, displaySample } from '../actions';

import { bank } from '../bank';

class Drums extends Component {
	constructor(props) {
		super(props);
	  this.handleClick = this.handleClick.bind(this);
	  this.handleKeydown = this.handleKeydown.bind(this);
	  this.getSamplesToPlay = this.getSamplesToPlay.bind(this);
	}
	componentDidMount() {
		document.addEventListener("keydown", this.handleKeydown);
	}
	componentDidUpdate() {
		this.getSamplesToPlay().forEach(key => {
			this.playSample(key);
		});
	}
	getSamplesToPlay(samples = this.props.samples.pads) {
		return Object.keys(samples).filter(function(key) {
			if (samples[key] === 'to play') {
				return true;
			} else {
				return null;
			}
		});		
	}
	playSample(key) {
		const sample = document.getElementById(key);
		sample.currentTime = 0;
		sample.play();
		this.props.displaySample(key);
		this.props.pauseSample(key);
	}

	handleClick(event) {
		this.props.playSample(event.target.textContent);
	}

	handleKeydown(event) {
		if (bank.some(pad => pad.keyCode === event.which)) {
			this.props.playSample(event.key.toUpperCase());
		}
	}

	render() {
		return (
			<div id="drum-machine">
				<div id="display">{this.props.samples.display}</div>
				<div id="drum-pads">
				{ 
					bank.map((button) => {
						return (
								
							<button id={button.id} key={button.keyCode} className="drum-pad" onClick={this.handleClick}>
								{button.keyTrigger}
								<audio id={button.keyTrigger} className="clip" src={button.url}/>
							</button>
						)
					})
				}
				</div>
			</div>
		)
	}
}

Drums.propTypes = {
  playSample: PropTypes.func.isRequired,
  pauseSample: PropTypes.func.isRequired,
  displaySample: PropTypes.func.isRequired,
  samples: PropTypes.object
}

const mapStateToProps = state => ({
  samples: state.samples
});

export default connect(mapStateToProps, { playSample, pauseSample, displaySample })(Drums);