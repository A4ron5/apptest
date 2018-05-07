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
    const { isFetching } = this.props;
    return (
      <Loader loading={isFetching}>
        <InfoUI { ...this.props}/>
      </Loader>
    )
  }
} 

const mapStateToProps = state => {
  const social = state.info.data.social.sort((a,b) => b.label === 'web' ? 1 : 0);
  return {
    id: state.login.data.data.id,
    city: state.info.data.city,
    languages: state.info.data.languages,
    social: social,
    isFetching: state.info.isFetching,
  }
}

export const Profile = connect(mapStateToProps, {fetchInfo})(ProfileRaw)