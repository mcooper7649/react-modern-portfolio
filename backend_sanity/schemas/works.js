export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 4,
      },
      {
        name: 'projectLink',
        title: 'Project Link',
        type: 'string',
      },
      {
        name: 'codeLink',
        title: 'Code Link',
        type: 'string',
      },
      {
        name: 'imgUrl',
        title: 'ImageUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
   
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
      {
        name: 'stack',
        title: 'Tech Stack',
        description: 'Shown as chips on the project card',
        type: 'array',
        of: [{ type: 'string' }],
        options: { layout: 'tags' },
      },
      {
        name: 'date',
        title: 'Date',
        description: 'When the project was built; cards are sorted newest first',
        type: 'date',
      },

    ],
  };