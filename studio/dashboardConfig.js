export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dfd3245de0510edf94bc4dc',
                  title: 'Sanity Studio',
                  name: 'dials-blog-sanity-studio',
                  apiId: 'bc490682-1ae3-4781-95f6-7cac48da8905'
                },
                {
                  buildHookId: '5dfd3245738b6de47371052f',
                  title: 'Landing pages Website',
                  name: 'dials-blog-sanity',
                  apiId: '2a2a4a56-082c-4f4e-abaa-df10cf6336c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/samsdial/dials-blog-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dials-blog-sanity.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
