import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush, Legend, ResponsiveContainer } from 'recharts';
import {
  HalfWidthBlock,
  BlockTitle,
} from '../Blocks';

const genDatesArray = () => {
  const startDate = new Date(2016, 1, 1);
  const endDate = new Date(2016, 3, 1);
  const mil = 86400000;
  const MIN = 0;
  const MAX = 500;
  const result = [];
  for (let i = startDate.getTime(); i < endDate.getTime(); i += mil) {
    result.push(
      {
        date: new Date(i),
        needs: Math.floor (Math.random() * (MAX - MIN)) + MIN,
        wants: Math.floor (Math.random() * (MAX - MIN)) + MIN
      }

    );
  }
  return result;
}

class CustomizedAxisTick extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { x, y, stroke, payload } = this.props;
    // console.log(payload);
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="start" fill="#666" transform="rotate(-35)" fontSize="8px">{payload.value}</text>
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

const LineChartStyled = styled(LineChart)`
  display: flex;
  flex-direction: row;

  /*background-color: yellow;*/
`;

export default class ExpensesReport extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const d = genDatesArray();
    return (
      <HalfWidthBlock>
        <BlockTitle>expenses report</BlockTitle>
        <ResponsiveContainer width="100%" height={400}>
          <LineChartStyled width={600} height={300} data={d} margin={{ top: 0, right: 50, bottom: 50, left: 30 }}>
            <Line type="monotone" dataKey="needs" stroke="#1b551b" />
            <CartesianGrid stroke="rgba(213, 213, 213, 0.5)" strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={<CustomizedAxisTick />} padding={{ left: 10, right: 10 }} />
            <YAxis dataKey="needs" />
            <Tooltip />
            {/* <Tooltip content={<CustomTooltip />} /> */}
            <Line type="monotone" dataKey="wants" stroke="#ff0000" activeDot={{ r: 8 }} />
            <Brush
              dataKey="date"
              width={400}
              height={30}
              stroke="#8884d8"
              data={d}
              startIndex={10}
              endIndex={d.length - 10}
              x={100}
              y={50}
            />
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '20px' }} height={36} />
          </LineChartStyled>
        </ResponsiveContainer>
      </HalfWidthBlock>
    );
  }
}

// export default class ExpensesReport extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
//
//   constructor (props) {
//     super(props);
//   }
//
//   state = {
//     data: this.genDatesArray(),
//   }
//
//   formatDate(d) {
//     let dd = d.getDate();
//     if (dd < 10) dd = '0' + dd;
//
//     let mm = d.getMonth()+1;
//     if (mm < 10) mm = '0' + mm;
//
//     let yy = d.getFullYear() % 100;
//     if (yy < 10) yy = '0' + yy;
//
//     return `${yy}-${mm}-${dd}`;
//   }
//
//   genDatesArray() {
//     const startDate = new Date(2016, 1, 1);
//     const endDate = new Date(2016, 2, 1);
//     const mil = 86400000;
//     const MIN = 0;
//     const MAX = 500;
//     const result = [];
//     for (let i = startDate.getTime(); i < endDate.getTime(); i += mil) {
//       result.push(
//         {
//           // date: this.formatDate(new Date(i)),
//           date: new Date(i),
//           needs: Math.floor(Math.random() * (MAX - MIN)) + MIN,
//           wants: Math.floor(Math.random() * (MAX - MIN)) + MIN,
//         }
//
//       );
//     }
//     console.log(result);
//     return result;
//   }
//
//   handleZoom(domain) {
//     // console.log('handleZoom:', domain);
//     this.setState({ selectedDomain: domain });
//   }
//
//   handleBrush(domain) {
//     // console.log('handleBrush:', domain);
//     this.setState({ zoomDomain: domain });
//   }
//
//   render() {
//     return (
//       <HalfWidthBlock>
//         <LineChart />
//         {/* <BlockTitle>expenses report</BlockTitle>
//           <VictoryChart
//           scale={{x: 'time', y: 'linear'}}
//           data={this.state.data}
//           x="date"
//           y="wants"
//           theme={VictoryTheme.material}
//           domainPadding={20}
//           animate={{
//             duration: 2000,
//             onLoad: {
//               duration: 1000
//             },
//             onEnter: {
//               duration: 250,
//               before: () => (
//                 {y: 0}
//               )
//             }
//           }}
//           containerComponent={
//             <VictoryZoomContainer
//               responsive={true}
//               zoomDomain={this.state.zoomDomain}
//               onDomainChange={this.handleZoom.bind(this)}
//               data={this.state.data}
//             />
//           }
//           >
//           <VictoryLine
//             scale={{ x: 'time', y: 'linear' }}
//             data={this.state.data}
//             x="date"
//             y="wants"
//             style={{
//               data: {
//                   opacity: 0.17,
//                   stroke: 'red',
//                   strokeWidth: 3,
//               },
//               labels: {
//                   fontSize: 10,
//               },
//                 padding: 0,
//                 standalone: true,
//                 label: 'wants',
//             }}
//           />
//         </VictoryChart> */}
//       </HalfWidthBlock>
//     );
//   }
// }
