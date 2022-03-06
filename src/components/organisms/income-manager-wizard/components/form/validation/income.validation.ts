import * as yup from "yup";

const incomeManagerValidation = yup.object({
  income: yup
    .number()
    .required("Przychód jest wymagany")
    .min(0, "Przychód nie może być ujemny"),
  date: yup.date().required("Data jest wymagana"),
});

export default incomeManagerValidation;
