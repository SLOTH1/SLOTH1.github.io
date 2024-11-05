document.querySelectorAll("#images img").forEach((img) => {
  const altText = img.getAttribute("alt")

  if (altText) {
    const overlay = document.createElement("div")
    overlay.className =
      "absolute inset-0 text-white font-semibold text-xs p-2 opacity-0 group-hover:opacity-100 flex transition-opacity duration-300"
    overlay.textContent = altText

    const wrapper = document.createElement("div")
    wrapper.className = "relative group w-full"
    img.parentNode.insertBefore(wrapper, img)
    wrapper.appendChild(img)
    wrapper.appendChild(overlay)
  }
})
