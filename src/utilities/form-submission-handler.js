/*eslint-disable */
function getFormData(form) {
  const { elements } = form;
  let honeypot;

  const fields = Object.keys(elements).filter((k) => {
    if (elements[k].name === 'honeypot') {
      honeypot = elements[k].value;
      return false;
    }
    return true;
  }).map((k) => {
    if (elements[k].name !== undefined) {
      return elements[k].name;
      // special case for Edge's html collection
    } if (elements[k].length > 0) {
      return elements[k].item(0).name;
    }
  }).filter((item, pos, self) => self.indexOf(item) == pos && item);

  const formData = {};
  fields.forEach((name) => {
    const element = elements[name];

    // singular form elements just have one value
    formData[name] = element.value;

    // when our element has multiple items, get their values
    if (element.length) {
      const data = [];
      for (let i = 0; i < element.length; i+=1) {
        const item = element.item(i);
        if (item.checked || item.selected) {
          data.push(item.value);
        }
      }
      formData[name] = data.join(', ');
    }
  });

  // add form-specific values into the data
  formData.formDataNameOrder = JSON.stringify(fields);
  formData.formGoogleSheetName = form.dataset.sheet || 'responses'; // default sheet name
  formData.formGoogleSend = form.dataset.email || ''; // no email by default

  return { data: formData, honeypot };
}

export default {
  getFormData,
};
