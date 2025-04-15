import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }){
  try {
    //fazer requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    //converte para JSON
    const data = await response.json()

    //Filtrar os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedules) => 
      dayjs(date).isSame(schedules.when, "day"))

    return dailySchedules

  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado")
  }
}