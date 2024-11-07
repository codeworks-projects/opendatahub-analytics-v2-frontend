/*
   id: code of the layer, unique string without spaces
   icons: icon for the layer ["weather.svg"]. the array can
          optionally contains other items like
          ["green.svg", "precipitation", 900, 0, 0.1],
          this allow to add colors based on the values
   stationType: ["BikeCounter"]
   format: the type of data returned by the url. values: integreen or wms
   projection: data projection on map like EPSG:4326
   custom-function: function for special cases
   color: color of the marker
   mainData: data types that are displayed first in the dialog
   apiWhere: filter data with optional other conditions

   Example:
   {
      "id": "BikeCounter",
      "icons": ["weather.svg"],
      "stationType": ["BikeCounter"],
      "projection": "EPSG:4326",
      "format": "integreen",
      "custom-function": null,
      "color": "#F7D25A",
      "main-data": []
   }

 */

export type MapLayer = {
   id: string
   layers: Layer[]
   title: string
}[]

export type Layer = {
   id: string
   icons: (string | [string, string, number, number, number])[]
   stationType: string[]
   projection: string
   apiWhere?: string
   format: 'integreen' | 'wms'
   'custom-function': any | null
   color: string
   'main-data': [string, any][]
   imageMapping?: {
      dataType: string
      dataTypeMetadata: string
      valueSeparator: string
      metaDataImgData: string
   }
}