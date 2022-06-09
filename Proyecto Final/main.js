// Creo la clase Turno.
class Turn {
	fullName;
	day;
	hour;
	constructor(fullName, day, hour) {
		this.fullName = fullName;
		this.day = day;
		this.hour = hour;
	}
}


// Creo la clase lista de turnos.
class TurnList {
	list = [];
	constructor() {
	}
	
    // Solicitar un turno.
    addTurno(fullName, day, hour) {
		this.list.push(new Turn(fullName, day, hour));
	}

    // Eliminar un turno.
    removeTurn(turnName, turnDay) {
        let turnIndex = this.list.findIndex((item) =>{
            return (item.fullName == turnName) && (item.day == turnDay);
        });

        if(turnIndex == -1){
            alert("Usted no tiene un turno registrado con esos datos")
        }else{
            this.list.splice(turnIndex, 1);
            alert(`el turno con el/la ${turnName} el ${turnDay} fue eliminado`)
        }
    }

    // Listar los turnos.
    alertTurn(){
        let message = "";
        this.list.forEach((item) => {
            message = message.concat(`\n- Usted tiene un turno con el ${item.fullName} el dia ${item.day} a las ${item.hour}`);
        });
        alert(message)
    }

    // Filtro los turnos por dia.
    alertTurnByDay(day){
        let dayFilter = this.list.filter((item) => {
            return item.day == day
        });

        let message = "";
        for(const item of dayFilter){
            message = message.concat(`\n Usted tiene un turno con el ${item.fullName} el dia ${item.day} a las ${item.hour}`)
        }
        alert(message);
    }
}


let turnList = new TurnList;

let menu = `Ingrese una opcion:

1. Solicitar Turno.
2. Eliminar un Turno.
3. Listar mis Turnos.
4. Filtar mis turnos por dia.
5. Salir.
`

let finished = false;

// Ciclo con while y switch para manipular el menu. 
while(!finished){

switch(prompt(menu)){

    case "1": 
        turnList.addTurno(
            prompt("Seleccione la especialidad del dr: (Ej: Traumatologo)"),
            prompt("Seleccione el dia que desee atenderse: (Ej: 25 de Abril)"),
            prompt("Seleccione la hora: (Ej: 22hrs)")
        );
        break;

    case "2":
        turnList.removeTurn(
            prompt("Ingrese la especialidad de su doctor: (Ej: Traumatologo)"),
            prompt("Ingrese el dia del turno: (Ej: 25 de Abril)")
        );
        break;

    case "3":
        turnList.alertTurn()
        break;

    case "4":
        turnList.alertTurnByDay(
            prompt("Seleccione el dia por el cual desee filtrar su turno: (Ej: Traumatologia)")
        );
        break;

    case "5":
        finished = true;
        break;

    default:
        alert("Ingrese una opcion valida")
        break;
    }
}