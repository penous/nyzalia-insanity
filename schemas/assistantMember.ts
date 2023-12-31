// @ts-check
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'assistantMember',
  title: 'Assistent',
  type: 'object',
  fields: [
    defineField({
      name: 'person',
      title: 'Person',
      type: 'reference',
      to: [{type: 'person'}],
      options: {
        filter: '$role in role[]',
        filterParams: {role: 'assistent'},
        disableNew: true,
      },
    }),
    defineField({
      name: 'job',
      title: 'Job',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      name: 'person.name',
      job: 'job',
      media: 'person.image',
    },
    prepare(selection) {
      const {name, job, media} = selection
      return {
        title: name,
        subtitle: `${job}`,
        media,
      }
    },
  },
})
