// カレンダー生成ボタンのクリックイベントを追加
document.getElementById('generate-button').addEventListener('click', function() {

    // ユーザーが入力した年と月を取得するコードをここに書きます
    const year = parseInt(document.getElementById('year-input').value);
    const month = parseInt(document.getElementById('month-input').value) - 1; // 月は0から始まるため、1を引く

    // カレンダーを生成する関数を呼び出します
     generateCalendar(year, month);
});

/**
 * カレンダーを生成して表示する関数
 * @param {number} year - カレンダーの年
 * @param {number} month - カレンダーの月 (0-11)
 */
function generateCalendar(year, month) {
    // 既存のカレンダー内容をクリアするコードをここに書きます
    const calendarElement = document.getElementById('calendar');
    calendarElement.innerHTML = '';
    
    // カレンダーのヘッダーを作成するコードをここに書きます
    const header = document.createElement('div');
    header.className = 'calendar-header';
    header.textContent = `${year}年 ${month + 1}月`;
    calendarElement.appendChild(header);

    // カレンダーの日付リストを作成するコードをここに書きます
    const daysList = document.createElement('ul');
    daysList.className = 'calendar-days';
    calendarElement.appendChild(daysList);

    // 月の日数を取得するコードをここに書きます
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // 月の初日の曜日を取得するコードをここに書きます
    const firstDay = new Date(year, month, 1).getDay();

    // ヘッダ（曜日）を表示するコードをここに書きます
	//曜日の表記用配列
	const weekdayNames = ["日", "月", "火", "水", "木", "金", "土"];
    for (let i = 0; i < 7; i++) {
        const HeadCell = document.createElement('li');
        HeadCell.className = 'calendar-date';
        HeadCell.textContent = weekdayNames[i];
        daysList.appendChild(HeadCell);
    }

    // 空白のセルを追加するコードをここに書きます

    // 日付セルを追加するコードをここに書きます
    
            // 日付セルのクリックイベントを追加
        dateCell.addEventListener('click', function() {
            // 既に選択されているセルの選択状態を解除
            const selected = document.querySelector('.calendar-date.selected');
            if (selected) {
                selected.classList.remove('selected');
            }
            // クリックされたセルを選択状態にする
            dateCell.classList.add('selected');
        });

}
