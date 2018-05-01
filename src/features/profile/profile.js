import React from 'react'
import { connect } from 'react-redux'
import { Loader } from '../loader'
import { fetchInfo } from './action'

class ProfileRaw extends React.Component {

  componentDidMount() {
    const { fetchInfo, id } = this.props;
    fetchInfo(id);
  }

  render() {
    const { info, isFetching } = this.props;
    return (
      <Loader loading={isFetching}>
        <h1>asdf</h1>
      </Loader>
    )
  }
} 

const mapStateToProps = state => {
  return {
    id: state.login.login.data.id,
    info: state.info.info,
    isFetching: state.info.isFetching
  }
}

export const Profile = connect(mapStateToProps, {fetchInfo})(ProfileRaw)