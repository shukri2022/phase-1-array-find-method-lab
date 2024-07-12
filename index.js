// code your solution here
function superbowlWin(records){
  const winningRecord = records.find(record => record.result === "W");
  return winningRecord ? winningRecord.year : undefined;
}
const records = [
  { year: "2018", result: "L" },
  { year: "2017", result: "L" },
  { year: "2016", result: "W" },
  { year: "2015", result: "N/A" }
];
console.log(superbowlWin(records))
