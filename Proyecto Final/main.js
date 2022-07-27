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
    createTable() {
        let content = "<div class='modalContent'><table class='tableModal'><thead><tr><th>Especialidad</th><th>Dia</th><th>Hora</th></tr></thead><tbody>";
        for (let i = 0; i < this.list.length; i++) {
            content += `<tr><td>${this.list[i].fullName}</td><td>${this.list[i].day}</td><td>${this.list[i].hour}</td><td><button onclick="turnsManager.removeTurn(${i})">III</button></td></tr>`;
        }
        content += "</tbody></table></div>";
        return content;
    }
    removeTurn(index) {
        Swal.fire({
            icon: "warning",
            title: "¿Esta seguro?",
            text: "Esta seguro que desea eliminar el turno?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminarlo!"
        }).then((result) => {
            if (result.isConfirmed) {
                this.list.splice(index, 1);
                let table = document.getElementsByClassName("modalContent")[0];
                table.innerHTML = this.createTable();
                sessionStorage.setItem("turns", JSON.stringify(this.list));
                Swal.fire({
                    icon: "success",
                    title: "Listo",
                    text: "Se ha eliminado el turno"
                });
            }
        });
    }
    constructor(addbutton, searchButton) {
        let validation = sessionStorage.getItem("turns")
        if (validation != undefined) {
            this.list = JSON.parse(validation);
        }
        this.addbutton = addbutton;
        this.searchButton = searchButton;
        let ref = this;
        this.searchButton.addEventListener("click", () => {
            Swal.fire({
                html: ref.createTable()
            })
        });
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


let turnsManager = new TurnsManager(document.getElementsByClassName("addButton")[0], document.getElementsByClassName("searchButton")[0]);