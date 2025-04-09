export function hoursClick(){
  const hours = document.querySelectorAll(".hour-available")
  
  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {

      //remove a classe de todas as li não selecionadas
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      //adiciona a classe na li clicada
      selected.target.classList.add("hour-selected")
    })
  })
}