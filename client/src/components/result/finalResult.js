import React, { Component } from "react";
import {Icon, Table} from 'semantic-ui-react';

import { getTimeTable } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import timeTable from '../../reducers/timeTable'

class TimeTable extends Component {
  componentDidMount() {
    this.props.getTimeTable(1);
  } 

  renderPeriods(periods) {
    let tableCells = periods.map(period => <Table.Cell key={period.id}><b>{period.subject}</b></Table.Cell>);
    return tableCells;
  }

  render() {
    if (!this.props.timeTable.length) return (<div></div>);

    return (
      <Table celled structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan='2'>Day/Time</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Period-1<br/>8:30-9:30 am</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Period-2<br/>9:35-10:35 am</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Period-3<br/>10:40-11:40 am</Table.HeaderCell>
          <Table.HeaderCell rowSpan='5'></Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Period-4<br/>8:30-9:30 am</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Period-5<br/>9:35-10:35 am</Table.HeaderCell>
          <Table.HeaderCell rowSpan='2'>Period-6<br/>10:40-11:40 am</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>

        <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell  rowSpan='6' ><div className='vertical_text'>Lunch Break (11:40 - 12:40 pm)</div> </Table.Cell>
          <Table.Cell></Table.Cell>
          <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Monday</Table.Cell>
          {this.renderPeriods(this.props.timeTable.filter(e => e.day == 1))}
        </Table.Row>
        <Table.Row>
          <Table.Cell>Tuesday</Table.Cell>
          {this.renderPeriods(this.props.timeTable.filter(e => e.day == 2))}
        </Table.Row>
        <Table.Row>
          <Table.Cell>Wednesday</Table.Cell>
          {this.renderPeriods(this.props.timeTable.filter(e => e.day == 3))}
        </Table.Row>
        <Table.Row>
          <Table.Cell>Thursday</Table.Cell>
          {this.renderPeriods(this.props.timeTable.filter(e => e.day == 4))}
        </Table.Row>
        <Table.Row>
          <Table.Cell>Friday</Table.Cell>
          {this.renderPeriods(this.props.timeTable.filter(e => e.day == 5))}
        </Table.Row>
      </Table.Body>
    </Table>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTimeTable }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeTable);