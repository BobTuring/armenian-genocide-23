function createEl(elementType, parameters = {}) {
  const element = document.createElement(elementType);
  Object.entries(parameters).forEach(([property, value]) => {
    if (property == "class") {
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          element.classList.add(value[i]);
        }
      } else {
        element.className = value;
      }
      return;
    }
    if (property == "text") {
      element.textContent = value;
      return;
    }
    if (property == "innerHTML") {
      element.innerHTML = value;
      return;
    }
    if (property == "innerText") {
      element.innerText = value;
      return;
    }
    if (property.slice(0, 5) == "data_") {
      element.setAttribute(property.replace(/_/g, "-"), value);
      return;
    }
    element.setAttribute(property, value);
  });
  return element;
}