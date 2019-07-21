/* Adiciona o calendario na inicialização da pagina
 * Encontra a div em que o calendario aparecerá
 * Cria um novo calendario
 * Adiciona o plugin dayGrid para mostrar um calendário de dias
 * Adiciona um array de eventos
 * Mostra o calendario formado
*/
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid' ],
      events: [
        {
          id: '0',
          title: 'Ano Novo',
          start: '2019-01-01',
          allDay: true
        },
        {
          id: '1',
          title: 'Nossa Senhora dos Navegantes',
          start: '2019-02-02',
          allDay: true
        },
        {
          id: '2',
          title: 'Carnaval',
          start: '2019-03-04',
          end: '2019-03-06'
        },
        {
          id: '3',
          title: 'Sexta-Feira Santa',
          start: '2019-04-19',
          allDay: true
        },
        {
          id: '4',
          title: 'Dia de Tiradentes',
          start: '2019-04-21',
          allDay: true
        },
        {
          id: '5',
          title: 'Dia do Trabalho',
          start: '2019-05-01',
          allDay: true
        },
        {
          id: '6',
          title: 'Corpus Christi',
          start: '2019-06-20',
          allDay: true
        },
        {
          id: '7',
          title: 'Independência do Brasil',
          start: '2019-09-07',
          allDay: true
        },
        {
          id: '8',
          title: 'Proc. República Rio Grandense',
          start: '2019-09-20',
          allDay: true
        },
        {
          id: '9',
          title: 'Nossa Senhora Aparecida',
          start: '2019-10-12',
          allDay: true
        },
        {
          id: '10',
          title: 'Dia do Professor',
          start: '2019-10-15',
          allDay: true
        },
        {
          id: '11',
          title: 'Dia do Servidor Público',
          start: '2019-10-28',
          allDay: true
        },
        {
          id: '12',
          title: 'Dia de Finados',
          start: '2019-11-02',
          allDay: true
        },
        {
          id: '13',
          title: 'Proclamação da República',
          start: '2019-11-15',
          allDay: true
        },
        {
          id: '14',
          title: 'Natal',
          start: '2019-12-25',
          allDay: true
        }
      ]
    });
    // alert('calendar2');
    // today = new Date();
    // calendar.incrementDate({ month:1});
    // calendar.gotoDate(today);
    calendar.render();
    calendar.render();
  });

