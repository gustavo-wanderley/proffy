const db = require('./db')
const createProffy = require('./createProffy')


db.then(
    async (db) => {
        proffyValue = {
            name: "Diego Fernandes",
            avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
            whatsapp: 99675698,
            bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas jápassaram por uma das minhas explosões.",
        };
        classValue = {
            subject: 1,
            cost: "20",

        };

        classScheduleValue = [
            {
                weekday: 1,
                time_from: 720,
                time_to: 1220
            },
            {
                weekday: 2,
                time_from: 720,
                time_to: 1220
            },

        ];
        
        await createProffy(db, {
            proffyValue,
            classValue,
            classScheduleValue,
        });

        const selectProffys = await db.all("SELECT * FROM proffys");
        //console.log(selectProffys);

        const selectClassAndProffys = await db.all(`
            SELECT classes.* ,proffys.* FROM proffys 
            JOIN classes ON ( classes.proffy_id = proffys.id ) 
            WHERE classes.proffy_id = 1 ;
        `);

        //console.log(selectClassAndProffys);

        const selectClassesSchedules = await db.all(
            `
            SELECT class_schedule.* FROM class_schedule
            WHERE class_schedule.classes_id = "1"
            AND class_schedule.weekday = "1"
            AND class_schedule.time_from <= "720"
            AND class_schedule.time_to > "720";
            
        `);

        console.log(selectClassesSchedules);
    }
)