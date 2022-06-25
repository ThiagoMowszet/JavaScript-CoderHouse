class MyTurns {
    list = [];
    constructor(table) {
        this.table = table;
        let tablehead = document.createElement("thead");
        tablehead.innerHTML = `<tr><th>Nombre</th><th>Dia</th><th>Hora</th></tr>`;
        table.append(tablehead);
        this.tablebody = this.table.appendChild(document.createElement("tbody"));
    }

    loadTurns() {
        let validation = sessionStorage.getItem("turns")
        if (validation != undefined) {
            this.list = JSON.parse(validation);
            for (let el of this.list) {
                let turn = document.createElement("tr");
                turn.innerHTML = `<td>${el.fullName}</td><td>${el.day}</td><td>${el.hour}</td>`;
                this.tablebody.append(turn);
            }
        }
    }
}

let turnlist = new MyTurns(document.getElementById("table"));
turnlist.loadTurns()