export const baseURL = 'https://jsonplaceholder.typicode.com'

export const apiRoutes = {
  posts: {
    main: `${baseURL}/posts`,
    details: (postId: string) => `${baseURL}/posts/${postId}`,
  },
} as const
