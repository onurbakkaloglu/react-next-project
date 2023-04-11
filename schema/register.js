import * as Yup from "yup";

export const registerSchema = Yup.object({
    fullName: Yup.string()
    .required("Ad Soyad boş bırakılamaz")
    .min(3, "Ad Soyad en az 3 karakter olmalıdır"),
    email: Yup.string()
    .required("E-Mail boş bırakılamaz")
    .email("E-Mail doğru formatta olmalıdır"),
    password: Yup.string()
    .required("Şifre boş bırakılamaz").min(8,"Şire en az 8 karakterli olmalıdır").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Şifre en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir."),
    confirmPassword: Yup.string().required("Şifre boş bırakılamaz").oneOf([Yup.ref('password'), null], "Şifreler uyuşmuyor")
}); 