export const basic = {
  section_1: {
    name: '正方一辩陈词',
    type: 'single',
    side: 'positive',
    limit: 180
  },
  section_2: {
    name: '反方质询',
    type: 'single',
    side: 'negative',
    limit: 90
  },
  section_3: {
    name: '反方一辩陈词',
    type: 'single',
    side: 'negative',
    limit: 180
  },
  section_4: {
    name: '正方质询',
    type: 'single',
    side: 'positive',
    limit: 90
  },
  section_5: {
    name: '正方二辩陈词',
    type: 'single',
    side: 'positive',
    limit: 120
  },
  section_6: {
    name: '反方二辩陈词',
    type: 'single',
    side: 'negative',
    limit: 120
  },
  section_7: {
    name: '正反二辩对辩',
    type: 'double',
    limit: {
      positive: 90,
      negative: 90
    },
    start: 'positive'
  },
  section_8: {
    name: '正方三辩质询',
    type: 'single',
    side: 'positive',
    limit: 180
  },
  section_9: {
    name: '反方三辩质询',
    type: 'single',
    side: 'negative',
    limit: 180
  },
  section_10: {
    name: '自由辩论',
    type: 'double',
    limit: {
      positive: 240,
      negative: 240
    },
    start: 'positive'
  },
  section_11: {
    name: '反方总结陈词'
    type: 'single',
    side: 'negative',
    limit: 240
  },
  section_12: {
    name: '正方总结陈词',
    type: 'single',
    side: 'positive',
    limit: 240
  }
}
