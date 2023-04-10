import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup.string()
    .required("E-Mail boş bırakılamaz")
    .email("E-Mail doğru formatta olmalıdır"),
    password: Yup.string()
    .required("Şifre boş bırakılamaz").min(8,"Şire en az 8 karakterli olmalıdır").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Şifre en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir."),
}); 