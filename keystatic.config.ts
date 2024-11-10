import { collection, config, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local'
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.markdoc({ label: 'Description' }),
        publishedDate: fields.date({ label: 'Published Date' }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md'
        })
      }
    })
  }
})
