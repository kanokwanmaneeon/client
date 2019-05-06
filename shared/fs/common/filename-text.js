// @flow
import {namedConnect} from '../../util/container'
import * as Types from '../../constants/types/fs'
import * as Constants from '../../constants/fs'
import * as Kb from '../../common-adapters'
import * as Styles from '../../styles'
import * as React from 'react'
import {allTextTypes} from '../../common-adapters/text.shared'

type TextType = $Keys<typeof allTextTypes>

type OwnProps = {|
  path?: Types.Path,
  filename?: string,
  selectable?: boolean,
  style?: Styles.StylesCrossPlatform,
  type: TextType,
|}

type Props = {|
  fileExtension: string,
  fileNameWithoutExtension: string,
  selectable?: boolean,
  style?: Styles.StylesCrossPlatform,
  type: TextType,
|}

const FilenameText = (props: Props) => (
  <Kb.Box2 direction="horizontal" fullWidth={true}>
    <Kb.Text
      type={props.type}
      style={Styles.collapseStyles([props.style, styles.breakAll])}
      lineClamp={1}
      selectable={props.selectable}
    >
      {props.fileNameWithoutExtension}
    </Kb.Text>
    {props.fileExtension && (
      <Kb.Text type={props.type} style={props.style} selectable={props.selectable} lineClamp={0}>
        {props.fileExtension}
      </Kb.Text>
    )}
  </Kb.Box2>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

const mergeProps = (s, d, o) => {
  const [fileNameWithoutExtension, fileExtension] = Constants.splitFileNameAndExtension(
    o.path ? Types.getPathName(o.path) : o.filename || ''
  )
  return {
    fileExtension,
    fileNameWithoutExtension,
    selectable: o.selectable,
    style: o.style,
    type: o.type,
  }
}

export default namedConnect<OwnProps, _, _, _, _>(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  'FilenameText'
)(FilenameText)

const styles = Styles.styleSheetCreate({
  breakAll: Styles.platformStyles({
    isElectron: {
      wordBreak: 'break-all',
    },
  }),
})
