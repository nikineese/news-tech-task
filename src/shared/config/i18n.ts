import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            home: "Home",
            news: "News",
            profile: "Profile",
          },
          home: {
            title: "Most popular news portal in the whole world",
            subtitle: "Click on the News tab and see truth",
          },
          auth: {
            username: "Username",
            password: "Password",
            signIn: "Sign In",
          },
          profile: {
            message: "Welcome back, you are successfully authorized",
            logout: "Logout",
          },
        },
      },
      uk: {
        translation: {
          header: {
            home: "Головна",
            news: "Новини",
            profile: "Профіль",
          },
          home: {
            title: "Найбільш популярний портал новин у всьому світі",
            subtitle: "Переходь на сторінку з новинами, щоб побачити правду",
          },
          auth: {
            username: "Ім'я",
            password: "Пароль",
            signIn: "Увійти",
          },
          profile: {
            message: "Вітаю, ви успішно авторизувались",
            logout: "Вийти",
          },
        },
      },
    },
  });
export enum Languages {
  ENGLISH = "en",
  UKRAINIAN = "uk",
}

export default i18n;
