export function strToDom(str) {
  return document.createRange().createContextualFragment(str);
}

export function getDataFormulaire(Form) {
  if (Form.id === "form") {
    const formDataSingIn = new FormData(Form);
    const ObjForm = ["nickname_email", "password"].reduce((obj, curr) => {
      obj[curr] = formDataSingIn.get(curr);
      return obj;
    }, {});
    return ObjForm;
  }
}

export function CheckDataEmpty(data) {
  let values = Object.values(data)
  return values.every((val) => val != '')
}