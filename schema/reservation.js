import * as Yup from "yup";

export const reservationSchema = Yup.object({
    fullName: Yup.string()
    .required("Ad Soyad boş bırakılamaz")
    .min(3, "Ad Soyad en az 3 karakter olmalıdır"),
    phoneNumber: Yup.string()
    .required("Telefon numarası boş bırakılamaz")
    .min(10, "Telefon numarası en az 10 haneli olmalıdır"),
    email: Yup.string()
    .required("E-Mail boş bırakılamaz")
    .email("E-Mail doğru formatta olmalıdır"),
    persons: Yup.string()
    .required("Kişi sayısı boş bırakılamaz"),
    date: Yup.string()
    .required("Tarih boş bırakılamaz")
}); 