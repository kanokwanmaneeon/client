// @flow
import {newRoutes as chatNewRoutes, newModalRoutes as chatNewModalRoutes} from '../chat/routes'
import {newRoutes as deviceNewRoutes, newModalRoutes as deviceNewModalRoutes} from '../devices/routes'
import {newRoutes as fsNewRoutes, newModalRoutes as fsNewModalRoutes} from '../fs/routes'
import {newRoutes as gitNewRoutes, newModalRoutes as gitNewModalRoutes} from '../git/routes'
import {newRoutes as _loggedOutRoutes} from '../login/routes'
import {newRoutes as peopleNewRoutes, newModalRoutes as peopleNewModalRoutes} from '../people/routes'
import {newRoutes as profileNewRoutes, newModalRoutes as profileNewModalRoutes} from '../profile/routes'
import {newRoutes as settingsNewRoutes, newModalRoutes as settingsNewModalRoutes} from '../settings/routes'
import {newRoutes as teamsNewRoutes, newModalRoutes as teamsNewModalRoutes} from '../teams/routes'
import {newRoutes as walletsNewRoutes, newModalRoutes as walletsNewModalRoutes} from '../wallets/routes'
import * as Tabs from '../constants/tabs'

export const nameToTab = {}
export const routes = {}

const _newRoutes = [
  {route: deviceNewRoutes, tab: Tabs.devicesTab},
  {route: chatNewRoutes, tab: Tabs.chatTab},
  {route: peopleNewRoutes, tab: Tabs.peopleTab},
  {route: profileNewRoutes, tab: Tabs.peopleTab},
  {route: fsNewRoutes, tab: Tabs.fsTab},
  {route: settingsNewRoutes, tab: Tabs.settingsTab},
  {route: teamsNewRoutes, tab: Tabs.teamsTab},
  {route: walletsNewRoutes, tab: Tabs.walletsTab},
  {route: gitNewRoutes, tab: Tabs.gitTab},
]

_newRoutes.forEach(({route, tab}) => {
  Object.keys(route).forEach(name => {
    if (nameToTab[name]) {
      throw new Error('New route with dupe name, disallowed! ' + name)
    }
    nameToTab[name] = tab
    routes[name] = route[name]
  })
})

export const modalRoutes = {
  ...chatNewModalRoutes,
  ...deviceNewModalRoutes,
  ...fsNewModalRoutes,
  ...gitNewModalRoutes,
  ...profileNewModalRoutes,
  ...settingsNewModalRoutes,
  ...teamsNewModalRoutes,
  ...walletsNewModalRoutes,
}

export const loggedOutRoutes = _loggedOutRoutes
// TEMP
console.log('aaa all routes', routes)
console.log('aaa all loggedout routes', loggedOutRoutes)
console.log('aaa all modal routes', modalRoutes)
console.log('aaa routes to tab', nameToTab)