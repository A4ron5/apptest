import React from 'react'
import { connect } from 'react-redux'
import { Loader } from '../loader'
import { fetchInfo } from './action'
import { InfoUI } from '../../ui/molecules/info'
import { ErrorProfile } from '../../ui/atoms'
import PropTypes from 'prop-types'

class ProfileRaw extends React.Component {
  
  static propTypes = {
    id: PropTypes.number,
    city: PropTypes.string,
    languages: PropTypes.array,
    social: PropTypes.array,
    isFetching: PropTypes.bool
  }

  componentDidMount() {
    const { fetchInfo, id } = this.props;
    fetchInfo(id);
  }

  render() {
    const { isFetching, err, message } = this.props;
    return (
      <Loader loading={isFetching}>
        { err ? <ErrorProfile msg={message}/> : <InfoUI { ...this.props}/> }
      </Loader>
    )
  }
} 

const mapStateToProps = state => {
  const social = state.info.data.social.sort((a,b) => b.label === 'web' ? 1 : 0);
  return {
    id: state.login.data.id,
    city: state.info.data.city,
    languages: state.info.data.languages,
    social: social,
    isFetching: state.info.isFetching,
    err: state.info.err,
    message: state.info.message
  }
}

export const Profile = connect(mapStateToProps, {fetchInfo})(ProfileRaw)