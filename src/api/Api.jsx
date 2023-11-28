import {UserPost} from './endpoints/UserPost'
import {TokenPost} from './endpoints/TokenPost'
import { PhotoPost } from './endpoints/PhotoPost'

export default function Api() {
  return (
    <>
      <h1>User Post</h1>
      <UserPost />

      <h1>Token Post</h1>
      <TokenPost/>

      <h1>Photo Post</h1>
      <PhotoPost />

    </>
  )
}
