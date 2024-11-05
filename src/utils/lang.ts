import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'hu',
    legacy: true,
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
            tableHeaders:{
                userTable:{
                    id:'Azonosító',
                    name:'Név',
                    typeId:'Típus',
                    email:'E-mail'
                },
                vehicleTable:{
                    id:'Azonosító',
                    seats:'Ülések száma',
                    description:'Típus',
                    type:'Típus',
                    color:'Szín',
                    available:'Elérhető',
                    insuranceId:'Biztosítás azonosító',
                    plateNumber:'Rendszám',
                },
                companiesTable:{
                    id:'Azonosító',
                    companyName:'Név',
                    officeAddress:'Telephely cím',
                    officeEmail:'E-mail',
                    officeTel:'Telefonszám'
                },
            }
        },
    }
})

export default i18n
