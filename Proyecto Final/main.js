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
            Swal.fire({
                preConfirm: (response) => {
                    let especialidad = document.getElementById("especialidad").value
                    let diaTurno = document.getElementById("diaTurno").value
                    let horaTurno = document.getElementById("horaTurno").value

                    if (response) {
                        if (especialidad == "" || diaTurno == "" || horaTurno == "") {
                            Swal.fire({
                                icon: "error",
                                title: "Error",
                                text: "Debe de llenar todos los campos"
                            })
                        } else {
                            let turn = document.createElement("tr")
                            turn.innerHTML = `<td>${especialidad}</td><td>${diaTurno}</td><td>${horaTurno}</td>`;
                            ref.tablebody.append(turn);
                            this.list.push(new Turn(especialidad, diaTurno, horaTurno));
                            sessionStorage.setItem("turns", JSON.stringify(this.list));
                            Swal.fire({
                                icon: "success",
                                title: "Listo",
                                text: "Se ha registrado su turno"
                            });
                        }
                    }
                },
                icon: "question",
                html: `
                <div class="addFormAlert">
                <label for="especialidad">Ingrese la Especialidad</label>
                <input id="especialidad" type="text">
                <label for="diaTurno">Ingrese el dia del turno</label>
                <input id="diaTurno" type="text">
                <label for="horaTurno">Ingrese la hora del turno</label>
                <input id="horaTurno" type="text">
                </div>`
            });
        });
    }
}

let turnList = new TurnList(document.getElementById("table"), document.getElementById("addTurn"));