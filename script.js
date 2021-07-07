document.getElementById("title");

const pacientesRadiologia = [
  {
    horaMedica: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    horaMedica: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    horaMedica: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },

  {
    horaMedica: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },

  {
    horaMedica: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

const pacientesTraumatologia = [
  {
    horaMedica: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    horaMedica: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    horaMedica: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    horaMedica: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    horaMedica: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    horaMedica: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    horaMedica: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];

const pacientesDental = [
  {
    horaMedica: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    horaMedica: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2	",
    prevision: "ISAPRE",
  },
  {
    horaMedica: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },

  {
    horaMedica: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },

  {
    horaMedica: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },

  {
    horaMedica: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

function impresionPacientes(pacientes) {
  document.write(`<br> Primera atencion:
  
  ${pacientes[0].paciente} - ${pacientes[0].prevision}
  
  Última atención:

  ${pacientes[pacientes.length - 1].paciente} - ${
    pacientes[pacientes.length - 1].prevision
  }
  <br>
  `);
}

impresionPacientes(pacientesRadiologia);
impresionPacientes(pacientesTraumatologia);
impresionPacientes(pacientesDental);

let texto =
  "<tr><th>Hora medica</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>";

for (let i = 0; i < pacientesRadiologia.length; i++) {
  texto += `<tr>
    <td>${pacientesRadiologia[i].horaMedica}</td>
    <td>${pacientesRadiologia[i].especialista}</td>
    <td>${pacientesRadiologia[i].paciente}</td>
    <td>${pacientesRadiologia[i].rut}</td>
    <td>${pacientesRadiologia[i].prevision}</td>
    </tr>`;
}
for (let i = 0; i < pacientesTraumatologia.length; i++) {
  texto += `<tr>
      <td>${pacientesTraumatologia[i].horaMedica}</td>
      <td>${pacientesTraumatologia[i].especialista}</td>
      <td>${pacientesTraumatologia[i].paciente}</td>
      <td>${pacientesTraumatologia[i].rut}</td>
      <td>${pacientesTraumatologia[i].prevision}</td>
      </tr>`;
}
for (let i = 0; i < pacientesDental.length; i++) {
  texto += `<tr>
      <td>${pacientesDental[i].horaMedica}</td>
      <td>${pacientesDental[i].especialista}</td>
      <td>${pacientesDental[i].paciente}</td>
      <td>${pacientesDental[i].rut}</td>
      <td>${pacientesDental[i].prevision}</td>
      </tr>`;
}

document.getElementById("tableBody").innerHTML = texto;
