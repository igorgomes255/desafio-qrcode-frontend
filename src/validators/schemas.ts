import * as yup from "yup";

export const schemaData = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  linkedin: yup.string().required("Campo obrigatório"),
  github: yup.string().required("Campo obrigatório"),
});
