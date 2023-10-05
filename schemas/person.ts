import {defineField, defineType} from 'sanity'
import {MdPerson as icon} from 'react-icons/md'

export default defineType({
  name: 'person',
  title: 'Persoon',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Naam',
      type: 'string',
      description: 'voornaam + achternaam',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'role',
      title: 'functie',
      description: 'acteur / regie',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Acteur', value: 'acteur'},
          {title: 'Regie', value: 'regie'},
          {title: 'Assistent', value: 'assistent'},
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
