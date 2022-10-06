function htmlspecialchars(formData) {
  formData = formData.replace(/\&/gi, "&amp;")
  formData = formData.replace(/\</gi, "&lt;")
  formData = formData.replace(/\>/gi, "&gt;")
  formData = formData.replace(/\"/gi, "&quot;")
  
  return formData
}
