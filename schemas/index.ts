import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import assistantMember from './assistantMember'
import authorMember from './authorMember'
import performance from './performance'
import person from './person'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'

export const schemaTypes = [
  // Document types
  performance,
  person,

  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
  assistantMember,
  authorMember,
]
