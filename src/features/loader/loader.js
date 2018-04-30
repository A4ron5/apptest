import React, {Fragment} from 'react'
import { LoaderUI } from '../../ui/molecules'

export const Loader = (props) => {
  return (
    <Fragment>
      {
        props.loading ? <LoaderUI/> : props.children
      }
    </Fragment>
  )
}