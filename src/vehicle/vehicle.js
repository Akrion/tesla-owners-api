let _ = require('lodash/fp')
let request = require('../util/request')

const CONFIG = require('../config')

module.exports = class Vehicle {
  constructor(refreshFunction = _.noop, data) {
    Object.assign(this, data)
    this.refresh = _.partial(refreshFunction, [data.idS])
  }
  
  get(state) { return request.get(`/vehicles/${this.idS}/data_request/${state}`) }
  set(command, data = {}) { return request.post(`/vehicles/${this.idS}/command/${command}`, data) }
  getIsMobileEnabled() { return request.get(`/vehicles/${this.idS}/mobile_enabled`) }

  getState() { return this.get('vehicle_state') }
  getChargeState() { return this.get('charge_state') }
  getClimateState() { return this.get('climate_state') }
  getDriveState() { return this.get('drive_state') }
  getSettings() { return this.get('gui_settings') }

  setWakeUp() { return this.set('wake_up') }
  setValetMode(data) { return this.set('set_valet_mode', data) }
  setResetValetPin() { return this.set('reset_valet_pin') }
  setChargePortDoorOpen() { return this.set('charge_port_door_open') }
  setChargeToStandard() { return this.set('charge_standard') }
  setChargeToMaxRange() { return this.set('charge_max_range') }
  setChargeLimit(data) { return this.set('set_charge_limit', data) }
  setChargeStart() { return this.set('charge_start') }
  setChargeStop() { return this.set('charge_stop') }
  setFlashLights() { return this.set('flash_lights') }
  setHonkHorn() { return this.set('honk_horn') }
  setUnlocked() { return this.set('door_unlock') }
  setLocked() { return this.set('door_lock') }
  setTemps(data) { return this.set('set_temps', data) }
  setStartAutoConditioning() { return this.set('auto_conditioning_start') }
  setStopAutoConditioning() { return this.set('auto_conditioning_stop') }
  setSunRoofControl(data) { return this.set('sun_roof_control', data) }
  setRemoteStartDrive(data) { return this.set('remote_start_drive', data) }
  setFrontTrunkOpen() { return this.set('trunk_open', { which_trunk: 'front' }) }
  setRearTrunkOpen() { return this.set('trunk_open', { which_trunk: 'rear' }) }
}