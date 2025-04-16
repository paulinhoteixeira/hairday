import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"
const periods = document.querySelectorAll(".period")

//Gerar evento de clicl para cada lista
periods.forEach((periods) => {
  periods.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")){
      const item = event.target.closest("li")

      //Capturar ID que deseja remover
      const { id } = item.dataset

      //Confirma que o ID foi selecionado
      if(id){
        //Confirma se o usúario quer cancelar
        const isConfirm = confirm("Tem certeza eu deseja cancelar o agendamento?")

        if(isConfirm){
          //Faz a requisição na API para cancelar
          await scheduleCancel({ id })

          //recarregar agendamentos
          schedulesDay()
        }
      }
    }
  })
})