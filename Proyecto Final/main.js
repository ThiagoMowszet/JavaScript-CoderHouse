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
    constructor(table, addbutton) {
        let validation = sessionStorage.getItem("turns")
        if (validation != undefined) {
            this.list = JSON.parse(validation);
        }
        this.addbutton = addbutton;
        this.table = table;
        let tablehead = document.createElement("thead")
        tablehead.innerHTML = `<tr><th>Nombre</th><th>Dia</th><th>Hora</th></tr>`;
        table.append(tablehead);
        this.tablebody = this.table.appendChild(document.createElement("tbody"));
        let ref = this;
        this.addbutton.addEventListener("click", () => {
            let dr = prompt("Seleccione la especialidad del dr: (Ej: Traumatologo)");
            let dayH = prompt("Seleccione el dia que desee atenderse: (Ej: 25 de Abril)");
            let hourH = prompt("Seleccione la hora: (Ej: 22hrs)");
            let turn = document.createElement("tr");
            turn.innerHTML = `<td>${dr}</td><td>${dayH}</td><td>${hourH}</td>`;
            ref.tablebody.append(turn);
            this.list.push(new Turn(dr, dayH, hourH));
            sessionStorage.setItem("turns", JSON.stringify(this.list));
        });
    }
}

let turnList = new TurnList(document.getElementById("table"), document.getElementById("addTurn"));