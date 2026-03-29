const fortunes = [
  {
    type: "星光大吉",
    work: "今天工作運很不錯，適合主動表現，老師或主管容易注意到你的努力。",
    study: "你的學習效率提升，特別適合複習重點或完成報告。",
    love: "愛情運微甜，和喜歡的人互動時有機會拉近距離。",
    money: "金錢運平穩，適合控制花費，不建議衝動購物。",
    summary: "今天是穩中帶進步的一天，只要主動一點，很多事情都會往好的方向發展。",
    ending: "宇宙提醒你：今天的你，比自己想像中更閃亮。"
  },
  {
    type: "月影轉機",
    work: "可能會遇到一點小混亂，但只要冷靜處理，最後能順利解決。",
    study: "學業上適合把不懂的地方重新整理，會有突然開竅的感覺。",
    love: "感情上不要太急，慢慢來反而更容易得到好結果。",
    money: "今天有小破財機率，記得別亂買沒必要的東西。",
    summary: "雖然有些波動，但今天其實暗藏轉機，關鍵在於耐心。",
    ending: "命運之門沒有關上，只是在等你輕輕推開。"
  },
  {
    type: "烈焰衝刺",
    work: "工作運旺盛，適合處理卡很久的事情，效率會比平常更高。",
    study: "讀書時專注力很強，適合挑戰難題與考前衝刺。",
    love: "今天魅力值上升，容易被注意，也容易讓別人留下好印象。",
    money: "偏財運普通，正財運較佳，適合認真完成該做的事。",
    summary: "今天非常適合行動，只要開始做，就有機會看到成果。",
    ending: "勇敢往前，你的火花正準備照亮整片天空。"
  },
  {
    type: "晨霧療癒",
    work: "今天比較適合穩定完成例行工作，不要給自己太大壓力。",
    study: "學習速度偏慢，但適合打基礎、背誦與整理筆記。",
    love: "感情方面需要多一些理解與包容，別因小事想太多。",
    money: "財運普通，建議以保守為主，先把必要開支安排好。",
    summary: "今天的關鍵字是放慢腳步，穩穩前進反而更有力量。",
    ending: "休息不是退步，而是在幫明天的自己充電。"
  },
  {
    type: "流星祝福",
    work: "容易得到別人的協助，團隊合作或請教他人會有好效果。",
    study: "今天很適合討論作業、和同學交流，靈感會特別多。",
    love: "愛情運佳，有機會收到意想不到的關心或小驚喜。",
    money: "財運不錯，但建議見好就收，不要貪心。",
    summary: "今天的人際運很加分，善用身邊資源會讓事情更順利。",
    ending: "幸運像流星一樣劃過，但你有能力把它留住。"
  },
  {
    type: "深海直覺",
    work: "今天適合低調處理事情，觀察清楚再出手會比較有利。",
    study: "你的理解力不錯，特別適合讀需要思考的內容。",
    love: "感情運帶點神秘感，也許有人正在默默注意你。",
    money: "金錢方面要特別小心，避免借錢或衝動下單。",
    summary: "今天適合用直覺和判斷力做決定，不要被外界節奏影響。",
    ending: "安靜的海面下，也藏著最深的力量。"
  },
  {
    type: "彩虹希望",
    work: "原本卡住的事情有機會出現新方法，別輕易放棄。",
    study: "學業運回升，今天很適合重新開始曾經想放棄的部分。",
    love: "感情上有溫暖的發展，適合主動傳訊息或表達心意。",
    money: "今天花錢容易花在讓自己快樂的地方，記得適度就好。",
    summary: "今天很適合重新整理心情，轉個念，運氣也會一起轉好。",
    ending: "雨後的彩虹不是奇蹟，而是堅持後的回報。"
  },
  {
    type: "銀河幸運",
    work: "今天有不錯的表現機會，適合報告、發言或展示成果。",
    study: "記憶力提升，背單字、公式、重點都會比較順。",
    love: "桃花運稍旺，單身者有機會遇到聊得來的人。",
    money: "財運穩定，可以考慮存下一點小錢，為未來準備。",
    summary: "今天是值得把握的一天，你的表現容易被看見。",
    ending: "星星不會隨便發光，而你今天剛好就是那顆最亮的。"
  },
  {
    type: "神秘考驗",
    work: "工作上可能會出現臨時狀況，但這也是你證明能力的時候。",
    study: "讀書時容易分心，建議先把手機放遠一點再開始。",
    love: "感情上容易誤會別人的意思，記得多確認、少猜測。",
    money: "今天不適合大額消費，務必冷靜思考後再做決定。",
    summary: "雖然今天有些挑戰，但只要穩住節奏，還是可以平安過關。",
    ending: "真正的強大，不是沒有風浪，而是面對風浪時依然站穩。"
  },
  {
    type: "黃金豐收",
    work: "工作與任務進展順利，努力容易得到實際成果。",
    study: "今天很適合交作業、複習考試內容或完成進度。",
    love: "愛情運溫暖穩定，適合好好珍惜眼前的互動。",
    money: "金錢運最佳的一天，可能有意外的小收穫或省到錢。",
    summary: "今天是收成感很強的一天，付出的努力有機會看見回報。",
    ending: "你播下的種子，正在悄悄長成屬於你的幸運。"
  }
];

const fortuneBtn = document.getElementById("fortuneBtn");
const resetBtn = document.getElementById("resetBtn");
const resultArea = document.getElementById("resultArea");

const fortuneTitle = document.getElementById("fortuneTitle");
const workResult = document.getElementById("workResult");
const studyResult = document.getElementById("studyResult");
const loveResult = document.getElementById("loveResult");
const moneyResult = document.getElementById("moneyResult");
const summaryResult = document.getElementById("summaryResult");
const endingResult = document.getElementById("endingResult");

function showFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const chosen = fortunes[randomIndex];

  fortuneTitle.textContent = `今日運勢：${chosen.type}`;
  workResult.textContent = chosen.work;
  studyResult.textContent = chosen.study;
  loveResult.textContent = chosen.love;
  moneyResult.textContent = chosen.money;
  summaryResult.textContent = chosen.summary;
  endingResult.textContent = chosen.ending;

  resultArea.classList.remove("hidden");
}

function resetFortune() {
  resultArea.classList.add("hidden");
}

fortuneBtn.addEventListener("click", showFortune);
resetBtn.addEventListener("click", resetFortune);
