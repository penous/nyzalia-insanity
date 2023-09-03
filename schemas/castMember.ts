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
    }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    }),
    defineField({
      name: 'externalCreditId',
      title: 'External Credit ID',
      type: 'string',
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
