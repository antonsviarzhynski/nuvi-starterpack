import type { PostModel } from '~/api/posts/types'
import { apiRoutes } from '~/api/routes'
import useFetchWrapper from '~/api/useFetchWrapper'

export default function usePostsAPI() {
  const postsUrl = apiRoutes.posts
  const fetchWrapper = useFetchWrapper()

  return {
    getPostsList,
    getPostDetails,
  }

  function getPostsList(): Promise<PostModel[]> {
    return fetchWrapper.get(postsUrl.main)
  }

  function getPostDetails(
    id: string,
  ): Promise<PostModel> {
    return fetchWrapper.get(postsUrl.details(id))
  }
}
