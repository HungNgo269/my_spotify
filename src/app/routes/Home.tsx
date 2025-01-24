import React, { useEffect } from 'react'
import Content from '../../features/User/components/Content'
import { useDispatch } from 'react-redux'
import { setTokensFromUrl } from '../../features/User/authSlice'
import { AppDispatch } from '../../stores/store'

interface Props {
  propName?: string
}

const HomePage: React.FC<Props> = ({ propName }) => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const accessToken = params.get('access_token')
    const refreshToken = params.get('refresh_token')
    const expiresIn = params.get('expires_in')

    if (accessToken) {
      dispatch(
        setTokensFromUrl({
          accessToken: accessToken,
          refreshToken: refreshToken || '',
          expiresIn: expiresIn ? parseInt(expiresIn, 10) : 3600
        })
      )
      // Xoá query params khỏi URL
      window.history.replaceState({}, document.title, '/')
    }
  }, [dispatch])
  return (
    <div className='flex h-full w-full'>
      <Content></Content>
    </div>
  )
}

export default HomePage
