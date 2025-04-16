import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load";
import { schedulesShow } from "./show.js";

const selectedDate = document.getElementById("date")

export async function schedulesDay(){
  //obter a data do input
  const date = selectedDate.value

  //buscar na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date })

  //exibir os agendamenos
  schedulesShow({ dailySchedules })


  // renderizar as horas disponíveis
  hoursLoad({ date, dailySchedules })
}