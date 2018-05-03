import React from 'react'
import { connect } from 'react-redux'
import { Loader } from '../loader'
import { fetchInfo } from './action'
import { InfoUI } from '../../ui/molecules/info'

class ProfileRaw extends React.Component {

  componentDidMount() {
    const { fetchInfo, id } = this.props;
    fetchInfo(id);
  }

  render() {
    const { info, isFetching } = this.props;
    return (
      <Loader loading={isFetching}>
        <InfoUI {...info}/>
      </Loader>
    )
  }
} 

const mapStateToProps = state => {
  return {
    id: state.login.login.data.id,
    info: state.info.info.data,
    isFetching: state.info.isFetching
  }
}

export const Profile = connect(mapStateToProps, {fetchInfo})(ProfileRaw)