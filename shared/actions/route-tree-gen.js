// @flow
// NOTE: This file is GENERATED from json files in actions/json. Run 'yarn build-actions' to regenerate
/* eslint-disable no-unused-vars,prettier/prettier,no-use-before-define,import/no-duplicates */

import * as I from 'immutable'
import * as RPCTypes from '../constants/types/rpc-gen'
import * as Types from '../constants/types/route-tree'
import * as Constants from '../constants/route-tree'
import * as RCConstants from '../route-tree'
import * as Tabs from '../constants/tabs'

// Constants
export const resetStore = 'common:resetStore' // not a part of route-tree but is handled by every reducer. NEVER dispatch this
export const typePrefix = 'route-tree:'
export const clearModals = 'route-tree:clearModals'
export const navUpToScreen = 'route-tree:navUpToScreen'
export const navigateAppend = 'route-tree:navigateAppend'
export const navigateTo = 'route-tree:navigateTo'
export const navigateUp = 'route-tree:navigateUp'
export const putActionIfOnPath = 'route-tree:putActionIfOnPath'
export const refreshRouteDef = 'route-tree:refreshRouteDef'
export const resetRoute = 'route-tree:resetRoute'
export const resetStack = 'route-tree:resetStack'
export const setInitialRouteDef = 'route-tree:setInitialRouteDef'
export const setRouteState = 'route-tree:setRouteState'
export const switchRouteDef = 'route-tree:switchRouteDef'
export const switchTab = 'route-tree:switchTab'
export const switchTo = 'route-tree:switchTo'

// Payload Types
type _ClearModalsPayload = void
type _NavUpToScreenPayload = $ReadOnly<{|routeName: string|}>
type _NavigateAppendPayload = $ReadOnly<{|path: RCConstants.PropsPath<any>, parentPath?: ?RCConstants.Path, replace?: boolean|}>
type _NavigateToPayload = $ReadOnly<{|path: RCConstants.PropsPath<any>, parentPath?: ?RCConstants.Path, replace?: boolean|}>
type _NavigateUpPayload = void
type _PutActionIfOnPathPayload = $ReadOnly<{|expectedPath: RCConstants.Path, otherAction: any, parentPath?: ?RCConstants.Path|}>
type _RefreshRouteDefPayload = $ReadOnly<{|loginRouteTree: RCConstants.RouteDefParams, appRouteTree: RCConstants.RouteDefParams|}>
type _ResetRoutePayload = $ReadOnly<{|path: RCConstants.Path|}>
type _ResetStackPayload = $ReadOnly<{|tab: Tabs.AppTab, actions: Array<any>, index: number|}>
type _SetInitialRouteDefPayload = $ReadOnly<{|routeDef: RCConstants.RouteDefParams|}>
type _SetRouteStatePayload = $ReadOnly<{|path: RCConstants.Path, partialState: {} | ((oldState: I.Map<string, any>) => I.Map<string, any>)|}>
type _SwitchRouteDefPayload = $ReadOnly<{|routeDef: RCConstants.RouteDefParams, path?: ?RCConstants.Path|}>
type _SwitchTabPayload = $ReadOnly<{|tab: Tabs.AppTab|}>
type _SwitchToPayload = $ReadOnly<{|path: RCConstants.Path, parentPath?: ?RCConstants.Path|}>

// Action Creators
/**
 * ONLY used by the new nav. Navigates up to this route if it already exists, noops otherwise.
 */
export const createNavUpToScreen = (payload: _NavUpToScreenPayload) => ({payload, type: navUpToScreen})
/**
 * ONLY used by the new nav. Switch to a different tab.
 */
export const createSwitchTab = (payload: _SwitchTabPayload) => ({payload, type: switchTab})
/**
 * ONLY used by the new nav. use this to clear any modal routes
 */
export const createClearModals = (payload: _ClearModalsPayload) => ({payload, type: clearModals})
/**
 * Reset a specific stack. actions is route tree actions TODO better typing
 */
export const createResetStack = (payload: _ResetStackPayload) => ({payload, type: resetStack})
/**
 * Set the tree of route definitions. Dispatched at initialization time.
 */
export const createSetInitialRouteDef = (payload: _SetInitialRouteDefPayload) => ({payload, type: setInitialRouteDef})
export const createNavigateAppend = (payload: _NavigateAppendPayload) => ({payload, type: navigateAppend})
export const createNavigateTo = (payload: _NavigateToPayload) => ({payload, type: navigateTo})
export const createNavigateUp = (payload: _NavigateUpPayload) => ({payload, type: navigateUp})
export const createPutActionIfOnPath = (payload: _PutActionIfOnPathPayload) => ({payload, type: putActionIfOnPath})
export const createRefreshRouteDef = (payload: _RefreshRouteDefPayload) => ({payload, type: refreshRouteDef})
export const createResetRoute = (payload: _ResetRoutePayload) => ({payload, type: resetRoute})
export const createSetRouteState = (payload: _SetRouteStatePayload) => ({payload, type: setRouteState})
export const createSwitchRouteDef = (payload: _SwitchRouteDefPayload) => ({payload, type: switchRouteDef})
export const createSwitchTo = (payload: _SwitchToPayload) => ({payload, type: switchTo})

// Action Payloads
export type ClearModalsPayload = {|+payload: _ClearModalsPayload, +type: 'route-tree:clearModals'|}
export type NavUpToScreenPayload = {|+payload: _NavUpToScreenPayload, +type: 'route-tree:navUpToScreen'|}
export type NavigateAppendPayload = {|+payload: _NavigateAppendPayload, +type: 'route-tree:navigateAppend'|}
export type NavigateToPayload = {|+payload: _NavigateToPayload, +type: 'route-tree:navigateTo'|}
export type NavigateUpPayload = {|+payload: _NavigateUpPayload, +type: 'route-tree:navigateUp'|}
export type PutActionIfOnPathPayload = {|+payload: _PutActionIfOnPathPayload, +type: 'route-tree:putActionIfOnPath'|}
export type RefreshRouteDefPayload = {|+payload: _RefreshRouteDefPayload, +type: 'route-tree:refreshRouteDef'|}
export type ResetRoutePayload = {|+payload: _ResetRoutePayload, +type: 'route-tree:resetRoute'|}
export type ResetStackPayload = {|+payload: _ResetStackPayload, +type: 'route-tree:resetStack'|}
export type SetInitialRouteDefPayload = {|+payload: _SetInitialRouteDefPayload, +type: 'route-tree:setInitialRouteDef'|}
export type SetRouteStatePayload = {|+payload: _SetRouteStatePayload, +type: 'route-tree:setRouteState'|}
export type SwitchRouteDefPayload = {|+payload: _SwitchRouteDefPayload, +type: 'route-tree:switchRouteDef'|}
export type SwitchTabPayload = {|+payload: _SwitchTabPayload, +type: 'route-tree:switchTab'|}
export type SwitchToPayload = {|+payload: _SwitchToPayload, +type: 'route-tree:switchTo'|}

// All Actions
// prettier-ignore
export type Actions =
  | ClearModalsPayload
  | NavUpToScreenPayload
  | NavigateAppendPayload
  | NavigateToPayload
  | NavigateUpPayload
  | PutActionIfOnPathPayload
  | RefreshRouteDefPayload
  | ResetRoutePayload
  | ResetStackPayload
  | SetInitialRouteDefPayload
  | SetRouteStatePayload
  | SwitchRouteDefPayload
  | SwitchTabPayload
  | SwitchToPayload
  | {type: 'common:resetStore', payload: null}
