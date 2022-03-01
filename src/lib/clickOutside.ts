export const clickOutside = (node: HTMLElement & CustomEventInit) => {
  const handleClick = (e: CustomEvent) => {
    const elem = e.target as HTMLElement
    if (node && !node.contains(elem) && !e.defaultPrevented) {
      node.dispatchEvent(new CustomEvent('click_outside', node))
    }
  }

  document.addEventListener('click', handleClick, true)

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true)
    }
  }
}
