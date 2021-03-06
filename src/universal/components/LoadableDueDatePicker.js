import * as React from 'react'
import {
  DEFAULT_MENU_HEIGHT,
  DEFAULT_MENU_WIDTH,
  HUMAN_ADDICTION_THRESH,
  MAX_WAIT_TIME
} from 'universal/styles/ui'
import Loadable from 'react-loadable'
import LoadableLoading from 'universal/components/LoadableLoading'

const LoadableDueDatePicker = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'DueDatePicker' */
      'universal/components/DueDatePicker'),
  loading: (props) => (
    <LoadableLoading {...props} height={DEFAULT_MENU_HEIGHT} width={DEFAULT_MENU_WIDTH} />
  ),
  delay: HUMAN_ADDICTION_THRESH,
  timeout: MAX_WAIT_TIME
})

export default LoadableDueDatePicker
