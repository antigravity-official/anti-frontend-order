import { Fragment } from 'react';

type ProgressProps = {
  isVisible: boolean
}

function Progress({ isVisible=false } : ProgressProps) {
  return (
    <Fragment>
      {isVisible && <div>Loading...</div>}
    </Fragment>
  )
}

export default Progress;
