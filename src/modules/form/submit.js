import dayjs from "dayjs"

const form = document.querySelector('form')
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = (event) => {
  event.preventDefault()

  try {
    //Recupera o nome do cliente
    const name = clientName.value.trim()

    if(!name){
      return alert("Informe o nome do cliente")
    }

    //Recupera o horario selecionado
    const hourSelected = document.querySelector(".hour-selected")

    if(!hourSelected){
      return alert("Selecione a hora")
    }
    
    //Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")

    //Inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    const id = new Date().getTime()

    console.log({
      id,
      name,
      when
    })
  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    
  }
}