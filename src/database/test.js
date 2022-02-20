const Database = require('./db')
const createProffy = require('./createProffy')



Database.then(async (db) => {
  // Inserir dados
  proffyValue = {
    name: "Fernandes Diego",
    avatar: "https://avatars0.githubusercontent.com/u/68926804?s=460&u=d0018b097c718be5b206aec7f22f540d192020fc&v=4",
    whatsapp: "65565617111",
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
  }

  classValue = {
    subject: 1,
    cost: "20",
    // o proffy vira do banco de dados
  }

  classScheduleValues = [
    // class_id vira do banco de dados, cadastrando a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  // await createProffy(db, {proffyValue, classValue, classScheduleValues})

  //conslutar os dados inceridos

  // todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys")
  // console.log(selectedProffys)

  // consultar as classes de um proffy e trazer os seus dados juntos
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `) 
  // console.log(selectClassesAndProffys)

  // o horario que a pessoa trabalha, é das 8 ate 18
  // o horario time_fro (8h) precisa ser = ao horario solicitado
  // o time_to precisa ser acima
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = 1
    AND class_schedule.weekday  = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300"

  `)

  console.log(selectClassesSchedules)
  
})