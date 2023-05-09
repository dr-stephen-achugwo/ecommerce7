import { render } from '@testing-library/react'
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider'
import { RecoilRoot } from 'recoil'

export const renderSetup = (component: JSX.Element) =>
  render(<RecoilRoot>{component}</RecoilRoot>, { wrapper: MemoryRouterProvider })
