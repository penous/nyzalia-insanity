import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'

export default defineConfig([
  {
    name: 'production-workspace',
    title: 'Nyzalia',

    projectId: 'mxnfue20',
    dataset: 'production',
    basePath: '/production',

    plugins: [deskTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'develop-workspace',
    title: 'Nyzalia-develop',

    projectId: 'mxnfue20',
    dataset: 'develop',
    basePath: '/develop',

    plugins: [
      deskTool(),
      visionTool(),
      //googleMapsInput(),
    ],

    schema: {
      types: schemaTypes,
    },
  },
])
