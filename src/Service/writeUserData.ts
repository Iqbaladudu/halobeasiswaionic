import { getDatabase, ref, set } from "firebase/database";
import { RegisterForm } from "../store/RegisterForm";

const writeUserData = ({ userId, username, fullName, email, phoneNumber, gender, umur, countryWantToStudy }: Partial<RegisterForm>) => {
    const db = getDatabase()
    set(ref(db, 'users/' + userId), {
        userId: userId as string | "",
        username: username || "",
        fullName: fullName || "",
        email: email || "",
        phoneNumber: phoneNumber || "",
        gender: gender || "",
        umur: umur || "",
        countryWantToStudy: countryWantToStudy || "",
    })
};

export default writeUserData;