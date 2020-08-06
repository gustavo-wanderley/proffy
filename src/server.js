const express = require('express')
const server = express()
const nunjucks = require("nunjucks")


nunjucks.configure(
    'src/views',
    {
        express: server,
        noCache: true,
    }
)

const proffy = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: 99675698,
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas jápassaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [
            0
        ],
        time_from: [720],
        time_to: [1220],
    },
    {
        name: "Joice Querubino",
        avatar: "https://avatars2.githubusercontent.com/u/66806696?s=460&u=8d322799564bf4b0e72262ca04d5f01fca74bb16&v=4",
        whatsapp: 99675698,
        bio: "Meu nome é Joyce Querubino e sou apaixonada por Desenvolvimento e Motion Design",
        subject: "Artes",
        cost: "30",
        weekday: [
            1
        ],
        time_from: [720],
        time_to: [1220],
    }
]



const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1;
    return subjects[arrayPosition]
}


function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffy, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length != 0

    if (isNotEmpty) {

        data.subject = getSubjects(data.subject)
        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays })
}

server.use(express.static("public"))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(8080);

