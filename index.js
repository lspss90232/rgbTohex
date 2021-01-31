// 定義變數-從html抓取
let red_number = document.querySelector("#red_number")
let green_number = document.querySelector("#green_number")
let blue_number = document.querySelector("#blue_number")
let hex_number = document.querySelector("#hex_number")

let red_color_box = document.querySelector("#red_box")
let green_color_box = document.querySelector("#green_box")
let blue_color_box = document.querySelector("#blue_box")
let hex_color_box = document.querySelector("body")

// 初始值
red_color_box.value = "0"
green_color_box.value = "0"
blue_color_box.value = "0"
hex_color_box.style.backgroundColor = "#000000"
red_color_box.style.backgroundColor = "#000000"
green_color_box.style.backgroundColor = "#000000"
blue_color_box.style.backgroundColor = "#000000"
// 定義變數-計算用
all_rembox = ["00", "00", "00"]
num_box = []
all_regbox = []


// slider被拉動時，右邊數字變動，下面HEX色碼變動
red_number.addEventListener('oninput', red_event)
red_color_box.addEventListener('keydown', red_event)
function red_event() {
  slider(0)
  red_color_box.value = event.target.value
  red_color_box.style.backgroundColor = "#" + all_rembox[0] + "0000"
}
green_number.addEventListener('oninput', green_event)
green_color_box.addEventListener('keydown', green_event)
function green_event() {
  slider(1)
  green_color_box.value = event.target.value
  green_color_box.style.backgroundColor = "#" + "00" + all_rembox[1] + "00"
}
blue_number.addEventListener('oninput', blue_event)
blue_color_box.addEventListener('keydown', blue_event)
function blue_event() {
  slider(2)
  blue_color_box.value = event.target.value
  blue_color_box.style.backgroundColor = "#" + "0000" + all_rembox[2]
}

// 函式-slider移動
function slider(i) {
  all_rembox[i] = event.target.value
  // console.log(event.target.value)
  rgb_To_hex(all_rembox[i], i)
  hex_number.value = all_rembox.join('')
  hex_color_box.style.backgroundColor = "#" + hex_number.value
}

// rgb->hex
// 函式-將十進位轉換成十六進位
function rgb_To_hex(number, i) {
  // remainder1是第一個餘數
  unit_rembox = []
  let rem1 = number % 16
  let rem2 = ""
  let hex = ""
  // int是整除的整數
  let int = Math.floor(number / 16)
  // remainder2是第二個餘數
  rem2 = int % 16
  // 如果第一個餘數介於10-15之間，則轉換成英文字母，否則轉換為數字字串
  check_num_to_Alph(rem2)
  // 如果第二個餘數介於10-15之間，則轉換成英文字母，否則轉換為數字字串
  check_num_to_Alph(rem1)
  unit_rembox.forEach(function (item) {
    hex += item
  })
  //hex=["A","B"]
  all_rembox[i] = hex
  // console.log(`hex:${hex}`)
}


// 函式-如果餘數介於10-15之間，則轉換成英文字母，否則轉換為數字字串
function check_num_to_Alph(num) {
  if (9 < num && num < 16) {
    let alpha = String.fromCharCode(num + 55)
    unit_rembox.push(alpha)
  } else {
    unit_rembox.push(String(num))
  }
  // console.log(unit_rembox) 
}



// hex->rgb
hex_number.addEventListener('oninput', hex_number_event)
function hex_number_event() {
  if (hex_number.value.length <= 6) {
    // console.log(hex_number.value)
    hex_color_box.style.backgroundColor = "#" + hex_number.value
    let first_group = hex_number.value.slice(0, 2)
    let second_group = hex_number.value.slice(2, 4)
    let third_group = hex_number.value.slice(4, 6)
    // console.log(hex_number.value)
    textchange(first_group)
    textchange(second_group)
    textchange(third_group)
    red_number.value = all_regbox[0]
    green_number.value = all_regbox[1]
    blue_number.value = all_regbox[2]
    red_color_box.value = all_regbox[0]
    green_color_box.value = all_regbox[1]
    blue_color_box.value = all_regbox[2]
    all_regbox = []
  }
}

// 函式-hex輸入六個值，兩個數字一組，轉換成十進位制
function textchange(number) {
  let number_1 = number.slice(0, 1)
  testnumber(number_1)
  // console.log(number_1)
  let number_2 = number.slice(1, 2)
  testnumber(number_2)
  // console.log(number_2)
  let change_rgb = num_box[0] * Math.pow(16, 1) + num_box[1] * Math.pow(16, 0)
  // change_rgb為轉換成十進位制的值
  // console.log(change_rgb)
  all_regbox.push(change_rgb)
  num_box = []
}
// 函式-若有A-F則轉換成數字
function testnumber(number) {
  let a = /[a-z]/i
  // let b = a.test(number);//true,說明有英文字母
  if (a.test(number)) {
    number = number.charCodeAt(0) - 55
    num_box.push(number)
  } else {
    num_box.push(number)
  }
  // console.log(num_box)
}
