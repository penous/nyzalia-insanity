import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'castMember',
  title: 'Acteur',
  type: 'object',
  fields: [
    defineField({
      name: 'person',
      title: 'Acteur',
      type: 'reference',
      to: [{type: 'person'}],
      options: {
        filter: '$role in role[]',
        filterParams: {role: 'acteur'},
        disableNew: true,
      },
    }),
  ],
  preview: {
    select: {
      subtitle: 'characterName',
      title: 'person.name',
      media: 'person.image',
    },
  },
})
