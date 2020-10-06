import React, { useState, ComponentProps } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const dataMock = [
    { title: 'Presale', value: 30, color: '#E38627' },
    { title: 'Liq', value: 15, color: '#C13C37' },
    { title: 'Team', value: 11, color: '#6A2135' },
    { title: 'Staking', value: 30, color: '#6A2135' },
    { title: 'Marketing', value: 13, color: '#6A2135' }
  ];
  
function FullOption(props) {
  const [selected, setSelected] = useState(undefined);
  const [hovered, setHovered] = useState(undefined);

  const data = dataMock.map((entry, i) => {
    if (hovered === i) {
      return {
        ...entry,
        color: 'grey',
      };
    }
    return entry;
  });

  const lineWidth = 60;

  return (
    <PieChart
      style={{
        fontFamily:
          '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
        fontSize: '8px',
      }}
      viewBoxSize={[350,200]}
      data={data}
      radius={PieChart.defaultProps.radius - 6}
      lineWidth={60}
      segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
      segmentsShift={(index) => (index === selected ? 6 : 1)}
      animate
      label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
      labelPosition={100 - lineWidth / 2}
      labelStyle={{
        fill: 'black',
        opacity: 0.75,
        pointerEvents: 'none',
      }}
      onClick={(_, index) => {
        setSelected(index === selected ? undefined : index);
      }}
      onMouseOver={(_, index) => {
        setHovered(index);
      }}
      onMouseOut={() => {
        setHovered(undefined);
      }}
    />
  );
}

export default FullOption;