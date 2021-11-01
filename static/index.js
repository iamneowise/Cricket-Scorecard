const scorecardData = [
  {
    "name": 'david warner',
    "runs": 1,
    "balls": 2,
    "4s": 0,
    "6s": 0,
    "wicketStatus": "c Jos Buttler b Chris Woakes",
    "wiki": 'https://en.wikipedia.org/wiki/David_Warner_(cricketer)'
  },
  {
    "name": 'Aaron finch',
    "runs": 44,
    "balls": 49,
    "4s": 4,
    "6s": 0,
    "wicketStatus": "c Jonny Bairstow b Chris Jordan",
    "wiki": 'https://en.wikipedia.org/wiki/Aaron_Finch',
  },
  {
    "name": 'steve smith',
    "runs": 1,
    "balls": 5,
    "4s": 0,
    "6s": 0,
    "wicketStatus": "c Chris Woakes b Chris Jordan",
    "wiki": 'https://en.wikipedia.org/wiki/Steve_Smith_(cricketer)',
  },
  {
    "name": 'Glenn maxwell',
    "runs": 6,
    "balls": 9,
    "4s": 0,
    "6s": 0,
    "wicketStatus": "lbw b Chris Woakes",
    "wiki": 'https://en.wikipedia.org/wiki/Glenn_Maxwell',
  },
  {
    "name": 'marcus Stoinis',
    "runs": 0,
    "balls": 4,
    "4s": 0,
    "6s": 0,
    "wicketStatus": "lbw b Adil Rashid",
    "wiki": 'https://en.wikipedia.org/wiki/Marcus_Stoinis',
  },
  {
    "name": 'matthew wade',
    "runs": 18,
    "balls": 18,
    "4s": 2,
    "6s": 0,
    "wicketStatus": "c Jason Roy b Liam Livingstone",
    "wiki": 'https://en.wikipedia.org/wiki/Matthew_Wade',
  },
  {
    "name": 'ashton agar',
    "runs": 20,
    "balls": 20,
    "4s": 0,
    "6s": 2,
    "wicketStatus": "c Liam Livingstone b Tymal Mills",
    "wiki": 'https://en.wikipedia.org/wiki/Ashton_Agar',
  },
  {
    "name": 'pat cummins',
    "runs": 12,
    "balls": 3,
    "4s": 0,
    "6s": 2,
    "wicketStatus": "b Chris Jordan",
    "wiki": 'https://en.wikipedia.org/wiki/Pat_Cummins',
  },
  {
    "name": 'mitchell starc',
    "runs": 13,
    "balls": 6,
    "4s": 1,
    "6s": 1,
    "wicketStatus": "c Jos Buttler b Tymal Mills",
    "wiki": 'https://en.wikipedia.org/wiki/Mitchell_Starc',
  },
  {
    "name": 'Adam zampa',
    "runs": 1,
    "balls": 4,
    "4s": 0,
    "6s": 0,
    "wicketStatus": "run out(Jos Buttler)",
    "wiki": 'https://en.wikipedia.org/wiki/Adam_Zampa',
  },
  {
    "name": 'josh hazlewood',
    "runs": 0,
    "balls": 0,
    "4s": 0,
    "6s": 0,
    "wicketStatus": "not out",
    "wiki": 'https://en.wikipedia.org/wiki/Josh_Hazlewood',
  },
];

const teamData = 'Australia vs England';

const tableBody = document.getElementById('tableBody');
const teams = document.getElementById('teams');
let tbodyInnerHtml = '';
scorecardData.forEach((data, index) => {
  tbodyInnerHtml += `
        <tr>
        <td class="tabledata d1">
        <a href="${ data.wiki }" target="_blank" id="Batsman Wiki">${ data.name }</a>
            <span class="wicketState">${ data.wicketStatus }</span>
          </td>
          <td class="tabledata">${ data.runs }</td>
          <td class="tabledata">${ data.balls }</td>
          <td class="tabledata">${ data['4s'] }</td>
          <td class="tabledata">${ data['6s'] }</td>
          <td class="tabledata">${ (data.runs / data.balls) ? ((data.runs / data.balls) * 100).toFixed(2) : '0.00' }</td>
          </tr>`
})

teams.innerHTML = teamData;
tableBody.innerHTML = tbodyInnerHtml;