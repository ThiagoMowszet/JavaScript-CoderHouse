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
class TurnsManager {
    list = [];
    constructor(addbutton) {
        let validation = sessionStorage.getItem("turns")
        if (validation != undefined) {
            this.list = JSON.parse(validation);
        }
        this.addbutton = addbutton;
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
                <select id="especialidad">
                    <option>Gruñón</option>
                    <option>Feliz</option>
                    <option>Dormilón</option>
                    <option>Tímido</option>
                    <option>Estornudo</option>
                    <option>Tontín</option>
                    <option>Doc</option>
                </select>

                <label for="diaTurno">Ingrese el dia del turno</label>
                <input id="diaTurno" type="date">

                <label for="horaTurno">Ingrese la hora del turno</label>
                <input id="horaTurno" type="time">
                </div>`
            });
        });
    }
}

let turnsManager = new TurnsManager(document.getElementsByClassName("addButton")[0]);



let searchButton = document.getElementsByClassName("searchButton")[0];

searchButton.addEventListener("click", () => {
    Swal.fire({
        html: createTable(turnsManager.list)
    })
});

function createTable(list) {
    let content = "<table class='tableModal'><thead><tr><th>Nombre</th><th>Dia</th><th>Hora</th></tr></thead><tbody>";
    for (const element of list) {
        content += `<tr><td>${element.fullName}</td><td>${element.day}</td><td>${element.hour}</td></tr>`;
    }
    content += "</tbody></table>";
    return content;
}