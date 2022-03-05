import { modalViewed } from '$lib/store'

export const handleModalClass = (e: Event, mViewed: boolean, disabled = false) => {
  e.preventDefault()
  if (disabled && !mViewed) {
    return
  }
  if (mViewed) {
    modalViewed.set(false)
  } else {
    modalViewed.set(true)
  }
}
