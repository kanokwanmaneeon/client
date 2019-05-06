// @flow
import * as React from 'react'
import * as Types from '../../constants/types/fs'
import * as Constants from '../../constants/fs'
import * as Styles from '../../styles'
import {rowStyles} from './common'
import * as Kb from '../../common-adapters'
import {FilenameText, PathItemIcon} from '../common'

type UploadingProps = {
  path: Types.Path,
  type: Types.PathType,
  errorRetry?: ?() => void,
  writingToJournal: boolean,
  syncing: boolean,
}

const getStatusText = ({writingToJournal, syncing}: UploadingProps): string => {
  if (writingToJournal && syncing) {
    return 'Encrypting & Uploading'
  }
  if (writingToJournal) {
    return 'Encrypting'
  }
  if (syncing) {
    return 'Uploading'
  }
  return 'Done'
}

const Uploading = (props: UploadingProps) => (
  <Kb.ListItem2
    type="Small"
    firstItem={true /* we add divider in Rows */}
    icon={
      <PathItemIcon
        path={props.path}
        size={32}
        style={Styles.collapseStyles([rowStyles.pathItemIcon, styles.opacity30])}
        badge="upload"
      />
    }
    body={
      <Kb.Box key="main" style={rowStyles.itemBox}>
        <FilenameText
          path={props.path}
          type={Constants.pathTypeToTextType(props.type)}
          style={Styles.collapseStyles([
            rowStyles.rowText_30,
            {color: Constants.getPathTextColor(props.path)},
          ])}
        />
        {props.errorRetry ? (
          <Kb.Text type="BodySmall" style={styles.textFailed}>
            Upload has failed.{' '}
            <Kb.Text type="BodySmall" onClick={props.errorRetry} underline={true} style={styles.textFailed}>
              Retry
            </Kb.Text>
          </Kb.Text>
        ) : (
          <Kb.Meta title={getStatusText(props)} backgroundColor={Styles.globalColors.blue} />
        )}
      </Kb.Box>
    }
  />
)

const styles = Styles.styleSheetCreate({
  opacity30: {
    opacity: 0.3,
  },
  textFailed: {
    color: Styles.globalColors.red,
  },
})

export default Uploading
