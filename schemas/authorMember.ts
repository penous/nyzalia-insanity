// @ts-check
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'authorMember',
  title: 'Auteur',
  type: 'object',
  fields: [
    defineField({
      name: 'person',
      title: 'Person',
      type: 'reference',
      to: [{type: 'person'}],
      options: {
        filter: 'role[0] == $role',
        filterParams: {role: 'auteur'},
        disableNew: true,
      },
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
