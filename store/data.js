import axios from 'axios'
// import Data from '@/data/data.json'
import LastUpdate from '@/data/last_update.json'
import News from '@/data/news.json'
import PatientsCnt from '@/data/patients_cnt.json'
import Patients from '@/data/patients.json'
import Inspections from '@/data/inspections.json'
import Hospitalizations from '@/data/hospitalizations.json'
import Querents from '@/data/querents.json'
import MapUpdate from '@/data/map_update.json'

export const state = () => ({
  // data: Data
  lastupdate: LastUpdate,
  news: News,
  patientscnt: PatientsCnt,
  patients: Patients,
  inspections: Inspections,
  hospitalizations: Hospitalizations,
  querents: Querents,
  mapupdate: MapUpdate
})

export const mutations = {
  getData(state, payload) {
    // state.data = payload.data,
    // eslint-disable-next-line no-sequences,no-unused-expressions
    ;(state.lastupdate = payload.lastupdate),
      (state.news = payload.news),
      (state.patientscnt = payload.patientscnt),
      (state.patients = payload.patients),
      (state.inspections = payload.inspections),
      (state.hospitalizations = payload.hospitalizations),
      (state.querents = payload.querents),
      (state.mapupdate = payload.mapupdate)
  }
}

export const actions = {
  async getDataAction(context) {
    const payload = {
      // data: Data
      lastupdate: LastUpdate,
      news: News,
      patientscnt: PatientsCnt,
      patients: Patients,
      inspections: Inspections,
      hospitalizations: Hospitalizations,
      querents: Querents,
      mapupdate: MapUpdate
    }
    await axios.get(process.env.lastupdateUrl).then(res => {
      // payload.data.contacts = res.data.contacts
      // payload.data.inspections = res.data.inspections
      // payload.data.inspections_summary = res.data.inspections_summary
      // payload.data.patients_summary = res.data.patients_summary
      // payload.data.patients = res.data.patients
      // payload.data.querents = res.data.querents
      // payload.data.lastUpdate = res.data.lastUpdate
      // payload.data.main_summary = res.data.main_summary
      payload.lastupdate = res.data
      // payload.patientscnt = res.patientscnt
      // payload.patients = res.patients
      // payload.inspections = res.inspections
      // payload.hospitalizations = res.hospitalizations
      // payload.querents = res.querents
    })
    await axios.get(process.env.newsUrl).then(res => {
      payload.news = res.data
    })
    await axios.get(process.env.patientscntUrl).then(res => {
      payload.patientscnt = res.data
    })
    await axios.get(process.env.patientsUrl).then(res => {
      payload.patients = res.data
    })
    await axios.get(process.env.inspectionsUrl).then(res => {
      payload.inspections = res.data
    })
    await axios.get(process.env.hospitalizationsUrl).then(res => {
      payload.hospitalizations = res.data
    })
    await axios.get(process.env.querentsUrl).then(res => {
      payload.querents = res.data
    })
    await axios.get(process.env.mapupdateUrl).then(res => {
      payload.mapupdate = res.data
    })
    context.commit('getData', payload)
  }
}
