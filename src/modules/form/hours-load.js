import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hourr-click";

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }){
  // Limpar a lista de horarios
  hours.innerHTML = ""

  //Obter a lista dos horários ocupados
  const unavailableHours = dailySchedules.map((schedule) => 
    dayjs(schedule.when).format("HH:mm")
  )


  const opening = openingHours.map((hour) =>{
    //Recupera somente a hora
    const [scheduleHour] = hour.split(":")

    //Adicionar a hora na data e verificar se esta no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

    const available = !unavailableHours.includes(hour) && !isHourPast

    return {
      hour,
      available
    }
  })

  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if(hour === "9:00"){
      hourHeaderAdd("Manhã")
    }else if(hour === "13:00"){
      hourHeaderAdd("Tarde")
    }else if(hour === "18:00"){
      hourHeaderAdd("Noite")
    }

    hours.append(li)
  })

  hoursClick()
}

function hourHeaderAdd(title){
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}