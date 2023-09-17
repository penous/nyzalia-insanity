import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({
  name: 'performance',
  title: 'Voorstelling',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'unreleased',
      title: 'Opkomende voorstelling?',
      type: 'boolean',
    }),
    defineField({
      name: 'price',
      title: 'Ticket prijs',
      type: 'number',
      hidden: ({document}) => document?.unreleased == false,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'overview',
      title: 'SamenVatting',
      type: 'blockContent',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Start Datum',
      type: 'datetime',
    }),
    defineField({
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'castMembers',
      title: 'Acteurs',
      type: 'array',
      of: [{type: 'castMember'}],
    }),
    defineField({
      name: 'crewMembers',
      title: 'Regie',
      type: 'array',
      of: [{type: 'crewMember'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'poster',
      castName0: 'castMembers.0.person.name',
      castName1: 'castMembers.1.person.name',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      }
    },
  },
})
