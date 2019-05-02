// @flow
import * as React from 'react'
import Banner, {getHeight} from './index'
import * as FsGen from '../../../actions/fs-gen'
import {isMobile, namedConnect} from '../../../util/container'
import * as RowTypes from '../../row/types'
import * as Types from '../../../constants/types/fs'

type OwnProps = {|
  bannerType: Types.MainBannerType,
|}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  // TODO: do we need a real path?
  onRetry: () => dispatch(FsGen.createLoadPathMetadata({path: Types.stringToPath('/keybase/')})),
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  bannerType: ownProps.bannerType,
  onRetry: dispatchProps.onRetry,
})

const ConnectedBanner = namedConnect<OwnProps, _, _, _, _>(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  'MainBanner'
)(Banner)

export default ConnectedBanner

export const asRows = !isMobile
  ? (bannerType: Types.MainBannerType): Array<RowTypes.HeaderRowItem> => []
  : (bannerType: Types.MainBannerType): Array<RowTypes.HeaderRowItem> => [
      {
        height: getHeight(bannerType),
        key: 'main-banner',
        node: <ConnectedBanner bannerType={bannerType} />,
        rowType: 'header',
      },
    ]
