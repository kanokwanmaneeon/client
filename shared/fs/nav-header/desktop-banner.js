// @flow
import * as React from 'react'
import * as Constants from '../../constants/fs'
import * as Types from '../../constants/types/fs'
import {namedConnect} from '../../util/container'
import MainBanner from '../banner/main-banner/container'

type Props = {|
  bannerType: Types.MainBannerType,
|}

const _DesktopBanner = (props: Props) => <MainBanner bannerType={props.bannerType} />

type OwnProps = {||}

const mapStateToProps = state => ({
  _kbfsDaemonStatus: state.fs.kbfsDaemonStatus,
  _overallSyncStatus: null,
})
const mapDispatchToProps = dispatch => ({})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  bannerType: Constants.getMainBannerType(stateProps._kbfsDaemonStatus, stateProps._overallSyncStatus),
})

const ConnectedBanner = namedConnect<OwnProps, _, _, _, _>(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  'DesktopBanner'
)(_DesktopBanner)

export default ConnectedBanner
