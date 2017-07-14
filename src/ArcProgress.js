import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

class ArcProgress extends Component {
    static propTypes = {
        id: PropTypes.string,
        height: PropTypes.number,
        width: PropTypes.number,
        innerRadius: PropTypes.number,
        outerRadius: PropTypes.number,
        backgroundColor: PropTypes.string,
        foregroundColor: PropTypes.string,
        percentComplete: PropTypes.number
    }

    render() {
        return (
            <div ref="arc" />
        );
    }

    tau = Math.PI * 2;

    arc() {
        return d3.arc()
            .innerRadius(this.props.innerRadius)
            .outerRadius(this.props.outerRadius)
            .startAngle(0);
    }

    componentDidMount() {
        this.drawArc();
    }

    componentDidUpdate() {
        this.redrawArc();
    }

    drawArc() {
        const context = this.setContext();
        this.setBackground(context);
        this.setForeground(context);
    }

    redrawArc() {
        const context = d3.select('#d3-arc');
        context.remove();
        this.drawArc();
    }

    setContext() {
        const { height, width, id } = this.props;
        return d3.select(this.refs.arc).append('svg')
            .attr('height', height)
            .attr('width', width)
            .attr('id', id)
            .append('g')
            .attr('transform', `translate(${height / 2}, ${width / 2})`);
    }

    setBackground(context) {
        return context.append('path')
        .datum({ endAngle: this.tau })
        .style('fill', this.props.backgroundColor)
        .attr('d', this.arc());
    }

    setForeground(context) {
        return context.append('path')
        .datum({ endAngle: this.tau * this.props.percentComplete })
        .style('fill', this.props.foregroundColor)
        .attr('d', this.arc());
    }

}

export default ArcProgress;