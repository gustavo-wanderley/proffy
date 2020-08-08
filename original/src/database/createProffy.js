
module.exports = async function (db, { proffyValue, classValue, classScheduleValue }) {

    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
       `);

    const idProffy = insertedProffy.lastID;

    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${idProffy}"
        );
   `);

    const idClass = insertedClass.lastID;

    const insertAllClassScheduleValues = classScheduleValue.map((value) => {
        return db.run(`
        INSERT INTO class_schedule (
            classes_id,
            weekday,
            time_from,
            time_to
        ) VALUES (
            "${idClass}",
            "${value.weekday}",
            "${value.time_from}",
            "${value.time_to}"
        );
        `);
    });

    await Promise.all(insertAllClassScheduleValues);

}