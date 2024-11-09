import {createI18n} from "vue-i18n";

const i18n = createI18n({
  locale: 'hu',
  legacy: false,
  globalInjection: true,
  messages: {
    hu: {
      mainPage: {
        quickActions: 'gyorsműveletek'
      },
      sideMenu: {
        usersPage: 'Felhasználók',
        vehiclesPage: 'Járművek',
        reservationsPage: 'Foglalások',
        companiesPage: 'Cégek',
      },
      tableHeaders: {
        userTable: {
          id: 'Azonosító',
          name: 'Név',
          typeId: 'Típus',
          email: 'E-mail'
        },
        vehicleTable: {
          id: 'Azonosító',
          seats: 'Ülések száma',
          description: 'Típus',
          type: 'Típus',
          color: 'Szín',
          available: 'Elérhető',
          insuranceId: 'Biztosítás azonosító',
          plateNumber: 'Rendszám',
        },
        companiesTable: {
          id: 'Azonosító',
          companyName: 'Név',
          officeAddress: 'Telephely cím',
          officeEmail: 'E-mail',
          officeTel: 'Telefonszám'
        },
      },
      toastMessages: {
        createSuccess: 'Sikeres létrehozás',
        createFail:'Sikertelen létrehozás',
        saveSuccess:'Sikeres mentés',
        saveFail:'Sikertelen mentés',
        deleteSuccess:'Sikeres törlés',
        deleteFail:'Sikertelen törlés',
      }
    },
  }
})

export default i18n
