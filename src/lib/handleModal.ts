import { modalClass, modalViewed } from '$lib/store'

export const handleModalClass = (e: Event, mViewed: boolean, disabled = false) => {
  e.preventDefault()
  if (disabled && !mViewed) {
    return
  }
  if (mViewed) {
    modalViewed.set(false)
    modalClass.set('animate-fadeOut')
    setTimeout(() => {
      modalClass.set('hidden')
    }, 350)
  } else {
    modalViewed.set(true)
    modalClass.set('animate-fadeIn')
  }
}
