import * as Yup from "yup";

export const adminSchema = Yup.object({
    username: Yup.string()
    .required("Kullanıcı adı boş bırakılamaz").min(3,"Kullanıcı adı en az 3 karakterli olmalıdır"),
    password: Yup.string()
    .required("Şifre boş bırakılamaz").min(8,"Şire en az 8 karakterli olmalıdır").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Şifre en az bir büyük harf, bir küçük harf, bir sayı ve bir özel karakter içermelidir."),
}); 