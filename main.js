const arrayDatas = [
  {
    data: '2021-02',
  },
  {
    data: '2021-03',
  },
  { 
    data: "2021-04"
  },
  { 
    data: "2021-05"
  },
];

const retornarMes = (date) => {
  const splitDate = date.split('-');
  
  const newDate = new Date(splitDate[0], parseInt(splitDate[1]) - 1);
  return newDate.toLocaleString('pt-br', { month: 'short' })
};

let meses = arrayDatas.map(item => {
  return retornarMes(item.data)
})

console.log(meses)
