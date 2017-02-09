import React, { PropTypes } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush, Legend, ResponsiveContainer } from 'recharts';
import {
  HalfWidthBlock,
  BlockTitle,
} from '../Blocks';

const data = [
  { name: 'Jan 2016', needs: 225, wants: 156, amt: 122 },
  { name: 'Feb 2016', needs: 200, wants: 108, amt: 178 },
  { name: 'Mar 2016', needs: 105, wants: 209, amt: 72 },
  { name: 'Apr 2016', needs: 227, wants: 20, amt: 3 },
  { name: 'May 2016', needs: 39, wants: 151, amt: 244 },
  { name: 'Jun 2016', needs: 121, wants: 76, amt: 96 },
  { name: 'Jul 2016', needs: 228, wants: 16, amt: 215 },
  { name: 'Aug 2016', needs: 186, wants: 117, amt: 218 },
  { name: 'Sep 2016', needs: 198, wants: 57, amt: 46 },
  { name: 'Oct 2016', needs: 143, wants: 171, amt: 69 },
  { name: 'Nov 2016', needs: 197, wants: 58, amt: 195 },
  { name: 'Dec 2016', needs: 206, wants: 222, amt: 84 },
];

class CustomizedAxisTick extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { x, y, stroke, payload } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="start" fill="#666" transform="rotate(-35)" fontSize="10px">{payload.value}</text>
      </g>
    );
  }
}

class CustomTooltip extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
  }

  getIntroOfPage(label) {
    if (label === 'Page A') {
      return 'Page A is about men\'s clothing';
    } else if (label === 'Page B') {
      return 'Page B is about women\'s dress';
    } else if (label === 'Page C') {
      return 'Page C is about women\'s bag';
    } else if (label === 'Page D') {
      return 'Page D is about household goods';
    } else if (label === 'Page E') {
      return 'Page E is about food';
    } else if (label === 'Page F') {
      return 'Page F is about baby food';
    }

    return 'what?';
  }

  /*
  .custom-tooltip {
    width: 200px;
      margin: 0;
      line-height: 24px;
      border: 1px solid #f5f5f5;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 10px;
  }
  .custom-tooltip  .label {
    margin: 0;
    color: #666;
    font-weight: 700;
  }
  .custom-tooltip  .desc {
    margin: 0;
    color: #999;
  }
  .custom-tooltip  .intro {
    border-top: 1px solid #f5f5f5;
    margin: 0;
  }
  */

  render() {
    if (this.props.active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${this.props.label} : ${this.props.payload[0].value}`}</p>
          <p className="intro">{this.getIntroOfPage(this.props.label)}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
      } else {
        return ('&nbsp;');
      }
  }
}

export default class ExpensesReport extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HalfWidthBlock>
        <BlockTitle>expenses report</BlockTitle>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart width={600} height={300} data={data} margin={{ top: 0, right: 50, bottom: 50, left: 30 }}>
            <Line type="monotone" dataKey="needs" stroke="#1b551b" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" tick={<CustomizedAxisTick />} padding={{ left: 10, right: 10 }} />
            <YAxis dataKey="needs" />
            <Tooltip />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="wants" stroke="#ff0000" activeDot={{ r: 8 }} />
            <Brush dataKey="name" height={30} stroke="#8884d8" />
            {/* <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '20px' }} /> */}
          </LineChart>
        </ResponsiveContainer>
      </HalfWidthBlock>
    );
  }
}
