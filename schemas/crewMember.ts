// @ts-check
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'crewMember',
  title: 'Regie',
  type: 'object',
  fields: [
    defineField({
      name: 'person',
      title: 'Person',
      type: 'reference',
      to: [{type: 'person'}],
      options: {
        filter: 'role[0] == $role',
        filterParams: {role: 'regie'},
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
