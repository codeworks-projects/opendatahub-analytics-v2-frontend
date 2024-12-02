// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
// SPDX-License-Identifier: AGPL-3.0-or-later

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { TimeSeries } from '../types/time-series'

export const useTimeSeriesStore = defineStore('time-series', () => {
   // State
   const colors = [
      '#114189',
      '# 9a5dd',
      '#757fa0',
      '#66e266',
      '#27fd10',
      '#5df6f8',
      '#f11c6b',
      '#2e9bc1',
      '#6868f1',
      '#aa147f',
      '#80c5d0',
      '#59cd56',
      '# c806f',
      '#9f81cd',
      '#2695ef',
      '#939bc6',
      '#cee390',
      '#4daeda',
      '#50e449',
      '#89e139',
      '#ef9196',
      '#f74991',
      '#c71bb9',
      '#ae1319',
      '#f988a7',
      '#4df2a0',
      '#3169c1',
      '#c60511',
      '#1876e5',
      '#c49162',
      '#cce418',
      '#18c9f2',
      '#156007',
      '#53c124',
      '#59e92a',
      '#ab0c73',
      '# 69f35',
      '#173583',
      '#c8d25b',
      '#599c0b',
      '#313e43',
      '#da4157',
      '#d67ad0',
      '#33674c',
      '#fda69a',
      '#15425f',
      '#cc4a9c',
      '#156ced',
      '#ef9b7e',
      '# f3f8d',
   ]

   const timeSeriesList = ref<TimeSeries[]>([])

   // Actions
   const addTimeSeries = (timeSeries: TimeSeries) => {
      timeSeriesList.value.push(timeSeries)
   }

   const removeTimeSeries = (index: number) => {
      timeSeriesList.value = timeSeriesList.value.filter((_, i) => i !== index)
   }

   return {
      timeSeriesList,
      colors,

      // Actions
      addTimeSeries,
      removeTimeSeries,
   }
})
