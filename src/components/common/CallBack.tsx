// src/components/Callback.tsx
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { setTokensFromUrl } from '../../features/User/authSlice'
import type { AppDispatch } from '../../stores/store'

const Callback: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // 1) Lấy query params
    const params = new URLSearchParams(location.search)
    const accessToken = params.get('access_token') || ''
    const refreshToken = params.get('refresh_token') || ''
    const expiresIn = params.get('expires_in') || ''

    // 2) Dispatch để lưu vào Redux
    if (accessToken) {
      dispatch(
        setTokensFromUrl({
          accessToken: accessToken,
          refreshToken: refreshToken,
          expiresIn: parseInt(expiresIn, 10) || 3600
        })
      )
    }

    // 3) Điều hướng về trang chủ hoặc dashboard
    navigate('/', { replace: true })
  }, [location, dispatch, navigate])

  return <div>Đang xử lý callback...</div>
}

export default Callback
