import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import TimeTable from '../components/timeTable/timeTable';
import TimeTableUpdate from '../components/timeTable/timeTableUpdate';

class TimeTableScreen extends Component {
  render() {
    return (
      
        <TimeTableUpdate />
      
    );
  };
}

export default TimeTableScreen;